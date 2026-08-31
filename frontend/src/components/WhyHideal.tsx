import { whyHidealReasons } from '../data/whyHideal'

export function WhyHideal() {
  return (
    <section id="why-hideal" className="bg-paper py-24 text-ink">
      <div className="section-container">
        <div className="mb-14 max-w-3xl">
          <p className="section-label">Why HIDEAL</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
            A credible emerging company with serious vision
          </h2>
          <div className="mt-5 h-1 w-16 bg-crimson" />
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            For investors, landowners, developers and partners—HIDEAL offers integrated thinking, local
            understanding and a long-term perspective on Rwanda&apos;s built environment.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyHidealReasons.map((reason, index) => (
            <article key={reason.title} className="border border-ink/8 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">0{index + 1}</p>
              <h3 className="mt-3 font-display text-xl text-ink">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{reason.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
