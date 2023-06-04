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
                name: 'healthcare',
                href: '#',
            },
            {
                name: 'agriculture',
                href: '#',
            },
            {
                name: 'education',
                href: '#',
            },
            {
                name: 'life sciences',
                href: '#',
            },
            {
                name: 'insurance',
                href: '#',
            },
            {
                name: 'industrials',
                href: '#',
            },
            {
                name: 'government',
                href: '#',
            },
            {
                name: 'engineering & construction',
                href: '#',
            },
        ]
    },
    {
        category: '',
        links: [
            {
                name: 'technology & startups',
                href: '#',
            },
            {
                name: 'non-profit',
                href: '#',
            },
            {
                name: 'media & communications',
                href: '#',
            },
            {
                name: 'metals & mining',
                href: '#',
            },
            {
                name: 'retail',
                href: '#',
            },
            {
                name: 'oil & gas',
                href: '#',
            },
            {
                name: 'travel & logistics',
                href: '#',
            },
        ]
    },
    {
        category: 'finance',
        links: [
            {
                name: 'private equity',
                href: '#',
            },
            {
                name: 'private credit',
                href: '#',
            },
            {
                name: 'venture capital',
                href: '#',
            },
            {
                name: 'investment banking',
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
                name: 'law firms',
                href: '#',
            },
            {
                name: 'expert witness',
                href: '#',
            },
            {
                name: 'advertising & public relations',
                href: '#',
            },
            {
                name: 'real estate',
                href: '#',
            },
        ]
    }
]

export const contactUs = [
    {
        category: 'company',
        links : [
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

const CLIENT_INQUIRY = 'https://docs.google.com/forms/d/e/1FAIpQLSc4LyWeitLK_s8s1YjmFh1EzTQ5XejqGkdqXVGGcdX7hFVgeg/viewform'
const EXPERT_NETWORK = 'https://docs.google.com/forms/d/e/1FAIpQLSfsHRva9dGkqSpxI7VQGu0xQuRwZJHzDZ2CB0lRo-RbnipCLg/viewform'

export const navigateClientForm = () => {
    if(typeof window === 'undefined')return;

    window.open(CLIENT_INQUIRY,'_blank')
}
export const navigateExpertNetwork = () => {
    if(typeof window === 'undefined')return;

    window.open(EXPERT_NETWORK,'_blank')
}

