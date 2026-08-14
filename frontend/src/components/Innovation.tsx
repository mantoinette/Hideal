import { images } from '../data/images'
import { innovationHighlights } from '../data/innovations'

interface InnovationProps {
  items: string[]
}

export function Innovation({ items }: InnovationProps) {
  const highlights = innovationHighlights.map((highlight, index) => ({
    ...highlight,
    title: items[index] ?? highlight.title,
  }))

  return (
    <section id="innovation" className="relative overflow-hidden py-24">
      <img
        src={images.innovation}
        alt="Modern workspace for design and construction technology"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/90" />

      <div className="section-container relative">
        <div className="mb-14 max-w-3xl">
          <p className="section-label text-crimson-light">Innovation & Technology</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl">
            Technology at the heart of development
          </h2>
          <div className="mt-5 h-1 w-16 bg-crimson" />
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Technology is central to HIDEAL&apos;s development philosophy—from digital design and smart
            systems to data-led delivery across every project phase.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((highlight, index) => (
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
      </div>
    </section>
  )
}
