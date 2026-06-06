export interface IExperience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  note?: string;
}

export const experience: IExperience[] = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Analytics Intelligence',
    location: 'Remote — Lagos, Nigeria',
    period: 'Dec 2023 — Present',
    current: true,
    highlights: [
      'Built TradeTutor, a tutor-based trading education platform launched in partnership with the London Stock Exchange Group.',
      'Shipped AI-powered chatbot systems across company platforms to improve customer interaction and product discovery.',
      'Developed a certificate verification system supporting AI Academy students and training programs.',
      'Drive frontend architecture discussions, code reviews and sprint planning within the engineering team.',
    ],
    note: 'Employee of the Year, Team Player & Culture Champion awards (2025)',
  },
  {
    id: 2,
    role: 'Frontend Engineer',
    company: 'SimpliRide',
    location: 'Remote — Lagos, Nigeria',
    period: 'Oct 2025 — Present',
    current: true,
    highlights: [
      'Build and maintain admin tooling for a ride-hailing platform serving thousands of drivers and riders.',
      'Own trip management, transaction monitoring, analytics and user-operations surfaces, focused on usability and frontend performance.',
    ],
  },
  {
    id: 3,
    role: 'Frontend Engineer',
    company: 'TIMA / Endow',
    location: 'Lagos, Nigeria',
    period: 'Sept 2024 — Dec 2025',
    highlights: [
      'Built creator-focused financial features for Endow, tracking revenue across YouTube, Shopify, Patreon, Gumroad and more.',
      'Shipped Banking-as-a-Service wallet features: NGN & USD virtual accounts, cards, currency conversion and money transfers.',
      'Implemented storefront and e-commerce experiences — product listings, cart, checkout flows and payment integrations.',
      'Delivered invoicing, budgeting, expense tracking and revenue-monitoring workflows.',
    ],
  },
  {
    id: 4,
    role: 'Freelance Frontend Engineer',
    company: 'Independent',
    location: 'Remote',
    period: 'Nov 2022 — Present',
    highlights: [
      'Contributed to AccessCare, a healthcare platform improving access to digital healthcare services.',
      'Built frontend for LekkiPort operational management systems supporting data-driven business workflows.',
      'Translate client product requirements into responsive, maintainable web applications.',
    ],
  },
];

export const TestId = {
  EXPERIENCE_ID: 'experience',
  EXPERIENCE_ITEM: 'experience_item',
};
