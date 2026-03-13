"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CanonicalTag() {
  const pathname = usePathname();
  const [url, setUrl] = useState(`https://boostacart.com${pathname || ''}`);

  useEffect(() => {
    setUrl(`https://boostacart.com${pathname || ''}`);
  }, [pathname]);

  return (
    <link rel="canonical" href={url} />
  );
}
