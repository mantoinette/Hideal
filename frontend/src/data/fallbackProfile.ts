import type { CompanyProfile } from '../types/company'

export const fallbackProfile: CompanyProfile = {
  name: 'HIDEAL',
  tagline: 'Fueling the Future, Powering Progress',
  founded: '2023',
  about:
    'Founded in 2023 and headquartered in Rwanda, HIDEAL is a forward-thinking startup operating under a limited by shares structure. Positioned at the intersection of real estate development and technology innovation, we aim to transform the urban landscape by responding to the growing demand for sustainable, smart, and inclusive living environments.',
  mission:
    'At HIDEAL, our mission is to redefine real estate development by integrating cutting-edge technology with sustainable practices. We are committed to delivering high-quality, environmentally responsible solutions that meet the evolving needs of modern living while making a positive impact on both communities and the planet.',
  contact: {
    location: 'Kimihurura, Kigali, Rwanda',
    address: '55 KG 656 ST KIMIHURURA KIGALI RWANDA',
    phone: '+250 781 151 757',
    email: 'hodali@hideal.rw',
  },
  services: [
    {
      title: 'Real Estate Development',
      description:
        'Designing and building high-performance, sustainable buildings that embody functionality, aesthetics, and ecological responsibility.',
      highlights: [
        'High-performance sustainable buildings',
        'Functionality and aesthetics combined',
        'Ecologically responsible design',
      ],
    },
    {
      title: 'Technology-Driven Solutions',
      description:
        'Leveraging modern innovations to create smart, energy-efficient, and future-ready structures.',
      highlights: [
        'Smart building technologies',
        'Energy-efficient systems',
        'Future-ready infrastructure',
      ],
    },
  ],
  sustainability: [
    {
      title: 'Energy-Efficient Designs',
      description:
        'Prioritize reducing energy consumption through various strategies, ultimately leading to lower operational costs, increased comfort, and a smaller environmental footprint.',
    },
    {
      title: 'Eco-Friendly Materials',
      description:
        'Minimize environmental harm throughout their lifecycle, from raw material extraction to disposal. Made from recycled or renewable resources for reduced waste and lower carbon footprints.',
    },
    {
      title: 'Renewable Energy Systems',
      description:
        'Connecting diverse sources like wind, solar, and hydropower to the electricity network to reduce carbon emissions and enhance grid reliability.',
    },
    {
      title: 'Climate-Resilient Planning',
      description:
        'Proactively designing strategies to reduce vulnerability to climate change impacts while mitigating greenhouse gas emissions for sustainable development.',
    },
  ],
  renewableEnergy:
    'Our team brings in-depth expertise in solar energy integration, enabling us to embed renewable energy solutions seamlessly into our projects. This ensures lower energy costs, reduced carbon footprints, and enhanced long-term value for both clients and communities.',
  communityImpact: [
    'Community outreach',
    'Local partnerships',
    'Economic growth',
    'Inclusive development',
    'Resilient communities',
  ],
  innovations: [
    'Advanced design and planning software',
    'Smart building technologies',
    'Data-driven construction management',
  ],
  conclusion:
    "HIDEAL is pioneering a new era in real estate—one where sustainability, technology, and community well-being are integral to every project. With a steadfast commitment to excellence, integrity, and environmental stewardship, we are set to lead the transformation of Rwanda's built environment and contribute to a more sustainable future for Africa and beyond.",
}
