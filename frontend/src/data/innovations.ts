import { imageAssignments } from './imageAssignments'

const { innovation: img } = imageAssignments

export const innovationHighlights = [
  {
    title: 'Design',
    copy: 'Digital planning and visualization.',
    image: img.design,
    alt: 'Architectural design software and digital planning',
  },
  {
    title: 'Build',
    copy: 'Data-supported project coordination and management.',
    image: img.build,
    alt: 'Construction management with data-driven coordination',
  },
  {
    title: 'Operate',
    copy: 'Smart building systems and monitoring.',
    image: img.operate,
    alt: 'Modern building interior with smart systems',
  },
  {
    title: 'Optimize',
    copy: 'Performance data and continuous improvement.',
    image: img.optimize,
    alt: 'Technology systems for building performance optimization',
  },
] as const
