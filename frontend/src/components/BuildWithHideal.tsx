import { partnershipPathways } from '../data/partnerships'

export function BuildWithHideal() {
  return (
    <section id="partnerships" className="bg-ink py-24">
      <div className="section-container">
        <div className="mb-14 max-w-3xl">
          <p className="section-label">Build With HIDEAL</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl">
            Partnership opportunities
          </h2>
          <div className="mt-5 h-1 w-16 bg-crimson" />
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            We are open to opportunities that bring together land, capital, technology, expertise and development
            potential.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {partnershipPathways.map((pathway, index) => (
            <article
              key={pathway.title}
              className="border border-white/10 bg-ink-soft p-8 transition hover:border-crimson/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">0{index + 1}</p>
              <h3 className="mt-3 font-display text-xl text-white">{pathway.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{pathway.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block bg-crimson px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-crimson-light"
          >
            Explore a Partnership
          </a>
        </div>
      </div>
    </section>
  )
}
