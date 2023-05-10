import { FC } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  DocumentPlusIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const POST_A_JOB_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSdbl8fZcPSJ-z0frjOQFK8BmL-W3sCNiq-hYcl1ZP1dF0Xedw/viewform?usp=sf_link';

interface JobsProps {}

const Jobs: FC<JobsProps> = () => {
  const externalNav = (url: string) => {
    if (typeof window === 'undefined') return;

    window.open(url, '_blank');
  };

  return (
    <Popover className='relative inline-block text-[.7em] font-normal text-gray-200 z-[1000]'>
      {({ open, close }) => (
        <>
          <div>
            <Popover.Button
              className={`px-3 py-2 outline-0 ring-0 duration-75 ${
                open
                  ? 'bg-white text-gray-800 rounded-t-md ring-0 outline-0'
                  : 'hover:bg-gray-700 hover:text-white hover:rounded-md'
              }`}
            >
              Jobs
              <ChevronDownIcon className='h-2.5 w-2.5 inline' />
            </Popover.Button>
          </div>
          <Transition
            as='div'
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Popover.Panel className='absolute w-40 right-0 bg-white rounded-tl-md rounded-b-md px-2 py-2 text-gray-600'>
              <div className='space-y-1'>
                <button
                  className='hover:bg-indigo-500 py-2 px-2  group rounded transition-all w-full ease-in-out duration-75'
                  onClick={() => {
                    externalNav(POST_A_JOB_LINK);
                    close();
                  }}
                >
                  <span className='group-hover:text-gray-100 mr-1'>Post a Job</span>
                </button>
                <Link
                  href='/jobs/search-jobs'
                  className='block hover:bg-indigo-500 py-2 px-2 rounded group transition-all ease-in-out duration-75'
                  onClick={close}
                >
                  <span className='group-hover:text-gray-100 block text-center'>Search jobs</span>
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Jobs;
