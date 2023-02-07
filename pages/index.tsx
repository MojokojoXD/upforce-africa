import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { content_links } from '../utils/vars';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
  return (
    <>
      <div>
        <Head>
          <title>Upforce | Home</title>
          <meta name='description' content='Homepage for upforce africa' />
        </Head>
        <div className='isolate'>
          <div className='absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-xl sm:blur-2xl ring'>
            <svg
              className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
              viewBox='0 0 1155 678'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
                fillOpacity='.3'
                d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
              />
              <defs>
                <linearGradient
                  id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
                  x1='1155.49'
                  x2='-78.208'
                  y1='.177'
                  y2='474.645'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#9089FC' />
                  <stop offset={1} stopColor='#FF80B5' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <main className='relative min-h-screen'>
            <div className='px-6 lg:px-8 relative'>
              <div className='mx-auto max-w-4xl pt-20 pb-36 sm:pt-36 sm:pb-20'>
                <div>
                  <div className='inline-block mb-10 sm:mb-8 sm:flex sm:justify-center'>
                  </div>
                  <div>
                    <h1 className='text-4xl font-bold tracking-tight sm:text-center sm:text-6xl'>
                      Building Africa’s Largest Database of Tech Talent
                    </h1>
                    
                    <div className='mt-8 flex gap-x-4 sm:justify-center'>
                      <a
                        href='https://docs.google.com/forms/d/e/1FAIpQLSdbl8fZcPSJ-z0frjOQFK8BmL-W3sCNiq-hYcl1ZP1dF0Xedw/viewform?usp=sf_link'
                        className='btn bg-indigo-600 font-semibold leading-7 text-white hover:bg-indigo-700 hover:ring-indigo-700 hover:ring hover:ring indigo-600'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Post a Job
                        <span className='text-indigo-200' aria-hidden='true'>
                          &rarr;
                        </span>
                      </a>
                      <a
                        href='https://docs.google.com/forms/d/e/1FAIpQLSf4OhZF552iz-VdEJCpidTPOuH84lVcK4RhgAPVtkW_bUC9_g/viewform?usp=sf_link'
                        className='btn btn-outline border-indigo-500 text-indigo-500 font-semibold leading-7 hover:bg-white hover:ring-white hover:ring hover:text-indigo-600'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Add your profile
                        <span aria-hidden='true'>
                          &rarr;
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
                    <svg
                      className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem] ring ring-white'
                      viewBox='0 0 1155 678'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill='url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)'
                        fillOpacity='.3'
                        d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
                      />
                      <defs>
                        <linearGradient
                          id='ecb5b0c9-546c-4772-8c71-4d3f06d544bc'
                          x1='1155.49'
                          x2='-78.208'
                          y1='.177'
                          y2='474.645'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#9089FC' />
                          <stop offset={1} stopColor='#FF80B5' />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute bg-white text-gray-900 py-5 bottom-0 right-0 left-0 rounded-t-xl md:rounded-t-full'>
              <div className='flex justify-center py-10 space-y-10'>
                <div >
                    <div className='flex justify-center'>
                        <button className='btn my-2 mx-auto w-fit capitalize bg-transparent md:btn-lg font-light text-gray-900 hover:text-indigo-100'
                        onClick={()=>router.push('/beta-announcement')}
                        >access candidate resume book (beta). {" "}
                        <span className='text-indigo-500 ml-2 lowercase'> here&rarr;</span>
                        </button>
                    </div>
                    <div className='mt-2 mx-14 md:mx-0'>
                        <ul>
                            {content_links.map((l,index) => (
                                <>
                                    <li key={l.name} className='inline text-sm'>
                                        <p className='capitalize inline-block font-light text-gray-600'>{l.name}</p>
                                    </li> 
                                    {
                                        index != content_links.length - 1 ? <span className='mx-3 text-gray-600'>|</span> : <></>
                                    }
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
    </>
  );
}



// {/* <div >
//                 <div className='relative max-w-6xl mx-auto'>
//                   <div className='h-full flex-wrap flex py-3 sm:py-14 justify-center'>
//                     {/* <h2 className='w-full font-semibold text-center capitalize mb-10'>
//                         Access resume book (recruiters)
//                     </h2> */}
//                     <div className='text-gray-400 capitalize w-full ring flex justify-center'>
//                         <span className=''>
//                             Access candidate resume book(beta).{' '}
//                             <a href='//docs.google.com/forms/d/e/1FAIpQLSf4OhZF552iz-VdEJCpidTPOuH84lVcK4RhgAPVtkW_bUC9_g/viewform?usp=sf_link' className='font-semibold text-indigo-600' rel='noreferrer' target='_blank'>
//                             <span
//                                 className='absolute inset-0'
//                                 aria-hidden='true'
//                             />
//                             here<span aria-hidden='true'>&rarr;</span>
//                             </a>
//                         </span>
//                       </div>
//                     {content_links.map((item) => {
//                       return (
//                         <div
//                           key={item.name}
//                           className='inline-block h-fit my-3 rounded-lg ring-indigo-400 w-[30%] md:w-[14%] mx-auto'
//                         >
//                           <a
//                             href={`//${item.href}`}
//                             className='btn btn-ghost btn-xs capitalize font-light tracking-wide  w-full text-base'
//                             target='_blank'
//                             rel='noreferrer'
//                           >
//                             {item.name}
//                           </a>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div> */}