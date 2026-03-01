-- =============================================
-- REFERRAL SYSTEM TABLES
-- =============================================

-- 1) Add referral_code column to profiles table
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS referral_code TEXT UNIQUE,
  ADD COLUMN IF NOT EXISTS referred_by TEXT;  -- user_id of referrer

-- Generate referral codes for existing profiles that don't have one
UPDATE public.profiles
SET referral_code = upper(substring(md5(id || email || random()::text), 1, 6))
WHERE referral_code IS NULL;

-- Function to generate a unique referral code
CREATE OR REPLACE FUNCTION public.generate_referral_code()
RETURNS TEXT AS $$
DECLARE
  code TEXT;
  exists_count INT;
BEGIN
  LOOP
    -- Generate 6 char alphanumeric code
    code := upper(substring(md5(random()::text || now()::text), 1, 6));
    -- Check uniqueness
    SELECT COUNT(*) INTO exists_count FROM public.profiles WHERE referral_code = code;
    EXIT WHEN exists_count = 0;
  END LOOP;
  RETURN code;
END;
$$ LANGUAGE plpgsql;

-- 2) referrals table
CREATE TABLE IF NOT EXISTS public.referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  referred_user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  referral_code_used TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'qualified', 'expired')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(referred_user_id)
);

-- 3) referral_wallet table
CREATE TABLE IF NOT EXISTS public.referral_wallet (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES public.profiles(id) ON DELETE CASCADE,
  credits_balance INT NOT NULL DEFAULT 0,
  pending_commission NUMERIC(10,2) NOT NULL DEFAULT 0,
  withdrawable_commission NUMERIC(10,2) NOT NULL DEFAULT 0,
  total_earned NUMERIC(10,2) NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4) commission_transactions table
CREATE TABLE IF NOT EXISTS public.commission_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  referred_user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  plan_name TEXT NOT NULL,
  commission_amount NUMERIC(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'unlock_ready', 'paid')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  unlock_at TIMESTAMPTZ NOT NULL,
  paid_at TIMESTAMPTZ
);

-- 5) withdrawal_requests table
CREATE TABLE IF NOT EXISTS public.withdrawal_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  amount NUMERIC(10,2) NOT NULL,
  upi_id TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'paid', 'rejected')),
  admin_note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- =============================================
-- RLS POLICIES
-- =============================================

-- Enable RLS
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referral_wallet ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.commission_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.withdrawal_requests ENABLE ROW LEVEL SECURITY;

-- referrals: users can read their own referrals (as referrer)
CREATE POLICY "Users can read own referrals"
  ON public.referrals FOR SELECT
  USING (referrer_user_id = auth.uid());

-- referral_wallet: users can read/update their own wallet
CREATE POLICY "Users can read own wallet"
  ON public.referral_wallet FOR SELECT
  USING (user_id = auth.uid());

-- commission_transactions: users can read their own
CREATE POLICY "Users can read own commissions"
  ON public.commission_transactions FOR SELECT
  USING (referrer_user_id = auth.uid());

-- withdrawal_requests: users can read and insert their own
CREATE POLICY "Users can read own withdrawals"
  ON public.withdrawal_requests FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own withdrawals"
  ON public.withdrawal_requests FOR INSERT
  WITH CHECK (user_id = auth.uid());

-- =============================================
-- UPDATE handle_new_user TRIGGER
-- to auto-generate referral_code and handle ?ref= tracking
-- =============================================

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  store_name_val TEXT;
  store_domain_val TEXT;
  ref_code TEXT;
  referrer_id UUID;
  new_ref_code TEXT;
BEGIN
  store_name_val   := new.raw_user_meta_data ->> 'store_name';
  store_domain_val := new.raw_user_meta_data ->> 'store_domain';
  ref_code         := new.raw_user_meta_data ->> 'ref_code';

  -- Generate unique referral code for the new user
  new_ref_code := public.generate_referral_code();

  -- Resolve referrer by referral code (UUID comparison, no text cast needed)
  IF ref_code IS NOT NULL THEN
    SELECT id INTO referrer_id
    FROM public.profiles
    WHERE referral_code = upper(ref_code)
      AND id != new.id          -- prevent self-referral
    LIMIT 1;
  END IF;

  -- Insert profile
  INSERT INTO public.profiles (id, email, store_domain, referral_code, referred_by, created_at, updated_at)
  VALUES (
    new.id,
    new.email,
    store_domain_val,
    new_ref_code,
    referrer_id::text,          -- referred_by is TEXT in profiles
    now(),
    now()
  )
  ON CONFLICT (id) DO UPDATE SET
    referral_code = EXCLUDED.referral_code,
    referred_by   = COALESCE(profiles.referred_by, EXCLUDED.referred_by);

  -- Create store
  IF store_name_val IS NOT NULL AND store_domain_val IS NOT NULL THEN
    INSERT INTO public.stores (
      id, user_id, name, domain, shopify_domain,
      plan, max_leads, remaining_leads, total_leads,
      leads_this_month, installed, created_at, updated_at
    )
    VALUES (
      gen_random_uuid(), new.id::text, store_name_val, store_domain_val,
      store_domain_val, 'Free', 50, 50, 0, 0, false, now(), now()
    )
    ON CONFLICT DO NOTHING;
  END IF;

  -- Create widget_settings default row
  INSERT INTO public.widget_settings (store_id)
  SELECT s.id FROM public.stores s WHERE s.user_id = new.id::text
  ON CONFLICT (store_id) DO NOTHING;

  -- Create referral_wallet for new user
  INSERT INTO public.referral_wallet (user_id)
  VALUES (new.id)
  ON CONFLICT (user_id) DO NOTHING;

  -- If referrer found: log referral + award credits
  IF referrer_id IS NOT NULL THEN
    INSERT INTO public.referrals (referrer_user_id, referred_user_id, referral_code_used, status)
    VALUES (referrer_id, new.id, upper(ref_code), 'pending')
    ON CONFLICT (referred_user_id) DO NOTHING;

    -- Award 10 credits to referrer
    INSERT INTO public.referral_wallet (user_id, credits_balance)
    VALUES (referrer_id, 10)
    ON CONFLICT (user_id) DO UPDATE SET
      credits_balance = referral_wallet.credits_balance + 10,
      total_earned    = referral_wallet.total_earned + 10,
      updated_at      = now();

    -- Give referrer's store +10 remaining leads
    UPDATE public.stores
    SET remaining_leads = remaining_leads + 10,
        max_leads       = max_leads + 10
    WHERE user_id = referrer_id::text;
  END IF;

  RETURN new;
EXCEPTION WHEN OTHERS THEN
  RAISE WARNING 'Error in handle_new_user: %', SQLERRM;
  RETURN new;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Backfill wallets for existing users who don't have one
INSERT INTO public.referral_wallet (user_id)
SELECT id FROM public.profiles
WHERE id NOT IN (SELECT user_id FROM public.referral_wallet)
ON CONFLICT (user_id) DO NOTHING;

-- Backfill referral codes for profiles missing them
UPDATE public.profiles
SET referral_code = public.generate_referral_code()
WHERE referral_code IS NULL;
