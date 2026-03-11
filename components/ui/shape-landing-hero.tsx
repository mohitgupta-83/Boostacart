import { Syne } from 'next/font/google'

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })

export function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
  description,
}: {
  badge?: string
  title1?: string
  title2?: string
  description?: string
}) {
  return (
    <section className="relative w-full pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#10142B] border border-[#202545] shadow-[0_0_20px_rgba(32,37,69,0.5)] mb-10 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-sm text-cyan-200 font-medium tracking-wide">{badge}</span>
        </div>

        <h1 className={`${syne.className} text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight`}>
          <span className="text-white block mb-2">{title1}</span>
          <span className="relative">
            <span className="absolute -inset-1 block bg-gradient-to-r from-fuchsia-500 to-cyan-500 blur-2xl opacity-20"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
              {title2}
            </span>
          </span>
        </h1>

        {description && (
          <p className="text-lg sm:text-xl text-indigo-100/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
