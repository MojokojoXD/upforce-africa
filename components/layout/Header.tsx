import { FC, ReactNode } from 'react';
import header_cover from '../../public/header_cover.jpg';
import { useRouter } from 'next/router';
import Button from '../misc/Button';
import Reveal from '../misc/Reveal';
import CheckCircleIcon from '@heroicons/react/24/outline/CheckCircleIcon';

interface HeaderProps {
  title?: string;
  children?: ReactNode;
}

const BECOME_A_CLIENT = '';
const JOIN_EXPERT_NETWORK = '';

const Header: FC<HeaderProps> = ({ title, children }) => {
  const router = useRouter();
  

  const handleClick = (url: string) => {
    if (typeof window === 'undefined') return;
  };

  if (router.pathname === '/') {
    return (
      <div className={`h-screen relative bg-body bg-cover sm:bg-none` }>
        <div className='absolute'></div>
        <div className='h-full flex relative'>
          <div className='absolute w-full top-[6.5rem] bottom-0'>
            <div className='h-full flex justify-center flex-col overflow-hidden relative rounded text-gray-200'>
                <Reveal>
                    <div className={`space-y-8 backdrop-blur-sm mx-auto max-w-xs sm:max-w-7xl sm:px-6 lg:px-8`}>
                        <h1 className='text-left text-4xl sm:text-6xl font-bold sm:max-w-lg'>
                        Building Africa’s Largest Network of Professional Experts.
                        </h1>
                        <div>
                        <ul className='list-none font-light max-w-prose space-y-3 mx-auto sm:mx-0 w-full sm:text-lg'>
                            <li className='flex items-center space-x-1'>
                                <div>
                                    <CheckCircleIcon className='w-10'/>
                                </div>
                                <p>
                                Find great employees overseas
                                </p> 
                            </li>
                            <li className='flex items-center space-x-1'>
                                <div>
                                    <CheckCircleIcon className='w-10'/>
                                </div>
                                <p>
                                Connect with best in class consultants and local experts
                                </p> 
                            </li>
                            <li className='flex items-center space-x-1'>
                                <div>
                                    <CheckCircleIcon className='w-10'/>
                                </div>
                                <p>
                                    Quickly field test your ideas with field research and
                                    surveys
                                </p> 
                            </li>
                        </ul>
                        </div>
                        <div className='sm:space-x-3 hidden sm:block text-gray-800'>
                        <Button outline onClick={() => handleClick(JOIN_EXPERT_NETWORK)}>
                            become a client
                        </Button>
                        <Button onClick={() => handleClick(BECOME_A_CLIENT)}>
                            join our expert network
                        </Button>
                        </div>
                        <div className='btn-group sm:hidden'>
                        <Button
                            mobile
                            onClick={() => handleClick(JOIN_EXPERT_NETWORK)}
                        >
                            become a client
                        </Button>
                        <Button onClick={() => handleClick(BECOME_A_CLIENT)}>
                            join our network
                        </Button>
                        </div>
                    </div>
                </Reveal>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='min-h-[40vh] bg-slate-800 pb-5'>
        <div className='pt-20 w-full'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full grid grid-cols-1'>
            <div className='flex justify-center items-center py-10'>
              <h1 className='text-5xl md:text-6xl font-semibold capitalize tracking-tight text-gray-300 text-center'>
                {title}
              </h1>
            </div>
            {children && <div>{children}</div>}
          </div>
        </div>
      </div>
    );
  }
};

Header.defaultProps = {
  title: '',
};

export default Header;
