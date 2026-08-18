import { sustainabilityHero, sustainabilityPillars } from '../data/sustainability'

export function Sustainability() {
  const topRow = sustainabilityPillars.slice(0, 3)
  const bottomRow = sustainabilityPillars.slice(3)

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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topRow.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
          {bottomRow.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof sustainabilityPillars)[number]
  index: number
}) {
  return (
    <article className="group overflow-hidden border border-white/10 bg-ink-soft transition hover:border-crimson/40">
      <div className="image-frame aspect-[16/10]">
        <img
          src={pillar.image}
          alt={pillar.alt}
          className="transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">
          0{index + 1}
        </span>
        <h3 className="mt-2 font-display text-xl text-white">{pillar.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/65">{pillar.copy}</p>
      </div>
    </article>
  )
}
