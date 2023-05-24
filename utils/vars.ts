import type { ListingField } from './types/jobs';
import { v4 as uuidv4 } from 'uuid';

export const content_links = [
  {
    id: 0,
    code: 'sa',
    name: 'sales',
    href: 'https://docs.google.com/spreadsheets/d/1m_FiOsDPg9XqA2lKqLFZMTsgamv8Cc7NU927d3HMkIw/edit#gid=0',
  },
  {
    id: 1,
    code: 'en',
    name: 'engineering',
    href: 'https://docs.google.com/spreadsheets/d/1P-ZTaFHPdSc-dED6tYGtiO9UNfY4sv9ZmQ2iORKtRsc/edit#gid=0',
  },
  {
    id: 2,
    code: 'pt',
    name: 'product',
    href: 'https://docs.google.com/spreadsheets/d/1L2dYTbCHF_EJwsUtj7BaZgEtRfCql96y4e6Z1KdQx7U/edit#gid=0',
  },
  {
    id: 3,
    code: 'mk',
    name: 'marketing',
    href: 'https://docs.google.com/spreadsheets/d/1w8UobmXsg0cV2xA44m4eu_569EvNrPJbYDX2cYJ6ldQ/edit#gid=0',
  },
  {
    id: 4,
    code: 'de',
    name: 'design',
    href: 'docs.google.com/spreadsheets/d/19gaIrG0JLL2OwflMVMDhsCbdqN2YbOmytJaCNkWstsk/edit#gid=0',
  },
  {
    id: 5,
    code: 'ds',
    name: 'data science',
    href: 'https://docs.google.com/spreadsheets/d/1IeVIJjP0zA1LXUSHrPCxGsd_ElkAxossGPWx-1Ezb8g/edit#gid=0',
  },
  // {name: 'finance', href: ''},
];

export const listingField: ListingField = {
  applicant: {
    name: 'applicant',
    id: '616acbb2',
  },
  email: {
    name: "applicant's email",
    id: '59d822a1',
  },
  company: {
    name: 'company/organization',
    id: '1c017378',
  },
  title: {
    name: 'listing title',
    id: '1cf59252',
  },
  duties: {
    name: 'job duties',
    id: '2d0bb8c6',
  },
  qualifications: {
    name: 'job requirements',
    id: '25b9bb0e',
  },
  jobType: {
    name: 'compensation',
    id: '484da9c7',
  },
  location: {
    name: 'job location',
    id: '24b2a3dd',
  },
  appUrl: {
    name: 'application url',
    id: '1dfa0c26',
  },
};


export const industries = [
    {
        category: 'business',
        links: [
            {
                name: 'technology',
                href: '#',
            },
            {
                name: 'medical devices & Diagnostics',
                href: '#',
            },
            {
                name: 'pharmaceutical & Biotechnology',
                href: '#',
            },
            {
                name: 'industrials',
                href: '#',
            },
            {
                name: 'consumer goods',
                href: '#',
            },
            {
                name: 'payments & insurance',
                href: '#',
            }
        ]
    },
    {
        category: 'finance',
        links: [
            {
                name: 'hedge funds',
                href: '#',
            },
            {
                name: 'private equity',
                href: '#',
            },
            {
                name: 'private credit',
                href: '#',
            },
            {
                name: 'investment managers & mutual funds',
                href: '#',
            },
            {
                name: 'investment banks & research',
                href: '#',
            },
        ]
    },
    {
        category: 'professional services',
        links: [
            {
                name: 'consulting firms',
                href: '#',
            },
            {
                name: 'advertising & public relations',
                href: '#',
            },
        ]
    },
    {
        category: 'law firms',
        links: [
            {
                name: 'expert witness',
                href: '#',
            },
            {
                name: 'law firm',
                href: '#',
            },
        ]
    }
]

export const aboutUs = [
    {
        category: 'about us',
        links : [
            {
                name: 'who we are',
                href: '#',
            },
            {
                name: 'contact us',
                href: '#',
            }
        ]
    },
    {
        category: 'resources',
        links: [
            {
                name: 'tech news',
                href: '/tech-news'
            }
        ]
    }
]

