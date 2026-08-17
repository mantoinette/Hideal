import { communityHero, communityHighlights } from '../data/community'

interface CommunityProps {
  items: string[]
}

export function Community({ items }: CommunityProps) {
  const highlights = communityHighlights.map((highlight, index) => ({
    ...highlight,
    title: items[index] ?? highlight.title,
  }))

  const topRow = highlights.slice(0, 3)
  const bottomRow = highlights.slice(3)

  return (
    <section id="community" className="bg-ink">
      <div className="relative h-[460px] overflow-hidden md:h-[520px]">
        <img
          src={communityHero}
          alt="Vibrant African community life alongside urban development"
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink/75 via-ink/45 to-ink/20" />
        <div className="absolute inset-0 bg-linear-to-t from-ink/55 via-transparent to-ink/25" />

        <div className="section-container relative flex h-full items-end pb-16 md:pb-20">
          <div className="max-w-2xl">
            <p className="section-label">Community Impact</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Building for people, not just structures
            </h2>
            <div className="mt-5 h-1 w-16 bg-crimson" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              HIDEAL invests in outreach, partnerships, and inclusive growth—creating resilient communities
              that flourish alongside every development.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">Our commitment</p>
          <p className="mt-3 text-lg leading-relaxed text-white/70">
            Five pillars that guide how we engage, partner, and deliver lasting value beyond the built
            environment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topRow.map((highlight, index) => (
            <ImpactCard key={highlight.title} highlight={highlight} index={index} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
          {bottomRow.map((highlight, index) => (
            <ImpactCard key={highlight.title} highlight={highlight} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ImpactCard({
  highlight,
  index,
}: {
  highlight: { title: string; copy: string; image: string; alt: string; imagePosition?: string }
  index: number
}) {
  const position = highlight.imagePosition ?? 'object-center'

  return (
    <article className="group overflow-hidden border border-white/10 bg-ink-soft transition duration-300 hover:border-crimson/40 hover:shadow-lg hover:shadow-crimson/10">
      <div className="image-frame relative aspect-[16/10] overflow-hidden">
        <img
          src={highlight.image}
          alt={highlight.alt}
          className={`h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] ${position}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/25 to-transparent" />
        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-crimson font-display text-sm text-white">
          0{index + 1}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl text-white">{highlight.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/65">{highlight.copy}</p>
      </div>
    </article>
  )
}
