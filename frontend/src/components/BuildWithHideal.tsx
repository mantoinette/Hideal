import { imageAssignments } from '../data/imageAssignments'
import { partnershipPathways } from '../data/partnerships'

export function BuildWithHideal() {
  return (
    <section id="partnerships" className="bg-ink py-24">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <p className="section-label text-crimson-light">Build With HIDEAL</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
              Partnership opportunities
            </h2>
            <div className="mt-5 h-1 w-16 bg-crimson" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              We are open to opportunities that bring together land, capital, technology, expertise and development
              potential—building better places through collaboration.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {['Development', 'Investment', 'Technology & Energy'].map((tag) => (
                <span
                  key={tag}
                  className="border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="image-frame relative aspect-[4/3] overflow-hidden border-l-4 border-crimson shadow-2xl shadow-black/40 lg:aspect-[5/4]">
            <img
              src={imageAssignments.partnershipsSection}
              alt="Professional team collaborating on a development partnership"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-[0.2em] text-white/90">
              Building through partnerships
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {partnershipPathways.map((pathway, index) => (
            <article
              key={pathway.title}
              className="group border border-white/10 border-l-4 border-l-crimson bg-ink-soft p-8 transition duration-300 hover:border-crimson/40 hover:shadow-lg hover:shadow-crimson/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-crimson/30 bg-crimson/10 text-crimson-light transition group-hover:border-crimson/50 group-hover:bg-crimson/15">
                  <PartnershipIcon index={index} />
                </div>
                <span className="font-display text-3xl font-semibold text-white/10 transition group-hover:text-crimson/25">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl text-white">{pathway.title}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-crimson-light">
                {pathway.subtitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/65">{pathway.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-block bg-crimson px-10 py-3.5 text-sm font-semibold text-white transition hover:bg-crimson-light"
          >
            Explore a Partnership
          </a>
          <p className="mt-4 text-sm text-white/45">
            Discuss land, investment, technology or development opportunities with our team.
          </p>
        </div>
      </div>
    </section>
  )
}

function PartnershipIcon({ index }: { index: number }) {
  const className = 'h-5 w-5 fill-none stroke-current stroke-[1.75]'

  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path strokeLinecap="round" d="M4 20V8l8-4 8 4v12" />
          <path strokeLinecap="round" d="M9 20v-6h6v6" />
        </svg>
      )
    case 1:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path strokeLinecap="round" d="M4 16l4-4 4 4 8-8" />
          <path strokeLinecap="round" d="M4 20h16" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path strokeLinecap="round" d="M12 3v4M12 17v4M5 12H3M21 12h-2" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )
  }
}
