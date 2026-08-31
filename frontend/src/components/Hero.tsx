import type { CompanyProfile } from '../types/company'
import { images } from '../data/images'

interface HeroProps {
  profile: CompanyProfile
}

const focusAreas = ['Real Estate', 'Technology', 'Energy', 'People', 'Planet'] as const

export function Hero({ profile }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={images.hero}
        alt="Aspirational view of contemporary architecture and green urban development in Rwanda"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink/95 via-ink/70 to-ink/25" />
      <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/20 to-transparent" />

      <div className="section-container relative flex min-h-screen flex-col justify-end pb-16 pt-32 md:pb-24 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55">
            {profile.name} · Rwanda · {profile.founded}
          </p>

          <h1 className="mt-5 font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.08] tracking-tight text-white">
            <span className="block">Building Rwanda&apos;s Future.</span>
            <span className="mt-1 block text-white/90">
              Intelligently. <span className="text-crimson-light">Sustainably.</span>
            </span>
          </h1>

          <div className="mt-8 h-px w-20 bg-crimson" />

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Intelligent, comfortable and energy-efficient environments—for how Rwanda lives, works and grows.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/75 backdrop-blur-sm"
              >
                {area}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#about"
              className="bg-crimson px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-crimson-light"
            >
              Explore HIDEAL
            </a>
            <a
              href="#contact"
              className="border border-white/35 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-ink"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
