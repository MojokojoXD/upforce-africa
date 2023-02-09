import { Fragment, useState, useEffect } from 'react';
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ChevronDownIcon,
  DocumentIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import logo from '../../public/upforcev2-1.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
import linkedIn from '../../public/linked.svg';
import facebook from '../../public/facebook.svg';
import twitter from '../../public/twitter.svg';

const navigation = [
  { name: 'Home', href: '/', external: false },
  {
    name: 'Job Search',
    href: '/jobs/search-jobs',
    external: false,
  },
  {
    name: 'Post a Job',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdbl8fZcPSJ-z0frjOQFK8BmL-W3sCNiq-hYcl1ZP1dF0Xedw/viewform?usp=sf_link',
    external: true,
  },
  { name: 'Tech News', href: '/tech-news', external: false },
  {
    name: 'Africa VC/Investor List',
    href: 'https://docs.google.com/spreadsheets/d/1JO54RqzTg11he8XKSDYppxfnQLlhyvMvUy5oFrKhVeU/edit#gid=0',
    external: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const router = useRouter();
  const [router_is_ready, set_router_is_ready] = useState<boolean>(false);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      set_router_is_ready(true);
    }
  }, [router.isReady]);

  return (
    <Disclosure as='nav' className='bg-gradient-to-b from-gray-800 via-black to-black z-[9000]'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-5'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-[1000]'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch md:justify-start relative'>
                <div className='flex flex-shrink-0 items-center overflow-hidden'>
                  {/* <h1 className='text-2xl capitalize font-bold'>UpForce</h1> */}
                  <div className='h-[70px] w-[140px]'>
                    <Image
                      alt='upforce logo'
                      src={logo}
                      width={140}
                      className='-top-7 absolute'
                    />
                  </div>
                </div>
                <div className='hidden sm:ml-6 md:block'>
                  <div className='flex space-x-4 items-center h-full'>
                    {navigation.map((item) => {
                      if (item.external) {
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            rel='noreferrer'
                            target='_blank'
                            className={classNames(
                              router_is_ready && router.asPath === item.href
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-200 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium relative'
                            )}
                          >
                            {item.name}
                          </a>
                        );
                      } else {
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              router_is_ready && router.asPath === item.href
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-200 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium relative'
                            )}
                            aria-current={router_is_ready && router.asPath === item.href ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        );
                      }
                    })}
                    <Popover className='relative inline-block text-sm font-normal text-gray-200 z-[1000]'>
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
                              Resources
                              <ChevronDownIcon className='h-3 w-3 inline' />
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
                            <Popover.Panel className='absolute w-56 right-0 bg-white rounded-tl-md rounded-b-md px-2 pt-2 pb-1 text-gray-600'>
                              <div>
                                <Link
                                  href='/resources/blog'
                                  className='hover:bg-indigo-500 flex py-2.5 px-3  group rounded transition-all ease-in-out duration-75'
                                  onClick={close}
                                >
                                  <DocumentIcon className='w-4 h-4 mr-2.5 group-hover:text-gray-100' />
                                  <span className='group-hover:text-gray-100'>
                                    Blog
                                  </span>
                                </Link>
                                <Link
                                  href='/resources/service-providers'
                                  className=' hover:bg-indigo-500 flex py-2.5 px-3 rounded group transition-all ease-in-out duration-75'
                                  onClick={close}
                                >
                                  <NewspaperIcon className='group-hover:text-gray-100 w-4 h-4 mr-2.5' />
                                  <span className='group-hover:text-gray-100'>
                                    Service Providers
                                  </span>
                                </Link>
                                <hr className='border-gray-300 mt-3' />
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </div>
                </div>
              </div>
              <div className='hidden md:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-3'>
                <a
                  href='https://www.linkedin.com/company/upforce-africa/'
                  className='btn btn-circle btn-sm btn-ghost'
                >
                  <Image
                    src={linkedIn}
                    alt='linkedIn social link'
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href='https://www.facebook.com/profile.php?id=100088679361991&mibextid=LQQJ4d'
                  className='btn btn-circle btn-sm btn-ghost'
                >
                  <Image
                    src={facebook}
                    alt='facebook social link'
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href='https://twitter.com/UpforceAfrica'
                  className='btn btn-circle btn-sm btn-ghost'
                >
                  <Image
                    src={twitter}
                    alt='twitter social link'
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden'>
            <div className='space-y-1 px-2 pt-2'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    router_is_ready && router.asPath === item.href
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-sm font-medium'
                  )}
                  aria-current={router_is_ready && router.asPath === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className='space-y-1 px-2 pt-2 pb-3 text-sm font-medium text-gray-300'>
              <span className='px-3'>Resources</span>
              <ul className='px-10 list-disc'>
                <li>
                  <Link
                    href='/resources/blog'
                    className='btn btn-ghost btn-sm capitalize hover:bg-gray-700'
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href='/resources/service-providers'
                    className='btn btn-ghost btn-sm capitalize hover:bg-gray-700'
                  >
                    Service Providers
                  </Link>
                </li>
              </ul>
            </div>
            <div className='space-x-5 px-4 pt-2 pb-3'>
              <a
                className='inline-block'
                href='https://www.facebook.com/profile.php?id=100088679361991&mibextid=LQQJ4d'
              >
                <Image
                  src={facebook}
                  alt='facebook social link'
                  width={30}
                  height={30}
                />
              </a>
              <a
                className='inline-block'
                href='https://twitter.com/UpforceAfrica'
              >
                <Image
                  src={twitter}
                  alt='twitter social link'
                  width={30}
                  height={30}
                />
              </a>
              <a
                className='inline-block'
                href='https://www.linkedin.com/company/upforce-africa/'
              >
                <Image
                  src={linkedIn}
                  alt='LinkedIn social link'
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
