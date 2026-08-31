import type { CompanyProfile } from '../types/company'

export const fallbackProfile: CompanyProfile = {
  name: 'HIDEAL',
  tagline: "Building Rwanda's Future. Intelligently. Sustainably.",
  founded: '2022',
  about:
    'Founded in Rwanda in 2022, HIDEAL is an emerging real-estate and technology company focused on developing intelligent, comfortable, energy-efficient and environmentally responsible environments. Our work brings together development thinking, technology, energy solutions and sustainable design to respond to the changing needs of Rwanda\'s cities and communities.',
  mission:
    'HIDEAL combines real-estate development, technology, energy efficiency and responsible design to create places that deliver long-term value for people, communities and the planet.',
  contact: {
    location: 'Kimihurura, Kigali, Rwanda',
    address: '55 KG 656 ST KIMIHURURA KIGALI RWANDA',
    phone: '+250 781 151 757',
    email: 'info@hideal.rw',
    supportEmail: 'support@hideal.rw',
  },
  services: [
    {
      title: 'Real Estate Development',
      description:
        'Identifying, planning and developing opportunities across residential, commercial and mixed-use environments.',
      highlights: [
        'Residential and commercial opportunities',
        'Mixed-use environment planning',
        'Thoughtful development identification',
      ],
    },
    {
      title: 'Sustainable Building Solutions',
      description:
        'Integrating energy efficiency, responsible materials, resource management and climate-conscious design into development decisions.',
      highlights: [
        'Energy efficiency integration',
        'Responsible materials selection',
        'Climate-conscious design',
      ],
    },
  ],
  sustainability: [
    {
      title: 'Energy',
      description: 'Reduce consumption and increase renewable energy.',
    },
    {
      title: 'Materials',
      description: 'Use durable and responsible materials where appropriate.',
    },
    {
      title: 'Water',
      description: 'Improve efficiency and responsible resource management.',
    },
    {
      title: 'Nature',
      description: 'Integrate trees, vegetation and green spaces.',
    },
    {
      title: 'Waste',
      description: 'Reduce construction and operational waste.',
    },
    {
      title: 'Resilience',
      description: 'Design for changing environmental conditions.',
    },
  ],
  renewableEnergy:
    'Energy performance begins with design. HIDEAL\'s approach is to reduce energy demand, integrate renewable energy where appropriate and use technology to improve building performance.',
  communityImpact: [
    'Community outreach',
    'Local partnerships',
    'Economic growth',
    'Inclusive development',
    'Resilient communities',
  ],
  innovations: [
    'Digital planning and visualization',
    'Data-supported project coordination',
    'Smart building systems and monitoring',
    'Performance data and continuous improvement',
  ],
  conclusion:
    "Whether you have a development opportunity, investment proposition, technical capability or partnership idea, HIDEAL would like to explore what we can build together. We are at an early stage of our development, but our ambition and methodology are designed for the long term.",
}
