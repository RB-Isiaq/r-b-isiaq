export interface IStackGroup {
  id: number;
  label: string;
  items: string[];
}

export const stackGroups: IStackGroup[] = [
  {
    id: 1,
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'HTML5', 'CSS3'],
  },
  {
    id: 2,
    label: 'Frontend',
    items: [
      'React',
      'Next.js',
      'Redux',
      'React Native',
      'Tailwind CSS',
      'Sass',
    ],
  },
  {
    id: 3,
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'NestJS', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 4,
    label: 'Tools & Practices',
    items: ['Git', 'Docker', 'Firebase', 'Figma', 'Jest', 'CI/CD', 'REST APIs'],
  },
];

export const about = `I'm a frontend software engineer with 3+ years building scalable, user-focused web applications across fintech, AI, healthcare, SaaS and mobility. I work primarily with React, Next.js and TypeScript, partnering closely with product, design and backend teams to ship performant, accessible, production-ready products.\nI care about maintainable architecture, thoughtful component systems, and the small details that make an interface feel effortless — and I bring that same rigour to mentoring other developers along the way.`;

export const TestId = {
  ABOUT_ID: 'about',
  ABOUT_DESC: 'description',
  TOOLS: 'tools__container',
  TOOL: 'tool',
};
