import { images } from '../data/images'

interface RenewableEnergyProps {
  description: string
}

export function RenewableEnergy({ description }: RenewableEnergyProps) {
  return (
    <section className="bg-paper py-24 text-ink">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2">
        <div className="image-frame aspect-[4/3]">
          <img src={images.solar} alt="Solar energy systems integrated into buildings" />
        </div>
        <div>
          <p className="section-label">Renewable Energy</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink">Solar expertise built in</h2>
          <div className="mt-5 h-1 w-16 bg-crimson" />
          <p className="mt-6 text-lg leading-relaxed text-ink/75">{description}</p>
        </div>
      </div>
    </section>
  )
}
