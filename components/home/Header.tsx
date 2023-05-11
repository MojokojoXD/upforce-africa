import { FC } from 'react';
import header_cover from '../../public/header_cover.jpg';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
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
              <button className='btn btn-sm btn-outline btn-primary normal-case font-normal rounded'>
                Post a Job
              </button>
              <button className='btn btn-sm btn-primary normal-case font-normal rounded'>
                Add Your Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
