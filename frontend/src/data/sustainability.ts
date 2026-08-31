import { imageAssignments } from './imageAssignments'

const { sustainability: img } = imageAssignments

export const sustainabilityPillars = [
  {
    title: 'Energy',
    copy: 'Reduce consumption and increase renewable energy.',
    image: img.energy,
    alt: 'Energy-efficient modern building facade',
  },
  {
    title: 'Materials',
    copy: 'Use durable and responsible materials where appropriate.',
    image: img.materials,
    alt: 'Sustainable and responsibly sourced building materials',
  },
  {
    title: 'Water',
    copy: 'Improve efficiency and responsible resource management.',
    image: img.water,
    alt: 'Water-efficient systems in sustainable architecture',
  },
  {
    title: 'Nature',
    copy: 'Integrate trees, vegetation and green spaces.',
    image: img.nature,
    alt: 'Green spaces integrated into development',
  },
  {
    title: 'Waste',
    copy: 'Reduce construction and operational waste.',
    image: img.waste,
    alt: 'Efficient construction planning and material use',
  },
  {
    title: 'Resilience',
    copy: 'Design for changing environmental conditions.',
    image: img.resilience,
    alt: 'Climate-resilient architectural design',
  },
] as const

export const sustainabilityHero = img.hero

export const carbonVisionSteps = [
  { title: 'Reduce', detail: 'Energy demand' },
  { title: 'Generate', detail: 'Renewable energy' },
  { title: 'Measure', detail: 'Energy & carbon' },
  { title: 'Optimize', detail: 'Building performance' },
  { title: 'Progress', detail: 'Toward lower-carbon development' },
] as const
