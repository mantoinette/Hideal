import { imageAssignments } from '../data/imageAssignments'
import { whyHidealReasons } from '../data/whyHideal'

const highlights = [
  { label: 'Founded', value: '2022' },
  { label: 'Headquarters', value: 'Kigali' },
  { label: 'Market', value: 'Rwanda' },
] as const

export function WhyHideal() {
  const featured = whyHidealReasons.slice(0, 2)
  const remaining = whyHidealReasons.slice(2)

  return (
    <section id="why-hideal" className="bg-paper py-24 text-ink">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <p className="section-label">Why HIDEAL</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Credible vision.{' '}
              <span className="text-ink/70">Clear methodology.</span>
            </h2>
            <div className="mt-5 h-1 w-16 bg-crimson" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
              For investors, landowners, developers and partners—HIDEAL offers integrated thinking, local
              understanding and a long-term perspective on Rwanda&apos;s built environment.
            </p>

            <div className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="bg-white px-4 py-4 text-center sm:py-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-crimson">
                    {item.label}
                  </p>
                  <p className="mt-1.5 font-display text-lg font-semibold text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="image-frame relative aspect-[4/3] overflow-hidden border-l-4 border-crimson shadow-2xl shadow-ink/10 lg:aspect-[5/4]">
            <img
              src={imageAssignments.whyHideal}
              alt="Urban development and Rwanda's evolving built environment"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 max-w-xs text-xs font-medium uppercase tracking-[0.2em] text-white/90">
              Rwanda&apos;s built environment
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {featured.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} featured />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {remaining.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index + 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReasonCard({
  reason,
  index,
  featured = false,
}: {
  reason: (typeof whyHidealReasons)[number]
  index: number
  featured?: boolean
}) {
  return (
    <article
      className={`group border border-ink/8 border-l-4 border-l-crimson bg-white shadow-sm transition duration-300 hover:border-crimson/25 hover:shadow-lg ${
        featured ? 'p-8 lg:p-10' : 'p-6'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-crimson/20 bg-crimson/5 text-crimson transition group-hover:border-crimson/40 group-hover:bg-crimson/10">
          <ReasonIcon index={index} />
        </div>
        <span className="font-display text-3xl font-semibold text-ink/10 transition group-hover:text-crimson/20">
          0{index + 1}
        </span>
      </div>
      <h3 className={`mt-5 font-display text-ink ${featured ? 'text-2xl' : 'text-xl'}`}>{reason.title}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-crimson">{reason.subtitle}</p>
      <p className={`mt-4 leading-relaxed text-ink/70 ${featured ? 'text-base' : 'text-sm'}`}>{reason.copy}</p>
    </article>
  )
}

function ReasonIcon({ index }: { index: number }) {
  const className = 'h-5 w-5 fill-none stroke-current stroke-[1.75]'

  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.5 7-10a7 7 0 10-14 0c0 5.5 7 10 7 10z" />
          <circle cx="12" cy="11" r="2.5" />
        </svg>
      )
    case 1:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path strokeLinecap="round" d="M4 7h16M4 12h11M4 17h16" />
        </svg>
      )
    case 2:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="12" cy="8" r="3.5" />
          <path strokeLinecap="round" d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        </svg>
      )
    case 3:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path strokeLinecap="round" d="M12 8v4l3 2" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 12h10M12 7v10" />
          <circle cx="7" cy="12" r="2" />
          <circle cx="17" cy="12" r="2" />
        </svg>
      )
  }
}
