import { useState } from 'react';
import { forms_v1 } from 'googleapis';
import { BriefcaseIcon,XMarkIcon } from '@heroicons/react/24/outline';
import { CheckIcon,KeyIcon } from '@heroicons/react/24/solid';
import JobField from './JobField';
import { Transition } from '@headlessui/react';

interface JobsProps {}

export type JobToggleOption = {
  index: number | undefined;
  show: boolean;
};

const Jobs: React.FC = () => {
  const [resource, setResource] = useState<
    forms_v1.Schema$ListFormResponsesResponse | undefined
  >(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [gloading, setGLoading] = useState<boolean>(false);
  const [jobToggleOptions, setJobToggleOptions] = useState<JobToggleOption>({
    index: undefined,
    show: false,
  });

  const handleAuth = async () => {
    setGLoading(true);

    try {
      const res = await fetch('/api/authGoogle');
      if (res.ok) {
        const {message}: {message:string} = await res.json();
        openAuthWindow(message);
        setGLoading(false);
    }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const openAuthWindow = (url:string) => {
     if(typeof window === 'undefined')return;

     window.open(url)
  }

  return (
    <div className='flex flex-col sm:flex-row'>
      <div className='sm:w-1/3'>
        <div className='border-b pb-3'>
          <ul className='space-x-3'>
            <li className='inline'>
              <button className='btn btn-ghost btn-sm capitalize font-semibold text-gray-700'>
                Approved <span className='font-bold ml-1'>&#183;</span>
              </button>
            </li>
            <li className='inline float-right space-x-3'>
              <button
                className='btn btn-xs btn-outline capitalize'
                onClick={async () => {
                  setLoading(true);
                  setJobToggleOptions({
                    index: undefined,
                    show: false,
                  });
                  const res = await fetch('/api/formData');
                  if (res.ok) {
                    const data: forms_v1.Schema$ListFormResponsesResponse =
                      await res.json();
                    data.responses?.sort(function (a, b) {
                        //@ts-ignore
                      return new Date(b.createTime as string)- new Date(a.createTime as string);
                    });
                    setResource(data);
                    setLoading(false);
                  } else {
                    alert('Possible authorization error');
                    setLoading(false);
                  }
                }}
                disabled={loading}
              >
                get responses
              </button>
              <button
                className={`btn btn-circle font-bold btn-circle btn-xs ${
                  gloading && 'loading'
                }`}
                onClick={handleAuth}
                disabled={gloading}
              >
                {!gloading && <KeyIcon className='w-3.5'/>}
              </button>
            </li>
          </ul>
        </div>
        <div className='space-y-3 mt-2 text-gray-800 relative pt-3'>
          {loading && <progress className='progress w-full mx-auto'></progress>}
          {resource?.responses &&
            !loading &&
            resource.responses.map((r, index) => {
              const timePosted = new Date(r.createTime as string).toDateString();
              if(typeof r === 'undefined')return
              if(r.answers === undefined || !r.answers)return
              return (
                <div
                  key={r.responseId}
                  className='px-3.5  py-2 rounded-lg border text-gray-600 cursor-pointer hover:bg-zinc-50 hover:shadow-sm transition-all duration-300 ease-in-out hover:text-gray-800 flex justify-between'
                  onClick={() =>
                    setJobToggleOptions({ index: index, show: true })
                  }
                >
                  <div className='order-2 self-center'>
                    <p className='text-sm'>{timePosted}</p>
                  </div>
                  <div className='order-1'>
                    <BriefcaseIcon className='w-5 inline mr-2 text-purple-500' />
                    <p className='max-w-prose font-normal first-letter:uppercase text-sm inline-block'>
                        {/* @ts-ignore */}
                      {r.answers['1cf59252'].textAnswers?.answers[0].value as string}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className='sm:w-2/3 px-24 hidden sm:block'>
        <Transition
          show={jobToggleOptions.show}
          enter='transition-transform duration-300'
          enterFrom='scale-50'
          enterTo='scale-100'
          leave='transition-transform duration-300'
          leaveFrom='scale-100'
          leaveTo='scale-0'
        >
          <div className='container rounded-lg shadow bg-purple-400'>
            <div className='px-5 py-3 relative'>
              <h2 className='capitalize text-sm font-semibold w-fit inline-block text-gray-600'>
                job details
              </h2>
              <button className='btn btn-circle btn-outline btn-xs absolute right-5 inline'
                onClick={()=>setJobToggleOptions({index:undefined,show:false})}
              >
                <XMarkIcon/>
              </button>
            </div>
            <div className='px-5 py-3 bg-zinc-50 text-gray-600 text-sm space-y-5 overflow-scroll max-h-[370px] border relative'>
              <div className='fixed right-5'>
                <button className='btn btn-xs btn-success rounded capitalize'><CheckIcon className='w-3.5 mr-1.5'/>approve</button>
              </div>
              <div className='grid space-y-3 lg:space-y-0 lg:grid-cols-2 min-w-xs'>
                <JobField
                  label='Full Name'
                  detail={
                    //@ts-ignore
                     resource?.responses?.at(jobToggleOptions.index)?.answers[
                      '616acbb2'
                    ].textAnswers?.answers[0].value as string 
                  }
                />
                <JobField
                  label='Work Email'
                  detail={
                    //@ts-ignore

                    resource?.responses?.at(jobToggleOptions.index)?.answers[
                      '59d822a1'
                    ].textAnswers?.answers[0].value as string
                  }
                  noFormatting
                />
              </div>
              <div className='grid grid-cols-2'>
                <JobField
                  label='Title'
                  detail={
                    //@ts-ignore

                    resource?.responses?.at(jobToggleOptions.index)?.answers[
                      '1cf59252'
                    ].textAnswers?.answers[0].value as string
                  }
                />
                <JobField
                  label='City,Country'
                  detail={
                    //@ts-ignore

                    resource?.responses?.at(jobToggleOptions.index)?.answers[
                      '24b2a3dd'
                    ].textAnswers?.answers[0].value as string
                  }
                />
              </div>
              <div className='space-y-3'>
                <JobField
                  label='Description'
                  detail={
                    //@ts-ignore

                    resource?.responses?.at(jobToggleOptions.index)?.answers[
                      '2d0bb8c6'
                    ].textAnswers?.answers[0].value as string
                  }
                  noFormatting
                />

                <JobField
                  label='Requirement(s)'
                  detail={
                    //@ts-ignore

                    resource?.responses?.at(jobToggleOptions.index)?.answers[
                      '25b9bb0e'
                    ].textAnswers?.answers[0].value as string
                  }
                />
              </div>
              <div className='space-y-3'>
                <div className='grid grid-cols-2'>
                  <JobField
                    label='Job Link'
                    detail={
                    //@ts-ignore

                      resource?.responses?.at(jobToggleOptions.index)?.answers[
                        '1dfa0c26'
                      ].textAnswers?.answers[0].value as string
                    }
                    noFormatting
                  />
                  <JobField
                    label='Paid'
                    detail={
                    //@ts-ignore

                      resource?.responses?.at(jobToggleOptions.index)?.answers[
                        '484da9c7'
                      ].textAnswers?.answers[0].value as string
                    }
                  />
                </div>
                <div>
                  <JobField
                    label='Company or Organization'
                    detail={
                    //@ts-ignore

                      resource?.responses?.at(jobToggleOptions.index)?.answers[
                        '1c017378'
                      ].textAnswers?.answers[0].value as string
                    }
                    noFormatting
                  />
                </div>
                <JobField label='misc'/>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default Jobs;
