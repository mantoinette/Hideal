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
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-crimson">{profile.name}</p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            {profile.tagline}
          </h1>
          <div className="mt-5 h-1 w-16 bg-crimson" />
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
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
