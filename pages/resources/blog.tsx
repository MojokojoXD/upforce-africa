import * as React from 'react';
import { Tab } from '@headlessui/react';

interface BlogProps {}

function classNames(...classes:string[]) {
    return classes.filter(Boolean).join(' ')
}
  

export default function Blog() {
  return (
    <div className='relative bg-gradient-to-bl from-violet-500 via-purple-800 to-indigo-900 mt-5 rounded'>
      <div className='px-6 lg:px-20'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10'>
          <h2 className='text-3xl font-bold leading-7 text-white sm:truncate sm:text-4xl sm:tracking-tighter capitalize'>
            upforce stories
          </h2>
        </div>
      </div>
      <div className='min-h-screen bg-white py-10 px-6 lg:px-20 text-gray-900 px-2 sm:px-6 lg:px-8'>
        <div className='px-2 sm:px-6 lg:px-8'>
            <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-t-lg border-b"
            >
                <Tab
                className={({ selected }) =>
                classNames(
                'w-28 rounded-t-lg py-2.5 text-sm font-medium leading-5 text-gray-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-400 focus:outline-none focus:ring-2',
                selected
                    ? 'bg-white border border-b-purple-500 border-b-2'
                    : 'text-gray-800 hover:bg-white/[0.12] hover:text-white'
                )
            }
                >Most Recent</Tab>
            </Tab.List>
            <Tab.Panels className='mt-8'>
                <Tab.Panel>
                    <h1 className='text-3xl'>No stories</h1>
                    <p className='text-sm text-gray-500 capitalize'>check back later</p>
                </Tab.Panel>
            </Tab.Panels>
            </Tab.Group>
        </div>
      </div>
    </div>
  );
}
