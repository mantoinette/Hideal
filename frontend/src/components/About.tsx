import type { CompanyProfile } from '../types/company'
import { images } from '../data/images'

interface AboutProps {
  profile: CompanyProfile
}

export function About({ profile }: AboutProps) {
  const highlights = [
    { label: 'Founded', value: profile.founded },
    { label: 'Headquarters', value: 'Kigali' },
    { label: 'Primary Market', value: 'Rwanda' },
    { label: 'Core Focus', value: 'Real Estate + Technology' },
  ]

  return (
    <section id="about" className="bg-paper py-24 text-ink">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <div className="image-frame aspect-[4/5] overflow-hidden border-l-4 border-crimson shadow-2xl shadow-ink/12 sm:aspect-[3/4]">
            <img
              src={images.about}
              alt="Sustainable development and innovation by HIDEAL in Rwanda"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div>
          <p className="section-label">HIDEAL</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Where Real Estate Meets Innovation
          </h2>
          <div className="mt-5 h-1 w-16 bg-crimson" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">{profile.about}</p>

          <div className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.label} className="bg-white px-4 py-5 text-center sm:py-6">
                <p className="text-xs uppercase tracking-wider text-crimson">{item.label}</p>
                <p className="mt-1.5 text-sm font-semibold text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
