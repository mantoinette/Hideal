import type { CompanyProfile } from '../types/company'

interface MissionProps {
  profile: CompanyProfile
}

export function Mission({ profile }: MissionProps) {
  return (
    <section className="bg-ink py-24">
      <div className="section-container">
        <div className="border-l-4 border-crimson pl-8 md:pl-12">
          <p className="section-label">Our Mission</p>
          <h2 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-snug text-white md:text-4xl">
            Building a scalable enterprise technology business
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/70">{profile.mission}</p>
        </div>
      </div>
    </section>
  )
}
