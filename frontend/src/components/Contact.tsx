import { type FormEvent, type ReactNode, useState } from 'react'
import { submitContactForm } from '../api/client'
import type { CompanyProfile } from '../types/company'

interface ContactProps {
  profile: CompanyProfile
}

const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Kimihurura,+Kigali,+Rwanda&t=&z=14&ie=UTF8&iwloc=&output=embed'

export function Contact({ profile }: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const { contact } = profile
  const phoneHref = `tel:${contact.phone.replace(/\s/g, '')}`
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${contact.location}, ${contact.address}`,
  )}`

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('loading')
    setFeedback('')

    try {
      const message = await submitContactForm({
        name: String(formData.get('name') ?? ''),
        email: String(formData.get('email') ?? ''),
        phone: String(formData.get('phone') ?? ''),
        message: String(formData.get('message') ?? ''),
      })
      setStatus('success')
      setFeedback(message)
      form.reset()
    } catch (error) {
      setStatus('error')
      setFeedback(error instanceof Error ? error.message : 'Something went wrong')
    }
  }

  return (
    <section id="contact" className="bg-paper py-24 text-ink">
      <div className="section-container">
        <div className="mb-14 max-w-3xl">
          <p className="section-label">Contact Us</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
            Let&apos;s build the future together
          </h2>
          <div className="mt-5 h-1 w-16 bg-crimson" />
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Reach our team in Kigali—we look forward to exploring partnerships, projects, and opportunities
            with you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactDetail label="Location" href={mapsLink} external>
                <span className="block font-medium text-ink">{contact.location}</span>
                <span className="mt-1 block text-sm leading-relaxed text-ink/60">{contact.address}</span>
              </ContactDetail>

              <ContactDetail label="Phone" href={phoneHref}>
                {contact.phone}
              </ContactDetail>

              <ContactDetail label="Email" href={`mailto:${contact.email}`}>
                {contact.email}
              </ContactDetail>
            </div>

            <div className="overflow-hidden border border-ink/10 bg-white shadow-sm">
              <iframe
                title="HIDEAL location in Kimihurura, Kigali"
                src={MAP_EMBED_URL}
                className="aspect-[16/10] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="border-t border-ink/10 px-4 py-3">
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-crimson transition hover:text-crimson-light"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="h-fit border border-ink/10 bg-white p-8 shadow-sm md:p-10"
          >
            <h3 className="font-display text-2xl text-ink">Send a message</h3>
            <p className="mt-2 text-sm text-ink/60">We typically respond within one business day.</p>

            <div className="mt-6 grid gap-5">
              <label className="block">
                <span className="mb-2 block text-sm text-ink/60">Full Name</span>
                <input
                  name="name"
                  required
                  className="w-full border border-ink/15 bg-paper px-4 py-3 text-ink outline-none transition focus:border-crimson"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-ink/60">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border border-ink/15 bg-paper px-4 py-3 text-ink outline-none transition focus:border-crimson"
                  placeholder="you@company.com"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-ink/60">Phone (optional)</span>
                <input
                  name="phone"
                  className="w-full border border-ink/15 bg-paper px-4 py-3 text-ink outline-none transition focus:border-crimson"
                  placeholder="+250 ..."
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-ink/60">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none border border-ink/15 bg-paper px-4 py-3 text-ink outline-none transition focus:border-crimson"
                  placeholder="Tell us about your project or partnership idea"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-6 w-full bg-crimson py-3.5 text-sm font-semibold text-white transition hover:bg-crimson-light disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {feedback && (
              <p
                className={`mt-4 text-sm ${status === 'success' ? 'text-crimson' : 'text-crimson-deep'}`}
                role="status"
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactDetail({
  label,
  href,
  external,
  children,
}: {
  label: string
  href?: string
  external?: boolean
  children: ReactNode
}) {
  const content = (
    <div className="h-full border border-ink/10 bg-white p-5 transition hover:border-crimson/30">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">{label}</p>
      <div className="mt-2 text-sm leading-relaxed text-ink/85">{children}</div>
    </div>
  )

  if (!href) return content

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="block h-full no-underline transition hover:opacity-90"
    >
      {content}
    </a>
  )
}
