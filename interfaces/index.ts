/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITool {
  id: number;
  label: string;
  path: string;
}

export interface ILink extends ITool {
  href: string;
}

export interface IProject {
  id?: number | string;
  imgPath: string;
  title: string;
  description: string;
  github?: string;
  live: string;
  dataType?: string;
  type: 'client' | 'personal' | 'all';
  stack?: string[];
  featured?: boolean;
  repos?: { label: string; href: string }[];
  impact?: string;
}

// Extend the Window interface to include dataLayer
export {};

declare global {
  interface Window {
    dataLayer: any[];
  }
}
