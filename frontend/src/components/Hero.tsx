import type { CompanyProfile } from '../types/company'
import { images } from '../data/images'

interface HeroProps {
  profile: CompanyProfile
}

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
      <div className="absolute inset-0 bg-linear-to-r from-ink/92 via-ink/55 to-ink/15" />
      <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-transparent to-ink/25" />

      <div className="section-container relative flex min-h-screen items-center pt-28 pb-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
            Our vision for the future of Rwanda&apos;s built environment
          </p>
          <h1 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-tight text-white">
            {profile.tagline}
          </h1>
          <div className="mt-5 flex items-center gap-4">
            <div className="h-px w-10 bg-crimson" />
            <div className="h-1 w-14 bg-crimson" />
          </div>
          <p className="mt-5 font-display text-xl font-medium leading-snug text-white/95 md:text-2xl">
            HIDEAL develops intelligent, comfortable and energy-efficient environments designed for how Rwanda
            lives, works and grows.
          </p>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
            Combining real estate development, technology, energy efficiency and responsible design to create
            better places for people and the planet.
          </p>
          <p className="mt-4 text-sm tracking-wide text-white/50">
            Real Estate · Technology · Energy · People · Planet
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#about"
              className="bg-crimson px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-crimson-light"
            >
              Explore HIDEAL
            </a>
            <a
              href="#contact"
              className="border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-ink"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
