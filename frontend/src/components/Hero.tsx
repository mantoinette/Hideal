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
        alt="Modern sustainable architecture by HIDEAL"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink/92 via-ink/55 to-ink/15" />
      <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-transparent to-ink/25" />

      <div className="section-container relative flex min-h-screen items-center pt-28 pb-20">
        <div className="max-w-3xl">
          <h1 className="font-display text-[clamp(2.5rem,7vw,4.25rem)] font-semibold leading-none tracking-[0.12em] text-white">
            {profile.name}
          </h1>
          <div className="mt-5 flex items-center gap-4">
            <div className="h-px w-10 bg-crimson" />
            <div className="h-1 w-14 bg-crimson" />
          </div>
          <p className="mt-5 font-display text-xl font-medium leading-snug text-white/95 md:text-2xl lg:text-3xl">
            {profile.tagline}
          </p>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
            Real estate, technology, and sustainability—united to create future-ready environments.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#services"
              className="bg-crimson px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-crimson-light"
            >
              Explore Our Solutions
            </a>
            <a
              href="#contact"
              className="border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-ink"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
