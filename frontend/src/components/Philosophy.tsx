import { philosophyPillars } from '../data/philosophy'

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-ink py-24">
      <div className="section-container">
        <div className="mb-14 max-w-3xl">
          <p className="section-label">Our Philosophy</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl">
            People · Planet · Performance
          </h2>
          <div className="mt-5 h-1 w-16 bg-crimson" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {philosophyPillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="border border-white/10 bg-ink-soft p-8 transition hover:border-crimson/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">0{index + 1}</p>
              <h3 className="mt-3 font-display text-2xl text-white">{pillar.title}</h3>
              <p className="mt-1 text-sm font-medium text-crimson-light">{pillar.subtitle}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/65">{pillar.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
