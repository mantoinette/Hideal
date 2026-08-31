import { pipelineCategories, selectedWork } from '../data/development'
import { images } from '../data/images'

const statusStyles = {
  concept: 'bg-ink/10 text-ink/80',
  emerging: 'bg-crimson/10 text-crimson',
  development: 'bg-crimson text-white',
} as const

export function DevelopmentPipeline() {
  return (
    <section id="development" className="bg-paper py-24 text-ink">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-label">Development</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
              Development Pipeline
            </h2>
            <div className="mt-5 h-1 w-16 bg-crimson" />
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              HIDEAL is building a pipeline of development opportunities across Rwanda, with a focus on
              environments where thoughtful design, technology, energy performance and long-term value can create
              meaningful impact.
            </p>
          </div>
          <div className="image-frame relative aspect-[16/10] overflow-hidden border-l-4 border-crimson shadow-xl shadow-ink/10">
            <img
              src={images.development}
              alt="Architectural concept illustrating future development direction"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
            <span className="absolute left-4 top-4 bg-ink/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              Vision
            </span>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pipelineCategories.map((category, index) => (
            <article key={category.title} className="border border-ink/8 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">0{index + 1}</p>
              <h3 className="mt-3 font-display text-xl text-ink">{category.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{category.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl text-ink">Selected Work & Experience</h3>
          <p className="mt-2 text-sm text-ink/60">
            Each item clearly identifies its status—so visitors understand what is concept, in development, or
            under assessment.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {selectedWork.map((item) => (
              <article key={item.title} className="border border-ink/8 bg-white p-6 shadow-sm">
                <span
                  className={`inline-block px-2.5 py-1 text-xs font-semibold uppercase tracking-wider ${statusStyles[item.statusType]}`}
                >
                  {item.status}
                </span>
                <h4 className="mt-4 font-display text-lg text-ink">{item.title}</h4>
                <p className="mt-1 text-sm text-ink/60">{item.location}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
