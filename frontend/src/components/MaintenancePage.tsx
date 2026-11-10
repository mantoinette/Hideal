import { useEffect } from 'react'
import { Logo } from './Logo'
import { fallbackProfile } from '../data/fallbackProfile'
import { coreFocusAreas } from '../data/services'

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M7.2 3.6c.4-.4 1-.5 1.5-.3l2.2 1c.5.2.8.7.8 1.2l-.4 2.4a1.2 1.2 0 0 1-.7.9l-1.3.6a12.4 12.4 0 0 0 5.3 5.3l.6-1.3c.2-.4.6-.6.9-.7l2.4-.4c.5 0 1 .3 1.2.8l1 2.2c.2.5.1 1.1-.3 1.5l-1.6 1.6c-.4.4-1 .6-1.6.5C10.8 18.4 5.6 13.2 4.7 6.8c-.1-.6.1-1.2.5-1.6L7.2 3.6Z"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M3.5 6.8A2.3 2.3 0 0 1 5.8 4.5h12.4a2.3 2.3 0 0 1 2.3 2.3v10.4a2.3 2.3 0 0 1-2.3 2.3H5.8a2.3 2.3 0 0 1-2.3-2.3V6.8Zm1.6.2 6.4 4.4c.3.2.7.2 1 0l6.4-4.4H5.1Zm14.1 1.7-5.7 3.9a2.6 2.6 0 0 1-2.9 0L4.8 8.7v8.5c0 .5.4.9.9.9h12.4c.5 0 .9-.4.9-.9V8.7Z"
      />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M12 2.8a7 7 0 0 0-7 7c0 5.1 6.1 10.8 6.4 11.1.3.3.9.3 1.2 0 .3-.3 6.4-6 6.4-11.1a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  )
}

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
    <div className="bg-ink text-white">
      <section className="relative min-h-[100svh]">
        <img
          src="/images/sustainability/hero.jpg"
          alt="A contemporary residential tower with trees on every balcony and a garden at its base"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/75 to-ink/35" />

        <header className="section-container relative flex items-center justify-between gap-4 py-6">
          <a href="/" className="flex items-center gap-3" aria-label="HIDEAL home">
            <Logo size="md" />
            <span className="font-display text-xl tracking-wide">HIDEAL</span>
          </a>
          <p className="text-right text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
            Kigali, Rwanda
          </p>
        </header>

        <div className="section-container relative flex min-h-[calc(100svh-5.5rem)] flex-col justify-center pb-16 pt-8">
          <h1 className="max-w-5xl text-[clamp(3rem,8.4vw,7rem)] font-bold uppercase leading-[0.9] tracking-tight text-white">
            Website under maintenance
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-bold text-white md:text-2xl">
            We apologize for the inconvenience!
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Our website is currently undergoing maintenance as we work to bring you a better online
            experience. We appreciate your patience and understanding while we make these improvements.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={phoneHref}
              className="bg-crimson px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-crimson-light"
            >
              Call {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="border border-white/40 bg-white/10 px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-ink"
            >
              Email {contact.email}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-paper text-ink" aria-labelledby="about-hideal">
        <div className="section-container py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 id="about-hideal" className="font-display text-3xl leading-tight md:text-5xl">
              About HIDEAL
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/80 md:text-lg">
              HIDEAL develops intelligent, comfortable, and energy-efficient places in Kigali.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink/80 md:text-lg">
              Our team in Kimihurura is available and ready to assist you.
            </p>
          </div>

          <div className="mt-14 border-t border-ink/10 pt-12">
            <h3 className="font-display text-2xl md:text-4xl">What HIDEAL does</h3>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink/75 md:text-lg">
              Founded in Kigali in 2022, HIDEAL is a real estate and technology company. We identify,
              plan and deliver residential, commercial and mixed-use environments, and we bring energy
              performance, responsible materials and practical technology into how those places are
              designed, built and operated.
            </p>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {coreFocusAreas.map((area) => (
                <li key={area.title} className="bg-white shadow-sm shadow-black/5">
                  <div className="image-frame h-48">
                    <img src={area.image} alt={area.alt} />
                  </div>
                  <div className="p-5 md:p-6">
                    <h4 className="text-base font-semibold">{area.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{area.copy}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink" aria-labelledby="contact-hideal">
        <div className="section-container py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 id="contact-hideal" className="font-display text-3xl md:text-5xl">
              Need to get in touch?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
              Feel free to contact us through our phone number or email address.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            <li className="border border-white/10 bg-white/5 p-6">
              <span className="flex h-10 w-10 items-center justify-center bg-crimson text-white">
                <PhoneIcon />
              </span>
              <h3 className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">Phone</h3>
              <a href={phoneHref} className="mt-2 block text-lg font-semibold hover:text-crimson-light">
                {contact.phone}
              </a>
            </li>
            <li className="border border-white/10 bg-white/5 p-6">
              <span className="flex h-10 w-10 items-center justify-center bg-crimson text-white">
                <MailIcon />
              </span>
              <h3 className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">Email</h3>
              <a href={`mailto:${contact.email}`} className="mt-2 block font-semibold hover:text-crimson-light">
                {contact.email}
              </a>
              <a
                href={`mailto:${contact.supportEmail}`}
                className="mt-1 block text-sm text-white/65 hover:text-white"
              >
                {contact.supportEmail}
              </a>
            </li>
            <li className="border border-white/10 bg-white/5 p-6">
              <span className="flex h-10 w-10 items-center justify-center bg-crimson text-white">
                <PinIcon />
              </span>
              <h3 className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">Location</h3>
              <p className="mt-2 text-base font-semibold leading-relaxed">55 KG 656 St</p>
              <p className="text-sm leading-relaxed text-white/65">{contact.location}</p>
            </li>
          </ul>
        </div>
      </section>

      <footer className="section-container border-t border-white/10 py-10">
        <p className="text-base text-white/80">Thank you for your patience.</p>
        <p className="mt-2 font-semibold text-white">The HIDEAL Team</p>
      </footer>
    </div>
  )
}
