import type { CompanyProfile, ContactFormData } from '../types/company'
import { fallbackProfile } from '../data/fallbackProfile'

const API_BASE = '/api'

export async function fetchCompanyProfile(): Promise<CompanyProfile> {
  try {
    const response = await fetch(`${API_BASE}/content/profile`)
    if (response.ok) {
      return response.json()
    }
  } catch {
    // Fall back to bundled content when the backend is unavailable.
  }

  return fallbackProfile
}

export async function submitContactForm(data: ContactFormData): Promise<string> {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => null)
    throw new Error(error?.detail ?? 'Failed to send message')
  }

  const payload = await response.json()
  return payload.message
}
