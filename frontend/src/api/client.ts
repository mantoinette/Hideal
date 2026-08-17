import type { CompanyProfile, ContactFormData } from '../types/company'
import { fallbackProfile } from '../data/fallbackProfile'

const API_BASE = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') ?? '/api'

async function parseJsonResponse<T>(response: Response): Promise<T | null> {
  const contentType = response.headers.get('content-type') ?? ''
  if (!contentType.includes('application/json')) {
    return null
  }

  try {
    return (await response.json()) as T
  } catch {
    return null
  }
}

export async function fetchCompanyProfile(): Promise<CompanyProfile> {
  try {
    const response = await fetch(`${API_BASE}/content/profile`)
    if (!response.ok) {
      return fallbackProfile
    }

    const profile = await parseJsonResponse<CompanyProfile>(response)
    return profile ?? fallbackProfile
  } catch {
    return fallbackProfile
  }
}

export async function submitContactForm(data: ContactFormData): Promise<string> {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await parseJsonResponse<{ detail?: string }>(response)
    throw new Error(error?.detail ?? 'Failed to send message')
  }

  const payload = await parseJsonResponse<{ message: string }>(response)
  if (!payload?.message) {
    throw new Error('Failed to send message')
  }

  return payload.message
}
