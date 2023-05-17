import { Fragment, useState, useEffect, useRef } from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import logo from '../../../public/upforcev2-1.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
import linkedIn from '../../../public/linked.svg';
import facebook from '../../../public/facebook.svg';
import twitter from '../../../public/twitter.svg';
import Resources from './Resources';
import Jobs from './Jobs';
import useShowNavbar from './useShowNavbar';
import { SocialIcon } from 'react-social-icons';

const navigation = [
  { name: 'Home', href: '/', external: false },
  {
    name: 'Jobs',
    href: '',
    external: false,
  },
  { name: 'Tech News', href: '/tech-news', external: false },
  {
    name: 'VC',
    href: 'https://docs.google.com/spreadsheets/d/1JO54RqzTg11he8XKSDYppxfnQLlhyvMvUy5oFrKhVeU/edit#gid=0',
    external: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

type Dropdown = {
  open: boolean;
  close: (() => void )| undefined;
};

export default function Navbar() {
  const router = useRouter();
  const [dropDown, setDropDown] = useState<Dropdown>({
    open: false,
    close: undefined,
  });
  const scrolling = useShowNavbar();
  const navbarRef = useRef<HTMLDivElement>(null);
  const icon = {
    color: scrolling || dropDown.open ? '#374151' : '#ffffff',
    styles: {
      height: 30,
      width: 30,
    },
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const disableDropDown = () => {
      if (!dropDown.open) return;
      if (window.innerWidth >= 640 && dropDown.close !== undefined) {
        dropDown.close();
        setDropDown((prevState) => ({ ...prevState, open: false }));
      }
    };

    window.addEventListener('resize', disableDropDown);

    return () => window.removeEventListener('resize', disableDropDown);
  });
  return (
    <Disclosure
      id='navbar'
      as='nav'
      ref={navbarRef}
      className={`${
        scrolling || dropDown.open ? 'bg-white shadow' : 'bg-transparent'
      } w-full z-[9000] fixed transition-all ease-in-out duration-300`}
    >
      {({ open, close }) => (
        <>
          <div className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-3`}>
            <div className='relative flex h-14 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className='inline-flex items-center justify-center rounded-md text-gray-400 z-[1000]'
                  onClick={() => setDropDown({ open: !open, close })}
                >
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className='block btn btn-ghost btn-square p-2 hover:text-gray-600'
                      aria-hidden='true'
                    />
                  ) : (
                    <Bars3Icon
                      className='block btn btn-ghost btn-square p-2 hover:text-white'
                      aria-hidden='true'
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch md:justify-start relative'>
                <div className='flex flex-shrink-0 items-center overflow-hidden mr-5'>
                  <Link href={'/'}>
                    <h1
                      className={`relative display-font after:content-["Africa."] after:absolute after:right-0 after:top-4 after:text-[12px] pb-2 after:italic ${
                        scrolling || dropDown.open
                          ? 'text-gray-700 logo'
                          : 'after:text-purple-300'
                      } text-3xl font-normal`}
                    >
                      <span
                        className={`${
                          (scrolling || dropDown) && 'text-purple-500'
                        }`}
                      >
                        Up
                      </span>
                      Force
                    </h1>
                  </Link>
                </div>
                <div className='hidden sm:ml-6 md:block'>
                  <div
                    className={`flex space-x-8 items-center h-full text-[15px] ${
                      scrolling && 'text-gray-700'
                    }`}
                  >
                    {navigation.map((item) => {
                      if (item.name === 'Jobs')
                        return <Jobs showNav={scrolling} />;
                      if (item.external) {
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            rel='noreferrer'
                            target='_blank'
                            className={`transition-all duration-100 ease-in-out capitalize ${
                              scrolling
                                ? 'hover:text-gray-500'
                                : 'hover:text-gray-200'
                            }`}
                          >
                            {item.name}
                          </a>
                        );
                      } else {
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            aria-current={
                              router.isReady && router.asPath === item.href
                                ? 'page'
                                : undefined
                            }
                            className={`transition-all duration-100 ease-in-out capitalize ${
                              scrolling
                                ? 'hover:text-gray-500'
                                : 'hover:text-gray-200'
                            }`}
                          >
                            {item.name}
                          </Link>
                        );
                      }
                    })}
                    <Resources showNav={scrolling} />
                  </div>
                </div>
              </div>
              <div className='hidden md:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-3'>
                <SocialIcon
                  bgColor='none'
                  fgColor={icon.color}
                  style={icon.styles}
                  url='https://www.facebook.com/profile.php?id=100088679361991&mibextid=LQQJ4d'
                  className='btn btn-circle btn-sm btn-ghost'
                />
                <SocialIcon
                  className='btn btn-circle btn-sm btn-ghost'
                  bgColor='none'
                  url='https://www.linkedin.com/company/upforce-africa/'
                  fgColor={icon.color}
                  style={icon.styles}
                />
                <SocialIcon
                  className='btn btn-circle btn-sm btn-ghost'
                  bgColor='none'
                  url='https://twitter.com/UpforceAfrica'
                  fgColor={icon.color}
                  style={icon.styles}
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden'>
            <div className='space-y-2 px-2 pt-2'>
              {navigation.map((item) => {
                if (item.name === 'Jobs') {
                  return (
                    <Disclosure key={item.name}>
                      {({ open: openResources }) => (
                        <div className='border shadow-sm rounded-lg mx-2 mx-auto bg-white'>
                          <div>
                            <Disclosure.Button
                              className={
                                'btn btn-ghost capitalize font-light btn-block bg-transparent no-animation text-gray-600 focus:bg-transparent'
                              }
                            >
                              Jobs
                              {openResources ? (
                                <ChevronUpIcon className='w-3.5 ml-1' />
                              ) : (
                                <ChevronDownIcon className='w-3.5 ml-1' />
                              )}
                            </Disclosure.Button>
                          </div>
                          <Disclosure.Panel
                            className={`mt-2 px-2 py-2 grid grid-cols-2 gap-3`}
                          >
                            <div>
                              <Link
                                href={item.href}
                                className='btn btn-block btn-outline btn-primary border capitalize font-light text-sm'
                                onClick={() => {
                                  close();
                                  setDropDown((prev) => ({
                                    ...prev,
                                    open: false,
                                  }));
                                }}
                              >
                                post a job
                              </Link>
                            </div>
                            <div>
                              <Link
                                href={'/jobs/search-jobs'}
                                className={`btn btn-block border btn-primary capitalize font-light text-sm ${router.isReady && router.asPath === '/jobs/search-jobs' ?  null : 'btn-outline'}`}
                                onClick={() => {
                                  close();
                                  setDropDown((prev) => ({
                                    ...prev,
                                    open: false,
                                  }));
                                }}
                              >
                                job search
                              </Link>
                            </div>
                          </Disclosure.Panel>
                        </div>
                      )}
                    </Disclosure>
                  );
                }

                return (
                  <div key={item.name} className={`mx-2 mx-auto rounded-lg bg-white ${(router.isReady && router.asPath !== item.href) && 'border shadow-sm'}`}>
                    <Link
                        href={item.href}
                        onClick={() => {
                        close();
                        setDropDown((prev) => ({ ...prev, open: false }));
                        }}
                        className={classNames(
                        router.isReady && router.asPath === item.href
                            ? 'btn-primary'
                            : 'text-gray-600 hover:text-gray-800 btn-ghost',
                        'btn btn-block capitalize font-light '
                        )}
                        aria-current={
                        router.isReady && router.asPath === item.href
                            ? 'page'
                            : undefined
                        }
                    >
                        {item.name}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className='pt-2 pb-3 text-sm text-gray-600'>
              <Disclosure>
                {({ open: openResources }) => (
                  <div className='border shadow-sm rounded-lg mx-4 mx-auto bg-white'>
                    <div >
                      <Disclosure.Button
                        className={
                          'btn btn-ghost capitalize font-light btn-block bg-transparent no-animation text-gray-600 focus:bg-transparent'
                        }
                      >
                        Resources
                        {openResources ? (
                          <ChevronUpIcon className='w-3.5 ml-1' />
                        ) : (
                          <ChevronDownIcon className='w-3.5 ml-1' />
                        )}
                      </Disclosure.Button>
                    </div>
                    <Disclosure.Panel
                      className={`mt-2 px-2 py-2 grid grid-cols-2 gap-3`}
                    >
                      <div>
                        <Link
                          href={'/resources/blog'}
                          className={`btn btn-block border btn-primary capitalize font-light text-sm ${router.isReady && router.asPath === '/resources/blog' ?  null : 'btn-outline'}`}
                          onClick={() => {
                            close();
                            setDropDown((prev) => ({ ...prev, open: false }));
                          }}
                        >
                          blog
                        </Link>
                      </div>
                      <div>
                        <Link
                          href={'/resources/service-providers'}
                          className={`btn btn-block border btn-primary capitalize font-light text-sm ${router.isReady && router.asPath === '/resources/service-providers' ?  null : 'btn-outline'}`}
                          onClick={() => {
                            close();
                            setDropDown((prev) => ({ ...prev, open: false }));
                          }}
                        >
                          service providers
                        </Link>
                      </div>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </div>
            <div className='py-5 px-5 space-x-5 flex justify-center'>
              <button className='btn btn-circle btn-ghost'>
                <SocialIcon
                  style={icon.styles}
                  fgColor={'#6b7280'}
                  bgColor='none'
                  url='https://www.facebook.com/profile.php?id=100088679361991&mibextid=LQQJ4d'
                />
              </button>
              <button className='btn btn-circle btn-ghost'>
                <SocialIcon
                  style={icon.styles}
                  fgColor={'#6b7280'}
                  bgColor='none'
                  url='https://twitter.com/UpforceAfrica'
                />
              </button>
              <button className='btn btn-circle btn-ghost'>
                <SocialIcon
                  style={icon.styles}
                  fgColor={'#6b7280'}
                  bgColor='none'
                  url='https://www.linkedin.com/company/upforce-africa/'
                />
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
