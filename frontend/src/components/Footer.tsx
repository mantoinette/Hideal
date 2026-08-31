import type { ReactNode } from 'react'
import { Logo } from './Logo'
import type { CompanyProfile } from '../types/company'

interface FooterProps {
  profile: CompanyProfile
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Development', href: '#development' },
  { label: 'Energy & Sustainability', href: '#energy-sustainability' },
  { label: 'Innovation', href: '#innovation' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
]

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition hover:border-crimson hover:bg-crimson hover:text-white"
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  )
}

export function Footer({ profile }: FooterProps) {
  const supportEmail = profile.contact.supportEmail ?? 'support@hideal.rw'

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="section-container py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo size="lg" />
            <p className="mt-4 font-display text-lg text-white">{profile.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Building Rwanda&apos;s future intelligently and sustainably—real estate, technology, energy and
              responsible design.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-crimson">Navigation</h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-white/70 transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-crimson">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <span className="block text-xs uppercase tracking-wider text-white/40">Address</span>
                <span className="mt-1 block leading-relaxed">{profile.contact.address}</span>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-white/40">Phone</span>
                <a href={`tel:${profile.contact.phone.replace(/\s/g, '')}`} className="mt-1 block hover:text-white">
                  {profile.contact.phone}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-white/40">Email</span>
                <a href={`mailto:${profile.contact.email}`} className="mt-1 block hover:text-white">
                  {profile.contact.email}
                </a>
                <a href={`mailto:${supportEmail}`} className="mt-1 block hover:text-white">
                  {supportEmail}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-crimson">Connect</h3>
            <p className="mt-5 text-sm text-white/60">Reach us by email or phone.</p>
            <div className="mt-5 flex gap-3">
              <SocialLink href={`mailto:${profile.contact.email}`} label="Email HIDEAL">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <path d="M4 6h16v12H4z" />
                  <path d="M4 7l8 6 8-6" />
                </svg>
              </SocialLink>
              <SocialLink href={`tel:${profile.contact.phone.replace(/\s/g, '')}`} label="Call HIDEAL">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <path d="M6 4h4l2 5-2 1a11 11 0 005 5l1-2 5 2v4a2 2 0 01-2 2A16 16 0 014 6a2 2 0 012-2z" />
                </svg>
              </SocialLink>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/45">© {new Date().getFullYear()} HIDEAL. All rights reserved.</p>
          <p className="text-xs text-white/35">Real Estate · Technology · Energy · People · Planet</p>
        </div>
      </div>
    </footer>
  )
}
