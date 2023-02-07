import * as React from 'react';

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
  return (
    <footer className='py-5 bg-gray-800'>
      <div className='mx-6 lg:mx-8 relative py-10'>
        <div className='mx-auto max-w-5xl'>
          <div >
            <h1 className='text-xl font-bold'>
              Sign Up for the UpForce Africa Newsletter
            </h1>
            <p className='text-xs mt-2 font-medium max-w-prose'>
              Subscribe to UpForce to receive startup news & insights, exclusive
              job posts, tech events invitation and more directly to your inbox
            </p>
          </div>
          <div id='newsletter-signup' className='sm:my-1'>
            <form className='my-3'>
              <input
                type='email'
                className='w-4/6 sm:max-w-lg input input-bordered input-primary bg-gray-300 text-black'
              />
              <button
                type='submit'
                className='ml-3  btn btn-primary btn-sm inline'
              >
                sign up
              </button>
            </form>
            <small className='text-[.7em] inline-block max-w-prose'>
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
              upforceafrica@gmail.com
            </small>
          </div>
          <hr className='my-14' />
          <div id='footer-links'>
            <ul className='space-x-5'>
              {footerLinks.map((link) => (
                <li key={link.name} className='inline text-sm'>
                  <a href={`${link.href}`} className='capitalize'>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
