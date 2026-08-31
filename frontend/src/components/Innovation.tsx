import { images } from '../data/images'
import { innovationHighlights } from '../data/innovations'

export function Innovation() {
  return (
    <section id="innovation" className="relative overflow-hidden py-24">
      <img
        src={images.innovation}
        alt="Technology workspace for building design and development"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/90" />

      <div className="section-container relative">
        <div className="mb-14 max-w-3xl">
          <p className="section-label text-crimson-light">Innovation</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl">
            Technology That Makes Development Better
          </h2>
          <div className="mt-5 h-1 w-16 bg-crimson" />
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Technology presented as a capability—not as something magical. We deploy digital tools where they
            genuinely improve planning, construction and building performance.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {innovationHighlights.map((highlight, index) => (
            <article
              key={highlight.title}
              className="group overflow-hidden border border-white/10 bg-ink/70 shadow-lg backdrop-blur-sm transition hover:border-crimson/40 hover:shadow-xl"
            >
              <div className="image-frame aspect-[4/3]">
                <img
                  src={highlight.image}
                  alt={highlight.alt}
                  className="transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-light">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-display text-xl text-white">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{highlight.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold uppercase tracking-wider text-white/80">
          {['Design', 'Build', 'Operate', 'Optimize'].map((step, index) => (
            <span key={step} className="flex items-center gap-3">
              <span className="border border-crimson/50 bg-crimson/10 px-4 py-2 text-crimson-light">{step}</span>
              {index < 3 && <span className="text-white/30">→</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
