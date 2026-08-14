import type { CompanyProfile } from '../types/company'
import { images } from '../data/images'

interface AboutProps {
  profile: CompanyProfile
}

const highlights = [
  { label: 'Founded', value: '2023' },
  { label: 'Headquarters', value: 'Rwanda' },
  { label: 'Focus', value: 'Real Estate & Technology' },
]

export function About({ profile }: AboutProps) {
  return (
    <section id="about" className="bg-paper py-24 text-ink">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="image-frame aspect-[4/5] max-h-[620px] border border-ink/10 shadow-xl shadow-ink/10">
          <img
            src={images.about}
            alt="Professional modern architecture and interior design"
            loading="lazy"
          />
        </div>

        <div>
          <p className="section-label">About Us</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Where real estate meets innovation
          </h2>
          <div className="mt-5 h-1 w-16 bg-crimson" />

          <ul className="mt-8 space-y-4">
            <li className="flex gap-4 border-b border-ink/10 pb-4">
              <span className="mt-1 h-2 w-2 shrink-0 bg-crimson" />
              <p className="text-base leading-relaxed text-ink/80">
                Founded in <strong className="text-ink">{profile.founded}</strong> and based in{' '}
                <strong className="text-ink">Rwanda</strong>, {profile.name} is building the next
                generation of living and working spaces.
              </p>
            </li>
            <li className="flex gap-4 border-b border-ink/10 pb-4">
              <span className="mt-1 h-2 w-2 shrink-0 bg-crimson" />
              <p className="text-base leading-relaxed text-ink/80">
                We operate at the intersection of{' '}
                <strong className="text-ink">real estate development</strong> and{' '}
                <strong className="text-ink">technology innovation</strong>.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 bg-crimson" />
              <p className="text-base leading-relaxed text-ink/80">
                Creating sustainable, smart, and inclusive environments for modern Rwanda.
              </p>
            </li>
          </ul>

          <div className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="bg-paper px-4 py-5 text-center">
                <p className="text-xs uppercase tracking-wider text-crimson">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
