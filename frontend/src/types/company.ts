export interface ContactInfo {
  location: string
  address: string
  phone: string
  email: string
}

export interface ServiceArea {
  title: string
  description: string
  highlights: string[]
}

export interface SustainabilityPillar {
  title: string
  description: string
}

export interface CompanyProfile {
  name: string
  tagline: string
  founded: string
  about: string
  mission: string
  contact: ContactInfo
  services: ServiceArea[]
  sustainability: SustainabilityPillar[]
  renewableEnergy: string
  communityImpact: string[]
  innovations: string[]
  conclusion: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}
