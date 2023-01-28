import * as React from 'react';

interface SearchJobsProps {}

export default function SearchJobs() {
  return (
    <div className='relative bg-gradient-to-bl from-violet-500 via-purple-800 to-indigo-900 rounded'>
      <div className='px-6 lg:px-20'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10'>
            <h2 className='text-3xl font-bold leading-7 text-white sm:truncate sm:text-4xl sm:tracking-tighter'>
            Search for Tech Jobs & Internships
            </h2>
        </div>
      </div>
      <div className='min-h-screen bg-white py-10 px-6 lg:px-20 text-gray-900'>
                <div id='search-box' className='bg-gray-200 py-10 max-w-5xl rounded-lg px-3'>
                    <form className='space-y-5'>
                        <div className='flex'>
                            <input type='text' className='input bg-white placeholder:italic mr-3 w-1/2' placeholder='keyword'/>
                            <input type='text' className='input bg-white placeholder:italic w-1/2' placeholder='location'/>
                        </div>
                        <button className='block w-full btn bg-gray-500 text-white border-0'>search</button>
                    </form>
                </div>
      </div>
    </div>
  );
}
