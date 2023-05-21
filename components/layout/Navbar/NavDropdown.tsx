import { FC } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { industries } from '../../../utils/vars';
import { Popover, Transition } from '@headlessui/react';

const Industries: FC<{}> = () => {
  return (
    <>
      <div className='grid grid-cols-4 gap-1 md:w-[36rem] lg:w-[44rem] capitalize lg:px-10 pt-5'>
        {industries.map((i) => (
          <span
            className='block text-gray-700 pb-2 mb-2 uppercase px-5'
            key={i.category}
          >
            {i.category}
          </span>
        ))}
      </div>
      <div className='grid grid-cols-4 gap-1 md:w-[36rem] lg:w-[44rem] capitalize lg:px-10'>
        {industries.map((i) => (
          <div key={i.category} className='px-5'>
            <ul className='space-y-3 text-sm text-slate-500 font-light'>
              {i.links.map((l) => (
                <li key={l.name}>
                  {l.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

const AboutUs: FC<{}> = () => {
  return (
    <>
      <div className='px-5 min-w-max capitalize'>
        <ul className='space-y-3 text-slate-500 font-normal'>
            <li>who we are</li>
            <li>contact us</li>
        </ul>
      </div>
    </>
  );
};

const dropdownData = {
  industries: <Industries />,
  'about us': <AboutUs />,
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
            className={`btn btn-ghost hover:bg-transparent px-0 text-xs tracking-wider border-0 border-b-2 hover:text-gray-500 btn-sm font-semibold antialiased rounded-none focus:outline-0 relative ${
              open && 'border-b-2 border-b-purple-300  border-0'
            }`}
          >
            {label}
            <ChevronDownIcon className={`w-3 absolute -right-4`} />
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
              className='absolute right-0 mt-3 bg-white rounded-sm px-5 pt-5 pb-10 shadow-sm border'
              static
            >
              {dropdownData[label]}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default NavDropDown;
