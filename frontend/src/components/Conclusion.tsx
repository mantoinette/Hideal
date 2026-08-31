interface ConclusionProps {
  text: string
}

export function Conclusion({ text }: ConclusionProps) {
  return (
    <section className="bg-crimson py-24">
      <div className="section-container text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">Let&apos;s Connect</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold text-white md:text-4xl">
          Let&apos;s Build What Comes Next.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/85">{text}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="bg-white px-7 py-3.5 text-sm font-semibold text-crimson transition hover:bg-white/90"
          >
            Discuss a Project
          </a>
          <a
            href="#partnerships"
            className="border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Explore Partnership
          </a>
        </div>
      </div>
    </section>
  )
}
