import { FC, ReactNode } from 'react';
import header_cover from '../../public/header_cover.jpg';
import { useRouter } from 'next/router';
import Button from '../misc/Button';

interface HeaderProps {
  title?: string;
  children?: ReactNode;
}

const BECOME_A_CLIENT = '';
const JOIN_EXPERT_NETWORK = '';

const Header: FC<HeaderProps> = ({ title = '', children }) => {
  const router = useRouter();


  const handleClick = (url: string) => {
    if (typeof window === 'undefined') return;
  };


  

  if ( router.pathname === '/' ) {
    return (
      <div className={`h-screen bg-slate-800 relative`}>
        <div className='absolute'></div>
        <div className='h-full flex relative'>
          <div className='absolute w-full top-20 bottom-0'>
            <div className='mx-auto max-w-sm sm:max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex justify-center flex-col space-y-8'>
              <h1 className='text-left text-4xl sm:text-5xl font-light w-full sm:max-w-lg tracking-tight'>
                Building Africa’s Largest Network of Professional Experts
              </h1>
              <div>
                <ul className='list-none list-inside font-light max-w-prose space-y-1 text-sm sm:text-base mx-auto sm:mx-0 w-full'>
                    <li >Find great employees overseas.</li>
                    <li >Connect with best in class consultants and local experts.</li>
                    <li>Quickly field test your ideas with field research and surveys.</li>
                </ul>
              </div>
              <div className='space-x-2 sm:space-x-3'>
                <Button
                  onClick={() => handleClick(JOIN_EXPERT_NETWORK)}
                >
                    become a client
                </Button>
                <Button
                  onClick={() => handleClick(BECOME_A_CLIENT)}
                >
                  join our expert network
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='min-h-[40vh] bg-gradient-to-br from-black to-slate-700 pb-5'>
        <div className='pt-20 w-full'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full grid grid-cols-1'>
            <div className='flex justify-center items-center py-10'>
              <h1 className='text-5xl font-medium capitalize tracking-tight text-gray-300 text-center'>
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

export default Header;
