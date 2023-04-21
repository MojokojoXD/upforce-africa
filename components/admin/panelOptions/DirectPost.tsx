import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import type { FC } from 'react';

interface DirectPostProps {}

const DirectPost: FC<DirectPostProps> = () => {
  return (
    <div className='min-h-screen p-5 text-gray-800'>
      <div className='mb-5 border-b w-fit pb-1'>
        <h1 className='text-sm font-normal uppercase'>
          Post a job directly to job search
        </h1>
      </div>
      <div className='max-w-lg'>
        <form>
          <div className='space-y-12'>
            <div className='border-b border-gray-900/10 pb-12'>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Profile
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                <span className='text-red-500'>*</span> field will be displayed
                publicly
              </p>

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-4'>
                  <label
                    htmlFor='username'
                    id='fullname'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Applicant&apos;s name
                  </label>
                  <div className='mt-2'>
                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                      <input
                        type='text'
                        name='username'
                        id='username'
                        className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 placeholder:pl-1'
                        placeholder='Jane Doe'
                      />
                    </div>
                  </div>
                </div>
                <div className='sm:col-span-4'>
                  <label
                    htmlFor='applicant email'
                    id='applicant_email'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Applicant&apos;s email
                  </label>
                  <div className='mt-2'>
                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                      <input
                        type='email'
                        name='applicant email'
                        id='username'
                        autoComplete='email'
                        className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 placeholder:pl-1'
                        placeholder='janedoe@workemail.com'
                      />
                    </div>
                  </div>
                </div>
                <div className='sm:col-span-4'>
                  <label
                    htmlFor='company/organization'
                    id='company'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Company/Organization<sup className='text-red-500'>*</sup>
                  </label>
                  <div className='mt-2'>
                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                      <input
                        type='text'
                        name='company/organization'
                        id='company'
                        className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 placeholder:pl-1'
                      />
                    </div>
                  </div>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='notes'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Notes
                  </label>
                  <div className='mt-2'>
                    <textarea
                      id='notes'
                      name='notes'
                      rows={3}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      defaultValue={''}
                    />
                  </div>
                  <p className='mt-3 text-sm leading-6 text-gray-600'>
                    Enter any other info you&apos;d like us to know(optional)
                  </p>
                </div>
              </div>
            </div>

            <div className='border-b border-gray-900/10 pb-12'>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Job details
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                All information here will be shown publicly.
              </p>

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-4'>
                  <label
                    htmlFor='title'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Job title
                  </label>
                  <div className='mt-2'>
                    <input
                      id='title'
                      name='title'
                      type='text'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='country'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Country
                  </label>
                  <div className='mt-2'>
                    <select
                      id='country'
                      name='country'
                      autoComplete='country-name'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
                <div className='sm:col-span-3'>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    City
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='city'
                      id='city'
                      autoComplete='address-level2'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-4 sm:col-start-1'>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Application link
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='city'
                      id='city'
                      autoComplete='address-level2'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-6'>
                  <label
                    htmlFor='duties'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Duties
                  </label>
                  <p className='mt-1 text-sm leading-6 text-gray-600'>
                    The applicant will be required to:
                  </p>
                  <div className='mt-3'>
                    <textarea
                      name='duties'
                      id='duties'
                      cols={30}
                      rows={10}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3'
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className='sm:col-span-6'>
                  <label
                    htmlFor='qualifications'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Requirements
                  </label>
                  <p className='mt-1 text-sm leading-6 text-gray-600'>
                    The applicant must have the following:
                  </p>
                  <div className='mt-3'>
                    <textarea
                      name='qualifications'
                      id='qualifications'
                      cols={30}
                      rows={10}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3'
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='border-b border-gray-900/10 pb-12'>
              <div className='mt-10 space-y-10'>
                <fieldset>
                  <legend className='text-sm font-semibold leading-6 text-gray-900'>
                    Job type
                  </legend>
                  <div className='mt-6 space-y-6'>
                    <div className='relative flex gap-x-3'>
                      <div className='flex h-6 items-center'>
                        <input
                          id='fullTime'
                          name='job_type'
                          type='radio'
                          value={'fullTime'}
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                        />
                      </div>
                      <div className='text-sm leading-6'>
                        <label
                          htmlFor='fullTime'
                          className='font-medium text-gray-900'
                        >
                          Full-time
                        </label>
                      </div>
                    </div>
                    <div className='relative flex gap-x-3'>
                      <div className='flex h-6 items-center'>
                        <input
                          id='internship'
                          name='job_type'
                          type='radio'
                          value={'Internship'}
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                        />
                      </div>
                      <div className='text-sm leading-6'>
                        <label
                          htmlFor='internship'
                          className='font-medium text-gray-900'
                        >
                          Internship
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className='mt-6 flex items-center justify-end gap-x-6'>
            <button
              type='submit'
              className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DirectPost;
