import { useEffect } from 'react'
import { Logo } from './Logo'
import { fallbackProfile } from '../data/fallbackProfile'
import { coreFocusAreas } from '../data/services'

const services = coreFocusAreas.map((area) => ({
  title: area.title,
  copy: area.copy,
}))

export function MaintenancePage() {
  const { contact } = fallbackProfile
  const phoneHref = `tel:${contact.phone.replace(/\s/g, '')}`

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'HIDEAL | Website Under Maintenance'
    if (window.location.pathname !== '/' || window.location.hash || window.location.search) {
      window.history.replaceState(null, '', '/')
    }
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.82fr)]">
        <header className="section-container flex items-center justify-between gap-4 py-6 lg:col-start-1">
          <a href="/" className="flex items-center gap-3" aria-label="HIDEAL home">
            <Logo size="md" />
            <span className="font-display text-xl tracking-wide">HIDEAL</span>
          </a>
          <p className="text-right text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
            Kigali, Rwanda
          </p>
        </header>

        <section className="section-container pb-8 pt-4 lg:col-start-1 lg:pt-8" aria-labelledby="maintenance-title">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-crimson-light">
            <span className="h-1.5 w-1.5 bg-crimson-light" aria-hidden="true" />
            Maintenance notice
          </p>
          <h1
            id="maintenance-title"
            className="mt-5 max-w-xl font-display text-[clamp(2.35rem,5vw,4.25rem)] font-semibold leading-[1.05] tracking-tight"
          >
            The HIDEAL website is under maintenance.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            We are updating the site. Until that work is finished, this is the only page available.
            The team remains open for enquiries by phone, email, or a visit to the office in Kimihurura.
          </p>
        </section>

        <aside className="bg-paper text-ink lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:border-l lg:border-black/10">
          <div className="image-frame h-56 sm:h-64 lg:h-80">
            <img
              src="/images/hero.jpg"
              alt="A contemporary interior from HIDEAL's approach to comfortable, efficient places"
            />
          </div>
          <div className="px-6 py-8 md:px-8 lg:px-10">
            <h2 className="font-display text-3xl">Contact HIDEAL</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/70">
              Use these details while the rest of the website is closed to visitors.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href={phoneHref}
                className="bg-crimson px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-crimson-deep"
              >
                Call {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="border border-ink/15 px-5 py-3.5 text-center text-sm font-semibold transition hover:border-crimson hover:text-crimson-deep"
              >
                Email {contact.email}
              </a>
            </div>

            <dl className="mt-8 space-y-5 border-t border-ink/10 pt-6">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">Phone</dt>
                <dd className="mt-1 text-base font-semibold">{contact.phone}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">Email</dt>
                <dd className="mt-1 space-y-1">
                  <a href={`mailto:${contact.email}`} className="block font-semibold hover:text-crimson-deep">
                    {contact.email}
                  </a>
                  <a href={`mailto:${contact.supportEmail}`} className="block text-sm text-ink/70 hover:text-crimson-deep">
                    {contact.supportEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">Location</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink/80">
                  {contact.address}
                  <span className="mt-1 block">{contact.location}</span>
                </dd>
              </div>
            </dl>
          </div>
        </aside>

        <section className="section-container pb-12 lg:col-start-1" aria-labelledby="about-hideal">
          <h2 id="about-hideal" className="font-display text-2xl md:text-3xl">
            What HIDEAL does
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
            HIDEAL is a real estate and technology company founded in Kigali in 2022. We develop
            intelligent, comfortable and energy-efficient environments, bringing property, sustainable
            design and practical technology together for how Rwanda lives and works.
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.title} className="border-t border-white/10 pt-4">
                <h3 className="text-sm font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{service.copy}</p>
              </li>
            ))}
          </ul>
        </section>

        <footer className="section-container border-t border-white/10 py-6 text-sm text-white/45 lg:col-start-1">
          HIDEAL · Real estate development and technology · Kimihurura, Kigali
        </footer>
      </div>
    </div>
  )
}
