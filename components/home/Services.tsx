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
    <div className='min-h-[calc(100vh-5rem)] py-14 bg-services bg-contain relative' id='services'>
      <div className='absolute inset-0 bg-black/[.05]'></div>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full text-gray-700 flex justify-center flex-col space-y-16'>
        <div className='w-full'>
          <Reveal direction='left'>
            <h2 className='text-5xl text-center block sm:inline-block'>Services</h2>
          </Reveal>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-y-5 space-y-5 sm:space-y-0 relative overflow-hidden h-84 justify-center sm:justify-start'>
          {servicesData.map((s,index) => (
            <Card key={s.id} title={s.title} features={s.features} index={index}/>
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
  index: number;
}

const Card: FC<CardProps> = ({ title, features,index }) => {
  return (
    <div className={`${index === 2 && 'sm:col-span-2 md:col-span-1'}`}>
      <Reveal>
        <div className='card max-w-xs flex overflow-hidden bg-[#edf4eacc] relative rounded-2xl border border-gray-300 shadow'>
            <div className='absolute inset-0 blur-xl isolate -z-10'></div>
            <div className='card-body p-0 isolate'>
            <div className='px-10 pt-10 space-y-4 h-80'>
                <div className='min-h-8'>
                    <h3 className='card-title uppercase font-semibold text-lg text-gray-700 text-end w-full'>
                    {title}
                    </h3>
                </div>
                <ul className='list-disc list-inside space-y-2 font-normal text-gray-600'>
                {features.map((f) => (
                    <li key={f}>{f}.</li>
                ))}
                </ul>
            </div>
            <div className='card-actions bg-[#7e4c86]'>
                <button className='btn btn-lg rounded-none border-x-0 border-b-0 btn-block btn-primary uppercase font-light no-animation text-white glass'>
                Get a Quote
                </button>
            </div>
            </div>
        </div>
      </Reveal>
    </div>
  );
};
