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
    <div className='min-h-[calc(100vh-5rem)] bg-[#493459] sm:bg-transparent sm:py-14 relative' id='services'>
      <div className='mx-auto sm:max-w-3xl md:max-w-7xl h-full text-gray-100 flex justify-center flex-col space-y-16 backdrop-blur-lg shadow-inner bg-slate-500/20 lg:rounded-xl pb-10 overflow-hidden'>
        <div className='w-full bg-[#634277] sm:bg-transparent shadow-b shadow sm:shadow-none py-10 sm:py-0 sm:pt-10'>
          <Reveal direction='left'>
            <h2 className='text-5xl font-medium text-center block sm:inline-block w-full'>Services</h2>
          </Reveal>
        </div>
        <div className='grid sm:grid-cols-2 sm:gap-x-3 sm:px-3 md:grid-cols-2 lg:grid-cols-3 gap-y-5 space-y-5 sm:space-y-0 relative overflow-hidden h-84 justify-items-center'>
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
    <div className={`${index === 2 && 'sm:col-span-2 lg:col-span-1'}`}>
      <Reveal>
        <div className='card max-w-xs flex overflow-hidden bg-slate-800 backdrop-blur-sm relative rounded-2xl shadow'>
            <div className='card-body p-0 isolate'>
            <div className='px-10 pt-10 space-y-4 h-80'>
                <div className='min-h-8'>
                    <h3 className='capitalize font-semibold text-xl text-gray-300 text-center w-full borde'>
                    {title}
                    </h3>
                </div>
                <ul className='list-disc space-y-2 font-light w-2/3 mx-auto text-gray-300'>
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
