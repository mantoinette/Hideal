interface ConclusionProps {
  text: string
}

export function Conclusion({ text }: ConclusionProps) {
  return (
    <section className="bg-crimson py-24">
      <div className="section-container text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">Our Vision</p>
        <p className="mx-auto mt-6 max-w-4xl font-display text-2xl leading-relaxed text-white md:text-3xl">{text}</p>
      </div>
    </section>
  )
}
