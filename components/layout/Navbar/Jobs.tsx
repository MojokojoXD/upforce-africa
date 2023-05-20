import { FC } from 'react';
import {
  ArrowUpTrayIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Dropdown from './Dropdown';

const POST_A_JOB_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSdbl8fZcPSJ-z0frjOQFK8BmL-W3sCNiq-hYcl1ZP1dF0Xedw/viewform?usp=sf_link';

interface JobsProps {
  showNav: boolean;
}

const Jobs: FC<JobsProps> = ({ showNav }) => {
  const externalNav = (url: string) => {
    if (typeof window === 'undefined') return;

    window.open(url, '_blank');
  };

//

  return (
    <Dropdown name='jobs' showNav={showNav}>
      {(close) => (
        <>
          <button
            className='block hover:bg-purple-400 py-2 px-2  group rounded transition-all ease-in-out duration-100 w-full flex items-center'
            onClick={() => {
              externalNav(POST_A_JOB_LINK);
              close();
            }}
          >
            <ArrowUpTrayIcon className='w-5 h-6 mr-2 text-purple-400 group-hover:text-white'/>
            <span className='group-hover:text-white'>Post a Job</span>
          </button>
          <Link
            href='/jobs/search-jobs'
            className='block hover:bg-purple-400 py-2 px-2  group rounded transition-all ease-in-out duration-100 w-full flex items-center'
            onClick={close}
          >
            <MagnifyingGlassIcon className='w-5 h-6 mr-2 text-purple-400 group-hover:text-white'/>
            <span className='group-hover:text-white'>
              Search jobs
            </span>
          </Link>
        </>
      )}
    </Dropdown>
  );
};

export default Jobs;
