import { imageAssignments } from './imageAssignments'

const { community: img } = imageAssignments

export const communityHero = img.hero

export const communityHighlights = [
  {
    title: 'Community outreach',
    copy: 'Programs that connect with residents, listen to local needs, and bring people into the development process.',
    image: img.outreach,
    alt: 'Community members engaged in a local outreach meeting',
    imagePosition: 'object-[center_35%]',
  },
  {
    title: 'Local partnerships',
    copy: 'Collaborations with neighborhood leaders and organizations that empower communities to shape their future.',
    image: img.partnerships,
    alt: 'Local partners collaborating on community development',
    imagePosition: 'object-center',
  },
  {
    title: 'Economic growth',
    copy: 'Projects that create jobs, support local enterprise, and strengthen the economic fabric of Rwanda\'s cities.',
    image: img.economicGrowth,
    alt: 'Urban development supporting local economic growth',
    imagePosition: 'object-center',
  },
  {
    title: 'Inclusive development',
    copy: 'Spaces and solutions designed so diverse communities can access opportunity, housing, and shared prosperity.',
    image: img.inclusive,
    alt: 'Inclusive community spaces designed for diverse residents',
    imagePosition: 'object-[center_45%]',
  },
  {
    title: 'Resilient communities',
    copy: 'Modern infrastructure and planning that helps neighborhoods thrive today and withstand tomorrow\'s challenges.',
    image: img.resilient,
    alt: 'Resilient urban infrastructure and modern architecture',
    imagePosition: 'object-[center_25%]',
  },
] as const
