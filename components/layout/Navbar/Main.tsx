import { Fragment, useState, useEffect } from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
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

export default function Navbar() {
  const router = useRouter();
  const [router_is_ready, set_router_is_ready] = useState<boolean>(false);
  const [dropDown, setDropDown] = useState(false);
  const showNav = useShowNavbar();
  const icon = {
    color: showNav ? '#374151' : '#ffffff',
    styles: {
      height: 30,
      width: 30,
    },
  };

  useEffect(() => {
    if (router.isReady) {
      set_router_is_ready(true);
    }
  }, [router.isReady]);

  return (
    <Disclosure
      id='navbar'
      as='nav'
      className={`${
        showNav ? 'bg-white shadow' : 'bg-transparent'
      } w-full z-[9000] fixed transition-all ease-in-out duration-300`}
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-3'>
            <div className='relative flex h-14 items-center justify-between'>
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
                <div className='flex flex-shrink-0 items-center overflow-hidden mr-5'>
                  <Link href={'/'}>
                    <h1
                      className={`relative display-font after:content-["Africa."] after:absolute after:right-0 after:top-4 after:text-[12px] pb-2 after:italic ${
                        showNav ? 'text-gray-700 logo' : 'after:text-purple-300'
                      } text-3xl font-normal`}
                    >
                      <span className={`${showNav && 'text-purple-500'}`}>
                        Up
                      </span>
                      Force
                    </h1>
                  </Link>
                </div>
                <div className='hidden sm:ml-6 md:block'>
                  <div
                    className={`flex space-x-8 items-center h-full text-[15px] ${
                      showNav && 'text-gray-700'
                    }`}
                  >
                    {navigation.map((item) => {
                      if (item.name === 'Jobs')
                        return <Jobs showNav={showNav} />;
                      if (item.external) {
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            rel='noreferrer'
                            target='_blank'
                            className={`transition-all duration-100 ease-in-out capitalize ${
                              showNav
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
                              router_is_ready && router.asPath === item.href
                                ? 'page'
                                : undefined
                            }
                            className={`transition-all duration-100 ease-in-out capitalize ${
                              showNav
                                ? 'hover:text-gray-500'
                                : 'hover:text-gray-200'
                            }`}
                          >
                            {item.name}
                          </Link>
                        );
                      }
                    })}
                    <Resources showNav={showNav} />
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
                  aria-current={
                    router_is_ready && router.asPath === item.href
                      ? 'page'
                      : undefined
                  }
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
