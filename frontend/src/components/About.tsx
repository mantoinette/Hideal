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
      <div className="section-container grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="relative min-h-[280px] sm:min-h-[320px] lg:min-h-full">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-4 -right-4 top-4 left-4 border border-crimson/20 bg-crimson/[0.04]"
          />
          <div className="image-frame absolute inset-0 overflow-hidden shadow-xl shadow-ink/10">
            <img
              src={images.about}
              alt="Professional modern architecture and interior design"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="section-label">About Us</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Where real estate meets innovation
          </h2>
          <div className="mt-5 h-1 w-16 bg-crimson" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
            {profile.name} combines development expertise with technology to deliver spaces that
            are built to last—and designed for how Rwanda lives and works today.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex gap-4 border-b border-ink/10 pb-4">
              <span className="mt-2 h-2 w-2 shrink-0 bg-crimson" />
              <p className="text-base leading-relaxed text-ink/80">
                Founded in <strong className="text-ink">{profile.founded}</strong> and based in{' '}
                <strong className="text-ink">Rwanda</strong>, {profile.name} is building the next
                generation of living and working spaces.
              </p>
            </li>
            <li className="flex gap-4 border-b border-ink/10 pb-4">
              <span className="mt-2 h-2 w-2 shrink-0 bg-crimson" />
              <p className="text-base leading-relaxed text-ink/80">
                We operate at the intersection of{' '}
                <strong className="text-ink">real estate development</strong> and{' '}
                <strong className="text-ink">technology innovation</strong>.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="mt-2 h-2 w-2 shrink-0 bg-crimson" />
              <p className="text-base leading-relaxed text-ink/80">
                Creating sustainable, smart, and inclusive environments for modern Rwanda.
              </p>
            </li>
          </ul>

          <div className="mt-10 flex flex-col divide-y border border-ink/10 bg-white sm:flex-row sm:divide-x sm:divide-y-0">
            {highlights.map((item) => (
              <div key={item.label} className="flex-1 px-5 py-5 text-center sm:py-6">
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
