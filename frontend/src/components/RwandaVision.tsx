import { images } from '../data/images'

export function RwandaVision() {
  return (
    <section id="rwanda" className="bg-paper py-24 text-ink">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="section-label">Rwanda → Africa</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
            Designed for Rwanda. With Africa in Mind.
          </h2>
          <div className="mt-5 h-1 w-16 bg-crimson" />
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Rwanda&apos;s cities are evolving rapidly. HIDEAL aims to contribute to that transformation by
            developing environments that respond to changing urban, energy, environmental and community needs.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            We are building capabilities in Rwanda with the potential to develop solutions relevant to other
            African markets over time.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-lg font-display font-semibold text-ink">
            <span>Kigali</span>
            <span className="text-crimson">→</span>
            <span>Rwanda</span>
            <span className="text-crimson">→</span>
            <span>Africa</span>
          </div>
        </div>

        <div className="image-frame aspect-[4/5] overflow-hidden border-l-4 border-crimson shadow-2xl shadow-ink/12 sm:aspect-[3/4]">
          <img
            src={images.rwandaVision}
            alt="Contemporary urban development in an African city context"
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
