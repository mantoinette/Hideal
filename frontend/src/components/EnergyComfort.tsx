import { comfortFeatures, energyApproach } from '../data/energy'

export function EnergyComfort() {
  return (
    <section id="energy" className="bg-ink py-24">
      <div className="section-container">
        <div className="mb-14 max-w-3xl">
          <p className="section-label">Energy & Comfort</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl">
            {energyApproach.headline}
          </h2>
          <div className="mt-5 h-1 w-16 bg-crimson" />
          <p className="mt-6 text-lg leading-relaxed text-white/70">{energyApproach.intro}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <EnergyColumn title="Reduce" items={energyApproach.reduce} />
          <EnergyColumn title="Generate" items={energyApproach.generate} />
          <EnergyColumn title="Optimize" items={energyApproach.optimize} />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold uppercase tracking-wider text-white/80">
          {energyApproach.flow.map((step, index) => (
            <span key={step} className="flex items-center gap-3">
              <span className="border border-crimson/50 bg-crimson/10 px-4 py-2 text-crimson-light">{step}</span>
              {index < energyApproach.flow.length - 1 && <span className="text-white/30">→</span>}
            </span>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-16">
          <h3 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Better Buildings Should Feel Better
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Sustainability should not be experienced as a compromise. It should make buildings better.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {comfortFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-white/75">
                <span className="h-1.5 w-1.5 shrink-0 bg-crimson" />
                {feature}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base italic text-white/60">
            HIDEAL seeks to create environments where energy performance and human comfort work together.
          </p>
        </div>
      </div>
    </section>
  )
}

function EnergyColumn({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="border border-white/10 bg-ink-soft p-6">
      <h3 className="font-display text-xl text-white">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-white/65">
            <span className="mt-2 h-1 w-1 shrink-0 bg-crimson" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
