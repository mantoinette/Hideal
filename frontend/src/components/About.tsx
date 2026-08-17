import type { CompanyProfile } from '../types/company'
import { images } from '../data/images'

interface AboutProps {
  profile: CompanyProfile
}

export function About({ profile }: AboutProps) {
  const highlights = [
    { label: 'Founded', value: profile.founded },
    { label: 'Headquarters', value: 'Rwanda' },
    { label: 'Focus', value: 'Real Estate & Technology' },
  ]

  return (
    <section id="about" className="bg-paper py-24 text-ink">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <div className="image-frame aspect-[4/5] overflow-hidden border-l-4 border-crimson shadow-2xl shadow-ink/12 sm:aspect-[3/4]">
            <img
              src={images.about}
              alt="Modern sustainable building development by HIDEAL"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div>
          <p className="section-label">About Us</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Where real estate meets innovation
          </h2>
          <div className="mt-5 h-1 w-16 bg-crimson" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
            {profile.name} combines development expertise with technology to deliver spaces that
            are built to last—and designed for how Rwanda lives and works today.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <span className="mt-2.5 h-2 w-2 shrink-0 bg-crimson" />
              <p className="text-base leading-relaxed text-ink/80">
                Founded in <strong className="text-ink">{profile.founded}</strong> and based in{' '}
                <strong className="text-ink">Rwanda</strong>, {profile.name} is building the next
                generation of living and working spaces.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="mt-2.5 h-2 w-2 shrink-0 bg-crimson" />
              <p className="text-base leading-relaxed text-ink/80">
                We operate at the intersection of{' '}
                <strong className="text-ink">real estate development</strong> and{' '}
                <strong className="text-ink">technology innovation</strong>.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="mt-2.5 h-2 w-2 shrink-0 bg-crimson" />
              <p className="text-base leading-relaxed text-ink/80">
                Creating sustainable, smart, and inclusive environments for modern Rwanda.
              </p>
            </li>
          </ul>

          <div className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-3">
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
