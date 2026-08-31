import { coreFocusAreas } from '../data/services'

export function Services() {
  const featured = coreFocusAreas.slice(0, 2)
  const remaining = coreFocusAreas.slice(2)

  return (
    <section id="what-we-do" className="bg-paper py-24 text-ink">
      <div className="section-container">
        <div className="mb-14 max-w-3xl">
          <p className="section-label">What We Do</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
            Our capability platform
          </h2>
          <div className="mt-5 h-1 w-16 bg-crimson" />
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Rather than pretending to have a huge portfolio, we show what HIDEAL understands, can do, and is
            developing—a much better representation of an emerging company.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((area, index) => (
            <CapabilityCard key={area.title} area={area} index={index} featured />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {remaining.map((area, index) => (
            <CapabilityCard key={area.title} area={area} index={index + 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CapabilityCard({
  area,
  index,
  featured = false,
}: {
  area: (typeof coreFocusAreas)[number]
  index: number
  featured?: boolean
}) {
  return (
    <article
      className={`group overflow-hidden border border-ink/8 bg-white shadow-sm transition duration-300 hover:border-crimson/25 hover:shadow-lg ${
        featured ? 'lg:grid lg:grid-cols-2 lg:items-stretch' : ''
      }`}
    >
      <div className={`image-frame relative overflow-hidden ${featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[260px]' : 'aspect-[4/3]'}`}>
        <img
          src={area.image}
          alt={area.alt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className={`${featured ? 'flex flex-col justify-center p-6 lg:p-8' : 'p-6'}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">0{index + 1}</p>
        <h3 className={`mt-2 font-display text-ink ${featured ? 'text-2xl' : 'text-xl'}`}>{area.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">{area.copy}</p>
      </div>
    </article>
  )
}
