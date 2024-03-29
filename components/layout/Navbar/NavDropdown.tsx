'use client';

import { FC, cloneElement } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { industries, contactUs } from '../../../utils/vars';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import sortBy from 'lodash.sortby';

type DropDownPanelProps = {
  close: () => void;
  label: string;
};

const dropdownData = {
  industries,
  'contact us': contactUs,
};

const DropDownPanel: FC<DropDownPanelProps> = ({ close, label }) => {
  return (
    <div className='md:w-[40rem] lg:w-[42rem]'>
      <div className='px-5 min-w-max capitalize'>
        <div className={'grid grid-cols-4 gap-y-5'}>
          {dropdownData[label].map((a) => (
            <div
              key={a.category}
              className='flex flex-col items-center w-[9rem]'
            >
              {/* dropdown header */}
              <div className='min-h-8 w-full px-3 flex items-center'>
                <span className='text-gray-800 uppercase text-xs antialiased font-medium'>{a.category}</span>
              </div>
              {/* dropdown links */}
              <div className='w-full p-3'>
                <ul className='space-y-2 pr-3'>
                  {sortBy(a.links,['name']).map((l) => (
                    <Link
                      key={l.name}
                      href={l.href}
                      className='text-slate-500 font-normal block text-xs font-light hover:underline'
                      onClick={close}
                    >
                      {l.name}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface NavDropDownProps {
  label: string;
}

const NavDropDown: FC<NavDropDownProps> = ({ label }) => {
  return (
    <Popover className='inline-block z-[1000]'>
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`btn btn-ghost hover:bg-transparent px-0 tracking-wider border-0 border-b-2 font-semibold antialiased rounded-none hover:border-b-[#cbcfdf]  focus:outline-0 relative transition-none ${
              open && 'border-b-2 border-b-[#cbcfdf]'
            }`}
          >
            {label}
            <ChevronDownIcon className={`w-3 absolute -right-4 ${open && 'text-[#cbcfdf]'}`} />
          </Popover.Button>
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
              className='absolute -right-20 lg:right-0  mt-3 bg-white shadow rounded-lg px-5 pt-5 pb-10'
            >
              <DropDownPanel label={label} close={close} />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default NavDropDown;
