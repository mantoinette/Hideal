import { sustainabilityHero, sustainabilityPillars } from '../data/sustainability'

export function Sustainability() {
  const featured = sustainabilityPillars.slice(0, 2)
  const remaining = sustainabilityPillars.slice(2)

  return (
    <section id="sustainability" className="bg-ink">
      <div className="relative h-[460px] overflow-hidden md:h-[520px]">
        <img
          src={sustainabilityHero}
          alt="Green building with trees and plants integrated into the architecture"
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink/75 via-ink/45 to-ink/20" />
        <div className="absolute inset-0 bg-linear-to-t from-ink/55 via-transparent to-ink/25" />

        <div className="section-container relative flex h-full items-end pb-16 md:pb-20">
          <div className="max-w-2xl">
            <p className="section-label">Green Building</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Sustainability at the core
            </h2>
            <div className="mt-5 h-1 w-16 bg-crimson" />
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Built into every HIDEAL project—from first sketch to final delivery.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">Five pillars</p>
          <p className="mt-3 text-lg leading-relaxed text-white/70">
            How we design, build, and operate—so every development leaves a lighter footprint.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} featured />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {remaining.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index + 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PillarCard({
  pillar,
  index,
  featured = false,
}: {
  pillar: (typeof sustainabilityPillars)[number]
  index: number
  featured?: boolean
}) {
  return (
    <article
      className={`group overflow-hidden border border-white/10 bg-ink-soft transition duration-300 hover:border-crimson/40 hover:shadow-lg hover:shadow-crimson/10 ${
        featured ? 'lg:grid lg:grid-cols-2 lg:items-stretch' : ''
      }`}
    >
      <div className={`image-frame relative overflow-hidden ${featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[280px]' : 'aspect-[16/10]'}`}>
        <img
          src={pillar.image}
          alt={pillar.alt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-crimson font-display text-sm text-white">
          0{index + 1}
        </span>
      </div>
      <div className={`flex flex-col justify-center ${featured ? 'p-6 lg:p-8' : 'p-6'}`}>
        <h3 className={`font-display text-white ${featured ? 'text-2xl' : 'text-xl'}`}>{pillar.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/65">{pillar.copy}</p>
      </div>
    </article>
  )
}
