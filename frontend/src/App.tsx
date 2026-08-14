import { useEffect, useState } from 'react'
import { fetchCompanyProfile } from './api/client'
import { About } from './components/About'
import { Community } from './components/Community'
import { Conclusion } from './components/Conclusion'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Innovation } from './components/Innovation'
import { Mission } from './components/Mission'
import { Services } from './components/Services'
import { Sustainability } from './components/Sustainability'
import { Logo } from './components/Logo'
import type { CompanyProfile } from './types/company'

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink">
      <div className="text-center">
        <Logo size="lg" className="mx-auto mb-6" />
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-crimson border-t-transparent" />
        <p className="text-white/60">Loading HIDEAL...</p>
      </div>
    </div>
  )
}

function ErrorScreen({ message }: { message: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-6">
      <div className="max-w-md border border-crimson/40 bg-crimson/10 p-8 text-center">
        <Logo size="md" className="mx-auto mb-6" />
        <p className="font-semibold text-white">Unable to load website content</p>
        <p className="mt-2 text-sm text-white/60">{message}</p>
      </div>
    </div>
  )
}

export default function App() {
  const [profile, setProfile] = useState<CompanyProfile | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchCompanyProfile()
      .then(setProfile)
      .catch((err: Error) => setError(err.message))
  }, [])

  if (error) return <ErrorScreen message={error} />
  if (!profile) return <LoadingScreen />

  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Mission profile={profile} />
        <Services />
        <Sustainability />
        <Community items={profile.communityImpact} />
        <Innovation items={profile.innovations} />
        <Conclusion text={profile.conclusion} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  )
}
