import { FC,cloneElement } from 'react';
import { content_links } from '../../utils/vars';
import Button from '../misc/Button';
import Reveal from '../misc/Reveal';
import GlobeEuropeAfricaIcon from '@heroicons/react/24/solid/GlobeEuropeAfricaIcon'
import ChatBubbleLeftRightIcon from '@heroicons/react/24/solid/ChatBubbleLeftRightIcon';
import BriefcaseIcon from '@heroicons/react/24/solid/BriefcaseIcon';
import PhoneIcon from '@heroicons/react/24/solid/PhoneIcon'
import { navigateClientForm } from '../../utils/vars';

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
    icon: <GlobeEuropeAfricaIcon/>
  },
  {
    id: 1,
    title: 'talk to a local expert',
    features: [
      '1 million subject matter experts',
      'Competitive business insights',
      'Startup technology landscaping',
    ],
    icon: <PhoneIcon/>
  },
  {
    id: 2,
    title: 'upforce research',
    features: [
      'Advance market research',
      'Whitespace opportunity analysis',
      'Consumer insights and surveying',
    ],
    icon: <BriefcaseIcon/>
  },
];

const Services: FC<ServicesProps> = () => {
  return (
    <div className='min-h-[calc(100vh-5rem)] bg-[#493459] sm:bg-transparent sm:py-14 relative' id='services'>
      <div className='mx-auto sm:max-w-3xl md:max-w-7xl h-full text-gray-300 flex justify-center flex-col space-y-16 backdrop-blur-sm bg-services-bg lg:border-t lg:border-t-gray-500 lg:border-l lg:border-l-gray-500 lg:border-b lg:border-b-gray-500 border-r lg:border-r-gray-600 lg:rounded-xl pb-10 overflow-hidden'>
        <div className='w-full bg-[#634277] sm:bg-transparent py-10 sm:py-0 sm:pt-10'>
          <Reveal direction='left'>
            <h2 className='text-4xl font-semibold text-center block sm:inline-block w-full'>Services</h2>
          </Reveal>
        </div>
        <Reveal direction='up'>
            <div className='grid grid-cols-1 sm:gap-x-3 sm:px-3 lg:grid-cols-3 gap-y-5 space-y-5 sm:space-y-0 relative overflow-hidden h-84 justify-items-center'>
            {servicesData.map((s,index) => (
                <Card key={s.id} title={s.title} features={s.features} index={index} icon={s.icon}/>
            ))}
            </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Services;

interface CardProps {
  title: string;
  features: string[];
  index: number;
  icon: React.ReactElement;
}

const Card: FC<CardProps> = ({ title, features,index,icon }) => {
  return (
    <div className={``}>
        <div className='card max-w-max flex overflow-hidden bg-slate-800 backdrop-blur-sm relative rounded-2xl cursor-pointer' onClick={navigateClientForm}>
            <div className='card-body p-0 isolate'>
            <div className='px-10 pt-10 space-y-4 h-[22rem] text-gray-400 '>
                <div className='min-h-8'>
                    {cloneElement(icon,{className: 'w-16 py-2 mx-auto'},null)}
                    <h3 className='capitalize font-semibold text-xl text-center w-full borde'>
                    {title}
                    </h3>
                </div>
                <ul className='list-disc space-y-2 font-light'>
                {features.map((f) => (
                    <li key={f}>{f}.</li>
                ))}
                </ul>
            </div>
            {/* <div className='card-actions bg-[#7e4c86]'>
                <button className='btn btn-lg rounded-none border-x-0 border-b-0 btn-block btn-primary uppercase font-light no-animation text-white glass'>
                Get a Quote
                </button>
            </div> */}
            </div>
        </div>
    </div>
  );
};
