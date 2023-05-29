import { useCallback } from 'react';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import logo_black from '/public/logo-black.svg';
import Image from 'next/image';
import Button from '../misc/Button';

const footerLinks = [
  {
    name: 'contact us',
    href: '#',
  },
  {
    name: 'Advertising',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeZQO4Gp6nvm2p1tfll5OxHpg7HQSSM_lQkIQ-3dv0q03PPZw/viewform?usp=sf_link',
  },
];

export default function Footer() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <footer className='relative pt-5 text-gray-600 border-t z-[10] bg-white'>
      <div className='mx-auto max-w-7xl px-10 sm:px-6 lg:px-8 relative'>
        <div className='py-10'>
          <div className='my-10 space-y-3'>
            <div className='w-full sm:max-w-lg space-y-3'>
              <h1 className='text-3xl font-semibold text-gray-700 text-center sm:text-start'>
                Newsletter
              </h1>
              <p className='font-normal max-w-prose text-slate-500'>
                Subscribe to UpForce to receive startup news & insights,
                exclusive job posts, tech events invitations and more sent to
                your inbox
              </p>
            </div>
            <div id='newsletter-signup' className=''>
              <form className='space-y-3 sm:max-w-md' onSubmit={handleSubmit}>
                <input
                  type='email'
                  className='w-full input input-bordered bg-white text-gray-700 rounded block'
                  placeholder='john.doe@gmail.com'
                />
                <Button enableBlock>Sign Up</Button>
              </form>
            </div>
            <small className='inline-block max-w-prose text-slate-500 text-xs'>
              By clicking signup, you are agreeing to receive communications
              from Upforce Africa and to our{' '}
              <span className='underline hover:text-gray-500 cursor-pointer'>
                Terms of Use
              </span>{' '}
              and{' '}
              <span className='underline hover:text-gray-500 cursor-pointer'>
                Privacy Policy
              </span>
              . If you have questions please reach out to
              upforceafrica@gmail.com.
            </small>
          </div>
          <div
            id='footer-links'
            className='grid grid-cols-2 sm:grid-cols-3 py-5 max-w-xl gap-5 sm:gap-0'
          >
            <div className='space-y-3'>
              <div className='h-12 flex items-end h-16'>
                <p className='text-gray-700 font-semibold uppercase text-sm'>
                  Socials
                </p>
              </div>
              <div>
                <ul className='space-y-5 text-sm text-slate-600'>
                  <li>
                    <div className='group w-fit relative'>
                      <SocialIcon
                        url='https://www.facebook.com/profile.php?id=100088679361991&mibextid=LQQJ4d'
                        bgColor='none'
                        fgColor='white'
                        style={{ height: 25, width: 25, position: 'absolute' }}
                        className='group-hover:bg-slate-500 bg-slate-600 rounded transition-all duration-100 ease-in-out -bottom-1'
                      />
                      <a
                        href='https://www.facebook.com/profile.php?id=100088679361991&mibextid=LQQJ4d'
                        rel='noreferrer'
                        target='_blank'
                      >
                        <span
                          className={
                            'group-hover:text-slate-500 transition-all duration-100 ease-in-out inline ml-[25px] pl-2'
                          }
                        >
                          Facebook
                        </span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='group flex items-center w-fit relative'>
                      <SocialIcon
                        url='https://www.linkedin.com/company/upforce-africa/'
                        bgColor='none'
                        fgColor='white'
                        style={{ height: 25, width: 25, position: 'absolute' }}
                        className='group-hover:bg-slate-500 bg-slate-600 rounded transition-all duration-100 ease-in-out'
                      />
                      <a
                        href='https://www.linkedin.com/company/upforce-africa/'
                        rel='noreferrer'
                        target='_blank'
                      >
                        <span
                          className={
                            'group-hover:text-slate-500 transition-all duration-100 ease-in-out ml-[25px] pl-2'
                          }
                        >
                          LinkedIn
                        </span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='group flex items-center relative w-fit'>
                      <SocialIcon
                        url='https://twitter.com/UpforceAfrica'
                        bgColor='none'
                        fgColor='white'
                        style={{ height: 25, width: 25, position: 'absolute' }}
                        className='group-hover:bg-slate-500 bg-slate-600 rounded transition-all duration-100 ease-in-out'
                      />
                      <a
                        href='https://twitter.com/UpforceAfrica'
                        rel='noreferrer'
                        target='_blank'
                      >
                        <span
                          className={
                            'group-hover:text-slate-500 transition-all duration-100 ease-in-out ml-[25px] pl-2'
                          }
                        >
                          Twitter
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='space-y-3'>
              <div className='h-12 flex items-end h-16'>
                <p className='text-gray-700 font-semibold uppercase text-sm'>
                  Company
                </p>
              </div>
              <div>
                <ul className='text-slate-600 space-y-5 text-sm'>
                  <li>
                    <Link href={'#'} className='hover:text-slate-500'>
                      Who we are
                    </Link>
                  </li>
                  <li>
                    <Link href={'#'} className='hover:text-slate-500'>
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='py-3 text-gray-500 space-y-2 sm:space-y-0'>
          <small className='block sm:inline text-center'>
            &copy; 2023 Upforce Africa Co. All rights reserved.
          </small>
          <div className='sm:float-right text-xs space-x-3 w-fit mx-auto'>
            <Link href='#' className='hover:text-gray-400'>
              Privacy Policy
            </Link>
            <Link href='#' className='hover:text-gray-400'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
