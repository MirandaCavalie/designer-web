export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: 'art' | 'design';
  image: string;
  description: string;
  tags: string[];
  youtubeId?: string;
};

export const projects: Project[] = [
  // Art
  {
    slug: 'luna',
    title: 'Luna',
    subtitle: 'Illustration',
    category: 'art',
    image: '/images/Luna.png',
    description:
      'Luna is a delicate pencil illustration exploring the duality of light and shadow through a moon face. Part of the Punto y Raya artistic series.',
    tags: ['Illustration', 'Pencil', 'Punto y Raya'],
  },
  {
    slug: 'la-terminal',
    title: 'La Terminal',
    subtitle: 'Painting',
    category: 'art',
    image: '/images/la terminal.png',
    description:
      'La Terminal is a bold mixed-media painting featuring a burning match against a vivid red background — a meditation on transit, waiting, and transformation.',
    tags: ['Painting', 'Mixed media', 'Punto y Raya'],
  },
  {
    slug: 'cuadros',
    title: 'Cuadros',
    subtitle: 'Sticker Sheet',
    category: 'art',
    image: '/images/cuadros.png',
    description:
      'A curated sticker sheet collection featuring original illustrations. Printed in small batches for art fairs and online.',
    tags: ['Illustration', 'Print', 'Stickers'],
  },
  {
    slug: 'estancada',
    title: 'Estancada',
    subtitle: 'Collage',
    category: 'art',
    image: '/images/cuadros.png',
    description:
      'Estancada is a mixed-media collage exploring stillness and stagnation through blue tones, found materials, and photographic fragments.',
    tags: ['Collage', 'Mixed media', 'Punto y Raya'],
  },
  {
    slug: 'tatuajes',
    title: 'Tatuajes',
    subtitle: 'Illustration Sheet',
    category: 'art',
    image: '/images/tatuajes.png',
    description:
      'A sheet of original tattoo-flash-style illustrations, drawn by hand and digitized. Available as flash tattoo designs.',
    tags: ['Illustration', 'Tattoo', 'Flash'],
  },
  {
    slug: 'print',
    title: 'Print',
    subtitle: 'Nautical Print',
    category: 'art',
    image: '/images/print.png',
    description:
      'An anchor-themed nautical print artwork, blending bold linework with textured backgrounds. Limited edition risograph print.',
    tags: ['Print', 'Risograph', 'Illustration'],
  },
  {
    slug: 'el-vino-y-el-tiempo',
    title: 'El Vino y El Tiempo',
    subtitle: 'Animated Illustration',
    category: 'art',
    image: '/images/el vino y el tiempo.png',
    description:
      'A lush green floral animated illustration created for Punto y Raya. Watch the plants grow and the light shift in this looping animation.',
    tags: ['Animation', 'Illustration', 'Punto y Raya'],
    youtubeId: 'dQw4w9WgXcQ',
  },
  // Design
  {
    slug: 'bioderma',
    title: 'Bioderma',
    subtitle: 'Brand Guidelines',
    category: 'design',
    image: '/images/polaroid.png',
    description:
      'Brand guideline documentation and social asset design for Bioderma Chile. Includes color system, typography hierarchy, and photography direction.',
    tags: ['Branding', 'Brand guidelines', 'Social media'],
  },
  {
    slug: 'social-assets',
    title: 'Social Assets',
    subtitle: 'Digital Design',
    category: 'design',
    image: '/images/polaroid.png',
    description:
      'A comprehensive system of social media assets designed to maintain brand consistency across Instagram, LinkedIn, and TikTok.',
    tags: ['Social media', 'Digital design', 'Templates'],
  },
  {
    slug: 'ahorro',
    title: 'Ahorro',
    subtitle: 'App UI Design',
    category: 'design',
    image: '/images/polaroid.png',
    description:
      'UI/UX design for Ahorro, a fintech savings app. Focused on clarity, trust, and ease of use for first-time savers in Latin America.',
    tags: ['UI/UX', 'Fintech', 'App design'],
  },
  {
    slug: '888-branding',
    title: '888',
    subtitle: 'Brand Identity',
    category: 'design',
    image: '/images/polaroid.png',
    description:
      'Bold typographic brand identity for 888, leveraging high-contrast yellow and black to create an instantly recognizable visual system.',
    tags: ['Branding', 'Typography', 'Identity'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const artProjects = projects.filter((p) => p.category === 'art');
export const designProjects = projects.filter((p) => p.category === 'design');
