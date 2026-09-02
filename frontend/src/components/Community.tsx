import { communityHero, communityHighlights } from '../data/community'

interface CommunityProps {
  items: string[]
}

export function Community({ items }: CommunityProps) {
  const highlights = communityHighlights.map((highlight, index) => ({
    ...highlight,
    title: items[index] ?? highlight.title,
  }))

  return (
    <section id="impact" className="bg-ink">
      <div className="relative h-[460px] overflow-hidden md:h-[520px]">
        <img
          src={communityHero}
          alt="Community impact and local partnerships in Rwanda"
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink/75 via-ink/45 to-ink/20" />
        <div className="absolute inset-0 bg-linear-to-t from-ink/55 via-transparent to-ink/25" />

        <div className="section-container relative flex h-full items-end pb-16 md:pb-20">
          <div className="max-w-2xl">
            <p className="section-label">Impact</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Creating positive community impact
            </h2>
            <div className="mt-5 h-1 w-16 bg-crimson" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              HIDEAL is committed to developments that strengthen communities, support local economies, and
              create inclusive, resilient places across Rwanda.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container py-20 md:py-24">
        <div className="mb-12 border-b border-white/10 pb-10 md:mb-14">
          <p className="section-label text-white/55">Our focus areas</p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            Five integrated priorities that guide how HIDEAL engages communities, partners and local economies
            across every project.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className={[
                index < 3 ? 'lg:col-span-2' : 'lg:col-span-3',
                index === 4 ? 'sm:col-span-2 sm:max-w-lg sm:justify-self-center lg:max-w-none lg:justify-self-stretch' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <ImpactCard highlight={highlight} index={index} />
            </div>
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
    <article className="group flex h-full flex-col overflow-hidden border border-white/10 bg-ink-soft transition duration-300 hover:border-crimson/40 hover:shadow-lg hover:shadow-crimson/10">
      <div className="image-frame relative aspect-[16/10] shrink-0 overflow-hidden">
        <img
          src={highlight.image}
          alt={highlight.alt}
          className={`h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] ${position}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/25 to-transparent" />
        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-crimson font-display text-sm font-semibold text-white">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-display text-xl text-white md:text-[1.35rem]">{highlight.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65 md:text-[0.95rem]">{highlight.copy}</p>
      </div>
    </article>
  )
}
