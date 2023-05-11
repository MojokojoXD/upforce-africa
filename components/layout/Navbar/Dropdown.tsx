import { Popover, Transition } from '@headlessui/react';
import { FC,ReactNode } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface DropdownProps {
    showNav:boolean;
    name:string;
    children(close:()=>void):ReactNode;
}

const Dropdown: FC<DropdownProps> = ({showNav,name,children}) => {


  return (
    <Popover className='relative inline-block z-[1000]'>
      {({ open, close }) => (
        <>
          <div>
            <Popover.Button className={`transition-all duration-100 ease-in-out outline-none capitalize ${showNav ? 'hover:text-gray-500' : 'hover:text-gray-200'}`}>
              {name}
              <ChevronDownIcon className={`h-3 w-3 ml-1 inline ${(open && showNav) && 'text-purple-500'}`} />
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
            <Popover.Panel
              className='absolute w-48 left-0 mt-3 border bg-white rounded-lg px-2 py-5 text-gray-600 drop-shadow-sm'
              static
            >
              <div className='space-y-1 text-sm'>
                {
                    children(close)
                }
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Dropdown;
