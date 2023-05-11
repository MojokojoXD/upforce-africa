import { FC } from 'react';
import Link from 'next/link';
import {
  NewspaperIcon,
  WrenchScrewdriverIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import Dropdown from './Dropdown';

interface ResourcesProps {
    showNav:boolean;
}

const Resources: FC<ResourcesProps> = ({showNav}) => {


  return (
    <Dropdown name="resources" showNav={showNav}>
        {
            (close) => (
            <>
                <Link
                  href='/resources/blog'
                  className='block hover:bg-purple-400 py-2 px-2  group rounded transition-all ease-in-out duration-100 w-full flex items-center'
                  onClick={close}
                >
                  <NewspaperIcon className='w-5 h-6 mr-2 text-purple-400 group-hover:text-white'/>
                  <span className='group-hover:text-white'>
                    Blog
                  </span>
                </Link>
                <Link
                  href='/resources/service-providers'
                  className='block w-full hover:bg-purple-400 py-2 px-2 rounded group transition-all ease-in-out duration-75 flex items-center'
                  onClick={close}
                >
                    <WrenchScrewdriverIcon className='w-5 h-6 mr-2 text-purple-400 group-hover:text-white'/>
                  <span className='group-hover:text-white'>
                    Service Providers
                  </span>
                </Link>
            </>
            )
        }
    </Dropdown>
  );
};

export default Resources;
