import { FC } from 'react';
import { content_links } from '../../utils/vars';
import Button from '../misc/Button';
import Reveal from '../misc/Reveal';

interface ServicesProps {}

const servicesData = [
  {
    id: 0,
    title: 'hire overseas talent',
    features: [
      'Easier way to hire abroad',
      'Robust database of vetted candidates',
      'Hire 3-4x cheaper',
    ],
  },
  {
    id: 1,
    title: 'talk to a local expert',
    features: [
      '1 million subject matter experts',
      'Competitive business insights',
      'Startup technology landscaping',
    ],
  },
  {
    id: 2,
    title: 'upforce research',
    features: [
      'Advance market research',
      'Whitespace opportunity analysis',
      'Consumer insights and surveying',
    ],
  },
];

const Services: FC<ServicesProps> = () => {
  return (
    <div className='min-h-[calc(100vh-5rem)] bg-white py-14' id='services'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full text-gray-800 flex justify-center flex-col space-y-16'>
        <div className='w-full flex justify-center'>
          <Reveal direction='left'>
            <h2 className='text-5xl text-center inline-block'>Services</h2>
          </Reveal>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 space-y-5 sm:space-y-0 relative overflow-hidden h-84'>
          {servicesData.map((s) => (
            <Card key={s.id} title={s.title} features={s.features} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

interface CardProps {
  title: string;
  features: string[];
}

const Card: FC<CardProps> = ({ title, features }) => {
  return (
    <div className='w-full flex justify-center'>
      <Reveal delay={1000}>
        <div className='card max-w-xs flex overflow-hidden border border-slate-600'>
            <div className='card-body p-0'>
            <div className='px-10 pt-10 space-y-4 h-80'>
                <h3 className='card-title capitalize font-normal text-3xl text-gray-700'>
                {title}
                </h3>
                <ul className='list-disc list-inside space-y-2 font-light mr-5 text-slate-600'>
                {features.map((f) => (
                    <li key={f}>{f}.</li>
                ))}
                </ul>
            </div>
            <div className='card-actions'>
                <button className='btn btn-lg rounded-none border-x-0 border-b-0 btn-block btn-primary uppercase font-light no-animation text-gray-700'>
                Get a Quote
                </button>
            </div>
            </div>
        </div>
      </Reveal>
    </div>
  );
};
