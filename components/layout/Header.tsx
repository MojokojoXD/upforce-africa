import { FC, ReactNode } from 'react';
import header_cover from '../../public/header_cover.jpg';
import { useRouter } from 'next/router';

interface HeaderProps {
  title?: string;
  children?: ReactNode;
}

const ADD_YOUR_PROFILE =
  'https://docs.google.com/forms/d/e/1FAIpQLSf4OhZF552iz-VdEJCpidTPOuH84lVcK4RhgAPVtkW_bUC9_g/viewform?usp=sf_link';
const POST_A_JOB =
  'https://docs.google.com/forms/d/e/1FAIpQLSdbl8fZcPSJ-z0frjOQFK8BmL-W3sCNiq-hYcl1ZP1dF0Xedw/viewform?usp=sf_link';

const Header: FC<HeaderProps> = ({ title = '', children }) => {
  const router = useRouter();

  const handleClick = (url: string) => {
    if (typeof window === 'undefined') return;
    window.open(url, '_blank');
  };

  if (router.asPath === '/') {
    return (
      <div
        className={`h-[70vh] bg-header-cover bg-cover bg-center relative bg-fixed`}
      >
        <div className='absolute inset-0 backdrop-blur sm:backdrop-contrast-150 sm:backdrop-blur-0'></div>
        <div className='h-full flex relative'>
          <div className='absolute w-full top-20 bottom-0'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex justify-center flex-col space-y-8'>
              <h1 className='text-center sm:text-left text-4xl font-light w-full sm:max-w-sm tracking-tight'>
                Building Africa’s Largest Database of Tech Talent and Jobs
              </h1>
              <div className='space-x-3 flex justify-center sm:justify-start'>
                <button
                  className='btn btn-sm btn-outline btn-primary normal-case font-normal rounded'
                  onClick={() => handleClick(POST_A_JOB)}
                >
                  Post a Job
                </button>
                <button
                  className='btn btn-sm btn-primary normal-case font-normal rounded'
                  onClick={() => handleClick(ADD_YOUR_PROFILE)}
                >
                  Add Your Profile
                </button>
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
                <h1 className="text-5xl font-medium capitalize tracking-tight text-gray-300">
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
