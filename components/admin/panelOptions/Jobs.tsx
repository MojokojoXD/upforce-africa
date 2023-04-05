import { useState,useReducer,useEffect } from 'react';
import { forms_v1 } from 'googleapis';
import { BriefcaseIcon,XMarkIcon } from '@heroicons/react/24/outline';
import { CheckIcon,KeyIcon,BriefcaseIcon as SBriefcaseIcon } from '@heroicons/react/24/solid';
import JobField from './JobField';
import { Transition } from '@headlessui/react';
import { LoadingState,loadingReducer } from '../../../utils/reducerFns/jobs';
import uuid from 'react-uuid'

interface JobsProps {}

type JobToggleOption = {
  index: number | undefined;
  show: boolean;
};

type CurrentList = {
    section: 'approved' | 'rawResponses' | undefined;
    selectedResponse: string | undefined;
}


const initialLoadingState = {
    gAuthorization: false,
    formResponses: false,
    jobApproval: false,
    getApproved:false,
}

const classNames = (...classes:string[]) => classes.filter(Boolean).join(' ');


const Jobs: React.FC = () => {
  const [resource, setResource] = useState<forms_v1.Schema$ListFormResponsesResponse | undefined>(undefined);
  const [loading,dispatch] = useReducer(loadingReducer,initialLoadingState)
  const [jobToggleOptions, setJobToggleOptions] = useState<JobToggleOption>({
    index: undefined,
    show: false,
  });
  const [currentList,setCurrentList] = useState<CurrentList>({
    section: undefined,
    selectedResponse: undefined,
  })

  const handleAuth = async () => {
    dispatch({type:'GAUTH',payload: true})

    try {
      const res = await fetch('/api/admin/auth-google');
      if (res.ok) {
        const {message}: {message:string} = await res.json();
        openAuthWindow(message);
        dispatch({type:'GAUTH',payload:false})
    }
    } catch (error) {
      console.log(error);
      dispatch({type:'GAUTH',payload:false})
    }
  };

  const openAuthWindow = (url:string) => {
     if(typeof window === 'undefined')return;

     window.open(url)
  }

  const handleApprove = async() => {
    dispatch({type: 'FORMRES',payload: true})
    if(!resource || !resource.responses)return

    const body = {...resource?.responses[jobToggleOptions.index as number]}
    try {
        const res = await fetch('/api/admin/jobs',{
            method: "POST",
            body: JSON.stringify(body),
        });

        if(res.ok){
            alert('success! job listing approved')
        }else alert((await res.json()).message)

        dispatch({type:'FORMRES',payload: false})

    } catch (error) {
        console.log(error)
        dispatch({type:'FORMRES',payload: false})

    }
  }

  const getApproved = async() => {
    dispatch({type: "GETAPPROVED",payload: true});
    setCurrentList(prevState => ({selectedResponse: undefined,section: 'approved'}))
    setJobToggleOptions({index: undefined,show: false})

    try {
        const res = await fetch('/api/admin/jobs')

        if(res.ok){
            const data = await res.json()
            setResource(data)
            dispatch({type:'GETAPPROVED',payload: false})
        }else throw new Error('failed to fetch approved jobs')
    } catch (error) {
        console.log(error)
        dispatch({type:'GETAPPROVED',payload: false})

    }
  }

  const handleDelete = async () => {
    dispatch({type:'GETAPPROVED',payload: true})
    if(!resource || !resource.responses)throw new Error('job listing is undefined')
    const _responseId = resource?.responses.at(jobToggleOptions.index as number)?.responseId as string
    try {
        const res = await fetch(`/api/admin/delete?id=${_responseId}`,{
            method: 'DELETE'
        })
        if(res.ok){
           setResource(prevState => {
             const updatedListing = prevState?.responses?.filter(l => l.responseId !== _responseId)
             return ({
                ...prevState,
                responses: updatedListing,
             })
           })

           if(jobToggleOptions.index === resource?.responses?.length - 1){
             setJobToggleOptions(prevState => ({...prevState,index: (prevState.index as number) - 1}))
           }

           alert('listing removed succesfully')
           dispatch({type:'GETAPPROVED',payload:false})
        }else alert('failed to delete listing. Please try again later!')
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    if(resource?.responses?.length === 0){
        setJobToggleOptions({
            index: undefined,
            show: false,
        })
    }
  }, [resource?.responses?.length])

  return (
    <div className='flex flex-col sm:flex-row'>
      <div className='sm:w-1/3'>
        <div className='border-b pb-3'>
          <ul className='space-x-3'>
            <li className='inline'>
              <button className={`btn btn-sm ${currentList.section === 'approved' ? 'btn-active' : 'btn-outline'}`}
                onClick={getApproved}
                disabled={loading.getApproved}
              >
                Approved 
                {/* <span className='font-bold ml-1'>&#183;</span> */}
              </button>
            </li>
            <li className='inline space-x-3'>
              <button
                className={`btn btn-sm ${currentList.section === 'rawResponses' ? 'btn-active' : 'btn-outline'}`}
                onClick={async () => {
                  dispatch({type: 'FORMRES',payload: true});
                  setCurrentList(prevState => ({selectedResponse: undefined,section: 'rawResponses'}))
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
                    dispatch({type: 'FORMRES',payload:false})
                  } else {
                    alert(res.statusText);
                    dispatch({type:'FORMRES',payload:false})
                  }
                }}
                disabled={loading.formResponses}
              >
                Raw responses
              </button>
              <button
                className={`btn btn-circle btn-circle btn-sm ${
                  loading.gAuthorization && 'loading'
                }`}
                onClick={handleAuth}
                disabled={loading.gAuthorization}
              >
                {!loading.gAuthorization && <KeyIcon className='w-3.5'/>}
              </button>
            </li>
          </ul>
        </div>
        <div className='space-y-3 mt-2 text-gray-800 relative pt-3'>
          {(loading.formResponses || loading.getApproved )&& <progress className='progress w-full mx-auto'></progress>}
          {resource?.responses && !loading.formResponses && !loading.getApproved &&
            resource.responses.map((r, index) => {
              const timePosted = new Date(r.createTime as string).toDateString();
              if(typeof r === 'undefined')return
              if(r.answers === undefined || !r.answers)return
              return (
                <div
                  key={uuid()}
                  className={classNames(
                   `hover:bg-gray-200 ${index === jobToggleOptions.index ? 'bg-gray-800 hover:bg-gray-800 text-gray-200' : 'text-gray-600 hover:text-gray-800'}`, 
                    `cursor-pointer transition-all duration-200 ease-in-out flex justify-between pl-2.5 py-1.5 rounded-lg`)}
                  onClick={() =>
                    { 
                        setJobToggleOptions({ index: index, show: true })
                        setCurrentList(prevState => ({...prevState, selectedResponse: r.responseId as string}))
                }
                  }
                >
                  <div>
                    {jobToggleOptions.index === index ? <SBriefcaseIcon className={`w-5 inline mr-2 ${currentList.section === 'rawResponses' ? 'text-rose-400' : 'text-emerald-500'}`}/> : <BriefcaseIcon className={`w-5 inline mr-2 ${currentList.section === 'rawResponses' ? 'text-rose-400' : 'text-emerald-500'}`} />}
                    <p className='font-semibold first-letter:uppercase text-sm inline-block'>
                        {/* @ts-ignore */}
                      {r.answers['1cf59252'].textAnswers?.answers[0].value as string}
                    </p>
                  </div>
                  <div className='self-center'>
                    <p className={classNames(jobToggleOptions.index === index ? 'text-gray-400' :'text-gray-500','text-xs inline mr-3 font-normal')}>{timePosted}</p>
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
                {
                    currentList.section === 'rawResponses' ?
                    <button className='btn btn-xs btn-success rounded capitalize'
                        onClick={handleApprove}
                        disabled={loading.jobApproval}
                    >
                        <CheckIcon className='w-3.5 mr-1.5'/>
                            Approve
                    </button> : 
                    
                    <button className='btn btn-xs btn-error rounded capitalize'
                        onClick={handleDelete}
                    >
                            Remove
                    </button>   
                }
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
