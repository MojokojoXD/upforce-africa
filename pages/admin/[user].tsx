import React, { FC, useState } from 'react';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Spinner from '../../components/misc/Spinner';
import { Tab } from '@headlessui/react';
import type { PanelOptions } from '../../utils/types/admin';
import Jobs from '../../components/admin/panelOptions/Jobs';
import type { GetServerSideProps } from 'next';

interface UserProps {}

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const panelOptions: PanelOptions[] = [
  {
    id: 1,
    name: 'Jobs',
  },
];

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

const User: FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [jobResponses, setJobResponses] = useState();

  if (status === 'loading')
    return (
      <div className='h-screen bg-white'>
        <Spinner />
      </div>
    );

  if (status === 'unauthenticated') {
    return (
      <div className='h-screen flex justify-center items-center'>
        <p>
          You&apos;ve been signed out.{' '}
          <span>
            <Link href={'/admin'} className='ml-5 text-purple-500'>
              Login
            </Link>
          </span>
        </p>
      </div>
    );
  }
  return (
    <div className='min-h-screen bg-white ring'>
      <Tab.Group>
        <div className='flex flex-col bg-white shadow'>
          <div className='bg-gradient-to-br from-purple-500 via-slate-300 to-gray-100 opacity-90 flex py-5 rounded-t-lg'>
            <div className='w-1/2 relative'>
              <h1 className='text-lg w-fit font-semibold text-right text-gray-700 tracking-tight absolute left-10 after:content-["africa"] after:text-[10px] after:absolute after:left-0 after:-bottom-3 after:w-full after:text-gray-500'>
                UpForce
              </h1>
            </div>
            <div className='w-1/2 mr-8 flex justify-end'>
              <button
                onClick={async () => {
                  const data = await signOut({
                    redirect: false,
                    callbackUrl: `/admin`,
                  });
                  router.push(data.url);
                }}
                className='hover:text-gray-500 text-sm capitalize text-gray-700'
              >
                sign out
              </button>
            </div>
          </div>
          <div className='px-10 pt-10 shadow-inner'>
            <h1 className='text-gray-900 text-4xl font-bold tracking-tighter'>
              Dashboard
            </h1>
            <Tab.List className='mt-5'>
              {panelOptions.map((o) => (
                <Tab
                  key={o.id}
                  className={({ selected }) =>
                    classNames(
                      'rounded-t-lg py-1.5 px-7 text-sm font-medium leading-5 capitalize tracking-wide',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                      selected
                        ? 'bg-purple-400 text-gray-700 border border-b-purple-500'
                        : 'text-gray-700 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {o.name}
                </Tab>
              ))}
            </Tab.List>
          </div>
        </div>
        <div className='text-black bottom-0 px-10 py-5'>
          <Tab.Panel>
            <Jobs />
          </Tab.Panel>
        </div>
      </Tab.Group>
    </div>
  );
};

export default User;
