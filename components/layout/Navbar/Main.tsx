import { Fragment, useState, useEffect, useCallback } from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import logo from '../../../public/upforcev2-1.png';
import Link from 'next/link';
import useShowNavbar from './useShowNavbar';
import { SocialIcon } from 'react-social-icons';
import logo_black from '/public/logo-black.svg';
import logo_white from '/public/logo-white.svg';
import NavDropDown from './NavDropdown';
import MobileDropDown from './MobileDropDown';

type NavOptions =
  | {
      href: string;
      external: boolean;
    }
  | undefined;

interface Navlinks {
  name: string;
  options: NavOptions;
  dropdown: boolean;
}

const navigation: Navlinks[] = [
  {
    name: 'about us',
    options: {
        href: '/about-us',
        external: false,
    },
    dropdown: false,
  },
  {
    name: 'services',
    options: {
      href: '#services',
      external: false,
    },
    dropdown: false,
  },
  {
    name: 'industries',
    options: undefined,
    dropdown: true,
  },
  {
    name: 'contact us',
    options: undefined,
    dropdown: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export type DisclosureStatus = {
  open: boolean;
  close: (() => void) | undefined;
};

export default function Navbar() {
  const [disclosureStatus, setDisclosureStatus] = useState<DisclosureStatus>({
    open: false,
    close: undefined,
  });
  const scrolling = useShowNavbar();
  const icon = {
    color: '#f3f4f6',
    styles: {
      height: 30,
      width: 30,
    },
  };

  const resetDisclosureStatus = useCallback(() => {
    setDisclosureStatus({ open: false, close: undefined });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const disableDropDown = () => {
      if (!disclosureStatus.open) return;
      if (window.innerWidth >= 640 && disclosureStatus.close !== undefined) {
        disclosureStatus.close();
        setDisclosureStatus((prevState) => ({ ...prevState, open: false }));
      }
    };

    window.addEventListener('resize', disableDropDown);

    return () => window.removeEventListener('resize', disableDropDown);
  });

  useEffect(() => {
    if (disclosureStatus.open) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    }

    if (!disclosureStatus.open) {
      document.body.style.overflow = 'scroll';
      document.body.style.height = '100vh';
    }
  }, [disclosureStatus.open]);

  return (
    <>
      <Disclosure
        id='navbar'
        as='nav'
        className={`w-full bg-white`}
      >
        {({ open, close }) => (
          <>
            <div className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-3`}>
              <div className='relative flex h-12 items-center justify-between'>
                <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button
                    className='inline-flex items-center justify-center rounded-md text-gray-500 z-[1000]'
                    onClick={() => setDisclosureStatus({ open: !open, close })}
                  >
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className='block btn btn-ghost btn-square p-2'
                        aria-hidden='true'
                      />
                    ) : (
                      <Bars3Icon
                        className='block btn btn-ghost btn-square p-2'
                        aria-hidden='true'
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex flex-1 items-center justify-center sm:items-stretch md:justify-between'>
                  <div className='flex flex-shrink-0 items-center overflow-hidden mr-5'>
                    <Link href={'/'} replace>
                      <Image
                        src={
                           logo_black
                        }
                        alt='upforce logo'
                        height={55}
                      />
                    </Link>
                  </div>
                  <div className='hidden sm:ml-6 md:block'>
                    <div
                      className={`flex space-x-8 items-center h-full mr-10 text-gray-800`}
                    >
                      {navigation.map((item) => {
                        if (item.dropdown)
                          return (
                            <NavDropDown label={item.name} key={item.name} />
                          );
                        return (
                          <a
                            key={item.name}
                            href={item.options?.href || ''}
                            className={`btn btn-ghost tracking-wider font-semibold antialiased border-0 border-b-2 hover:border-b-[#cbcfdf] hover:bg-transparent px-0 rounded-none transition-none`}
                          >
                            {item.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel
              as='div'
              className='md:hidden z-[1000] h-[calc(100vh-5rem)] bg-[#8a528d]'
            >
              <div className='h-[200vh]'>
                <div className='pt-2 text-gray-100'>
                  {navigation.map((item) => {
                    if (item.dropdown)
                      return (
                        <MobileDropDown
                          label={item.name}
                          key={item.name}
                          close={close}
                          resetDisclosure={resetDisclosureStatus}
                        />
                      );
                    return (
                      <div
                        key={item.name}
                        className={`px-4 py-3 mx-auto flex justify-center`}
                      >
                        <Link
                          href={item.options?.href || ''}
                          onClick={() => {
                            close();
                            setDisclosureStatus((prev) => ({
                              ...prev,
                              open: false,
                            }));
                          }}
                          className={
                            'btn btn-ghost btn-sm text-xs tracking-wider font-semibold antialiased w-full flex block'
                          }
                        >
                          {item.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className='py-5 px-5 space-x-5 flex justify-center'>
                  <button className='btn btn-circle btn-ghost'>
                    <SocialIcon
                      style={icon.styles}
                      fgColor={icon.color}
                      bgColor='none'
                      url='https://www.facebook.com/profile.php?id=100088679361991&mibextid=LQQJ4d'
                    />
                  </button>
                  <button className='btn btn-circle btn-ghost'>
                    <SocialIcon
                      style={icon.styles}
                      fgColor={icon.color}
                      bgColor='none'
                      url='https://twitter.com/UpforceAfrica'
                    />
                  </button>
                  <button className='btn btn-circle btn-ghost'>
                    <SocialIcon
                      style={icon.styles}
                      fgColor={icon.color}
                      bgColor='none'
                      url='https://www.linkedin.com/company/upforce-africa/'
                    />
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
