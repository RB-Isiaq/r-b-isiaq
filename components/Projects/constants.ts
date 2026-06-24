import * as uuid from 'uuid';
import { IProject } from '@/interfaces';

export const projectTimeline: IProject[] = [
  {
    id: uuid.v7(),
    title: 'IRB Forge',
    description:
      'A multi-tenant SaaS platform for mentorship communities — organizations, invitations, role-based access and live dashboards. Built end to end across a NestJS API, a Next.js web client and a React Native mobile app with native push notifications and silent token refresh.',
    imgPath: '/irb-forge.png',
    live: 'https://irb-forge-fe.vercel.app/',
    repos: [
      { label: 'Frontend', href: 'https://github.com/RB-Isiaq/irb-forge-fe' },
      { label: 'Backend', href: 'https://github.com/RB-Isiaq/irb-forge' },
      { label: 'Mobile', href: 'https://github.com/RB-Isiaq/irb-forge-mobile' },
      {
        label: 'Android APK',
        href: 'https://github.com/RB-Isiaq/irb-forge-mobile/releases/latest',
      },
    ],
    impact: 'Full-stack: NestJS API · web · native mobile',
    stack: [
      'NestJS',
      'Next.js',
      'React Native',
      'Expo',
      'TypeScript',
      'TanStack Query',
      'Zustand',
      'PostgreSQL',
    ],
    type: 'personal',
    featured: true,
  },
  {
    id: uuid.v7(),
    title: 'TradeTutor',
    description:
      'A tutor-based trading education platform built in partnership with the London Stock Exchange Group, helping retail traders simulate strategies across hundreds of instruments — no coding required.',
    imgPath: '/tradetutor.png',
    live: 'https://www.londonstockexchange.com/personal-investing/tools/tradetutor-strategy-simulator/',
    impact: '500-user beta → live across 20+ schools',
    stack: ['React', 'Next.js', 'TypeScript'],
    type: 'client',
  },
  {
    id: uuid.v7(),
    title: 'Endow',
    description:
      'A creator-focused financial management platform — tracking revenue across YouTube, Shopify, Patreon and Gumroad, with Banking-as-a-Service wallets (NGN/USD virtual accounts, cards, currency conversion, transfers), storefront and invoicing.',
    imgPath: '/endow.png',
    live: 'https://app.getendow.com/',
    impact: 'Many creators · high transaction volume',
    stack: ['React', 'Next.js', 'TypeScript', 'Redux'],
    type: 'client',
  },
  {
    id: uuid.v7(),
    title: 'OurSpace',
    description:
      'An e-commerce platform for short-term rentals where users list apartments and connect with travelers worldwide.',
    live: 'https://www.exploreourspace.com/',
    imgPath: '/ourspace.png',
    stack: ['React', 'Next.js', 'TypeScript'],
    type: 'client',
  },
  {
    id: uuid.v7(),
    title: 'AccessCare',
    description:
      'A healthcare solution providing convenient, accessible care — connecting patients with experienced healthcare professionals across the globe.',
    imgPath: '/access-care.png',
    live: 'https://accesscare.sfhaccess.com/',
    stack: ['React', 'TypeScript'],
    type: 'client',
  },
  {
    id: uuid.v7(),
    title: 'LekkiPort',
    description:
      'An operations and database management system built to explore, extract, transform and make data-driven decisions for the business.',
    imgPath: '/lekkiport.png',
    live: 'https://oms.lekkiportdw.com/',
    stack: ['React', 'TypeScript'],
    type: 'client',
  },
  {
    id: uuid.v7(),
    title: 'Knowledge Base Scraper',
    description:
      'A web scraping application for extracting and organizing content from blogs, websites and PDFs into a knowledge base. Next.js frontend with a Node.js backend.',
    imgPath: '/knowledge-base-scraper.png',
    github: 'https://github.com/RB-Isiaq/knowledge-base-scraper',
    live: 'https://web-knowledge-base-scraper.vercel.app/',
    stack: ['Next.js', 'Node.js', 'TypeScript'],
    type: 'personal',
  },
  {
    id: uuid.v7(),
    title: 'Uptick Talent Capstone',
    description:
      'Led frontend development for landing and admin CMS pages, ensuring an intuitive UI and seamless user experience.',
    imgPath: '/Uptick.png',
    github: 'https://github.com/RB-Isiaq/uptick-capstone/tree/develop/dev',
    live: 'https://uptick-capstone-de2i.vercel.app/',
    stack: ['React', 'Next.js'],
    type: 'personal',
  },
  {
    id: uuid.v7(),
    title: 'HelpMeOut',
    description:
      'A screen-recording tool that lets anyone record and share step-by-step videos demonstrating how to accomplish tasks on a website — no technical know-how required.',
    imgPath: '/help-me-out.png',
    github: 'https://github.com/RB-Isiaq/helpMeOut',
    live: 'https://help-me-out-alpha.vercel.app/',
    stack: ['React', 'TypeScript'],
    type: 'personal',
  },
];

export const TestId = {
  PROJECTS_ID: 'projects_id',
  PROJECTS_CONTAINER_ID: 'project_container_id',
  PROJECT_ID: 'project_id',
};

export const types = ['all', 'client', 'personal'];
