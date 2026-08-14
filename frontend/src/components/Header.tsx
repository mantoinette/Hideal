import { useEffect, useState } from 'react'
import { Logo } from './Logo'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Community', href: '#community' },
  { label: 'Innovation', href: '#innovation' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-ink/95 py-3 shadow-lg shadow-black/40 backdrop-blur-md'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between gap-4">
        <a href="#" className="shrink-0 py-1 pr-2 transition-opacity hover:opacity-90" aria-label="HIDEAL home">
          <Logo size="md" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-none bg-crimson px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-crimson-light"
          >
            Get in Touch
          </a>
        </nav>

        <button
          type="button"
          className="rounded-none border border-white/20 p-2 text-white lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-ink px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/90"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
