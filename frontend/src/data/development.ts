export const pipelineCategories = [
  {
    title: 'In Development',
    copy: 'Projects currently being developed.',
  },
  {
    title: 'Emerging Opportunities',
    copy: 'Potential developments under assessment.',
  },
  {
    title: 'Future Concepts',
    copy: 'Architectural and development concepts demonstrating HIDEAL\'s future direction.',
  },
] as const

export const selectedWork = [
  {
    title: 'Development Concept',
    location: 'Kigali, Rwanda',
    status: 'Concept / Planning',
    statusType: 'concept' as const,
  },
  {
    title: 'Development Opportunity',
    location: 'Kigali',
    status: 'Under Assessment',
    statusType: 'emerging' as const,
  },
  {
    title: 'Technology Initiative',
    location: 'Rwanda',
    status: 'In Development',
    statusType: 'development' as const,
  },
] as const
