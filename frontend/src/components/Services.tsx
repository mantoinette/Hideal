import { coreFocusAreas } from '../data/services'

export function Services() {
  return (
    <section id="services" className="bg-paper py-24 text-ink">
      <div className="section-container">
        <div className="mb-14 max-w-3xl">
          <p className="section-label">Solutions</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">Core Focus Areas</h2>
          <div className="mt-5 h-1 w-16 bg-crimson" />
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Technology-driven real estate development—delivering sustainable, high-performance buildings built
            for the future.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coreFocusAreas.map((area, index) => (
            <article
              key={area.title}
              className="group overflow-hidden border border-ink/8 bg-white shadow-sm transition hover:border-crimson/25 hover:shadow-lg"
            >
              <div className="image-frame aspect-[4/3]">
                <img
                  src={area.image}
                  alt={area.alt}
                  className="transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-display text-xl text-ink">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{area.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
