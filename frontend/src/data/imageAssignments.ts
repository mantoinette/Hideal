/**
 * Central registry — each image path is used in exactly one place on the homepage.
 */
export const imageAssignments = {
  hero: '/images/hero.jpg',
  about: '/images/about.jpg',
  whyHideal: '/images/community/economic-growth.jpg',

  services: {
    realEstate: '/images/real-estate.jpg',
    sustainableBuilding: '/images/sustainability.jpg',
    energy: '/images/solar.jpg',
    technology: '/images/services/technology.jpg',
    partnerships: '/images/community.jpg',
    construction: '/images/services/construction.jpg',
  },

  energyComfort: '/images/energy/comfort.jpg',
  development: '/images/development/pipeline.jpg',

  innovation: {
    background: '/images/innovation.jpg',
    design: '/images/innovation/design-software.jpg',
    build: '/images/innovation/construction-data.jpg',
    operate: '/images/innovation/smart-building.jpg',
    optimize: '/images/technology.jpg',
  },

  sustainability: {
    hero: '/images/sustainability/hero.jpg',
    energy: '/images/sustainability/energy.jpg',
    materials: '/images/sustainability/materials.jpg',
    water: '/images/sustainability/water.jpg',
    nature: '/images/sustainability/impact.jpg',
    waste: '/images/services/climate.jpg',
    resilience: '/images/sustainability/renewable.jpg',
  },

  rwandaVision: '/images/rwanda/vision.jpg',

  community: {
    hero: '/images/community/hero.jpg',
    outreach: '/images/community/outreach.jpg',
    partnerships: '/images/community/partnerships.jpg',
    economicGrowth: '/images/services/real-estate.jpg',
    inclusive: '/images/community/inclusive.jpg',
    resilient: '/images/community/resilient.jpg',
  },

  partnershipsSection: '/images/partnerships/collaboration.jpg',
} as const
