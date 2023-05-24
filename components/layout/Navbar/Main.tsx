import { Fragment, useState, useEffect, useRef } from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import logo from '../../../public/upforcev2-1.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useShowNavbar from './useShowNavbar';
import { SocialIcon } from 'react-social-icons';
import logo_black from '/public/logo-black.svg';
import logo_white from '/public/logo-white.svg';
import NavDropDown from './NavDropdown';
import MobileDropDown from './MobileDropDown';

type NavOptions = {
    href: string;
    external: boolean;
} | undefined;

interface Navlinks {
  name: string;
  options: NavOptions;
  dropdown: boolean;
};

interface Navbar {
    enableOverlay( status: DisclosureStatus ): React.ReactNode;
}

const navigation: Navlinks[] = [
  {
    name: 'services',
    options: {
        href: '#services',
        external: false,
    },
    dropdown: false
  },
  {
    name: 'industries',
    options: undefined,
    dropdown: true,
  },
  {
    name: 'about us',
    options: undefined,
    dropdown: true,
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export type DisclosureStatus = {
  open: boolean;
  close: (() => void) | undefined;
};

export default function Navbar({enableOverlay}:Navbar) {
  const router = useRouter();
  const [disclosureStatus, setDisclosureStatus] = useState<DisclosureStatus>({
    open: false,
    close: undefined,
  });
  const scrolling = useShowNavbar();
  const icon = {
    color: scrolling || disclosureStatus.open ? '#374151' : '#ffffff',
    styles: {
      height: 30,
      width: 30,
    },
  };

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

    if(disclosureStatus.open){
        document.body.style.overflow = 'hidden';
    }else{
        document.body.style.overflow = 'auto';
    }

  },[disclosureStatus.open])
  return (
    <>
        {
            enableOverlay(disclosureStatus)
        }
        <Disclosure
        id='navbar'
        as='nav'
        className={`${
            scrolling || disclosureStatus.open ? 'bg-white shadow-sm' : 'bg-transparent'
        } w-full z-[1000] fixed`}
        >
        {({ open, close }) => (
            <>
            <div className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-3`}>
                <div className='relative flex h-14 items-center justify-between'>
                <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                    {/* Mobile menu button*/}
                    <Disclosure.Button
                    className='inline-flex items-center justify-center rounded-md text-gray-400 z-[1000]'
                    onClick={() => setDisclosureStatus({ open: !open, close })}
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
                <div className='flex flex-1 items-center justify-center sm:items-stretch md:justify-between'>
                    <div className='flex flex-shrink-0 items-center overflow-hidden mr-5'>
                    <Link href={'/'}>
                        <Image
                        src={scrolling || disclosureStatus.open ? logo_black : logo_white}
                        alt='upforce logo'
                        height={65}
                        />
                    </Link>
                    </div>
                    <div className='hidden sm:ml-6 md:block'>
                    <div
                        className={`flex space-x-8 items-center h-full ${
                        scrolling ? 'text-gray-700' : 'text-[#eee] mr-10'
                        }`}
                    >
                        {navigation.map((item) => {
                        if (item.dropdown)return <NavDropDown label={item.name} key={item.name}/>
                            return (
                            <a
                                key={item.name}
                                href={item.options?.href || ''}
                                className={`btn btn-ghost btn-sm text-xs tracking-wider font-semibold antialiased hover:text-gray-500 border-0 border-b-2 hover:bg-transparent px-0`}
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

            <Disclosure.Panel className='md:hidden z-[1000]'>
                <div className='pt-2 text-gray-700'>
                {navigation.map((item) => {
                    if(item.dropdown)return <MobileDropDown label={item.name} key={item.name}/>
                    return (
                    <div
                        key={item.name}
                        className={`mx-4 py-3 mx-auto flex justify-center`}
                    >
                        <Link
                        href={item.options?.href || ''}
                        onClick={() => {
                            close();
                            setDisclosureStatus((prev) => ({ ...prev, open: false }));
                        }}
                        className={'btn btn-ghost btn-sm text-xs tracking-wider font-semibold antialiased hover:text-gray-500 hover:bg-transparent px-0 flex'}
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
    </>
  );
}
