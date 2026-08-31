import { imageAssignments } from './imageAssignments'

const { services: img } = imageAssignments

export const coreFocusAreas = [
  {
    title: 'Real Estate Development',
    copy: 'Identifying, planning and developing opportunities across residential, commercial and mixed-use environments.',
    image: img.realEstate,
    alt: 'Modern real estate development and urban planning',
  },
  {
    title: 'Sustainable Building Solutions',
    copy: 'Integrating energy efficiency, responsible materials, resource management and climate-conscious design into development decisions.',
    image: img.sustainableBuilding,
    alt: 'Sustainable building with energy-efficient design features',
  },
  {
    title: 'Energy Solutions',
    copy: 'Exploring solar power, energy efficiency and smart energy systems to improve building performance and resilience.',
    image: img.energy,
    alt: 'Solar panels on a modern building rooftop',
  },
  {
    title: 'Technology-Enabled Development',
    copy: 'Using digital tools, data and smart systems to improve planning, construction and building performance.',
    image: img.technology,
    alt: 'Technology systems supporting building development',
  },
  {
    title: 'Development Partnerships',
    copy: 'Working with investors, landowners, technical partners, developers and other stakeholders to bring viable opportunities to life.',
    image: img.partnerships,
    alt: 'Professional team collaborating on a development partnership',
  },
  {
    title: 'Construction & Project Delivery',
    copy: 'Coordinating design, development and construction toward quality, efficiency and long-term value.',
    image: img.construction,
    alt: 'Construction site with coordinated project delivery',
  },
] as const
