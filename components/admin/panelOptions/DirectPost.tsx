import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import type { ApprovedJobs } from '../../../utils/types/jobs';

interface DirectPostProps {}

const currentTime = new Date().toISOString() as string;
const FORM_ID = uuidv4() as string;
const questionIds = [
  '616acbb2',
  '1dfa0c26',
  '59d822a1',
  '1c017378',
  '1cf59252',
  '24b2a3dd',
];

type UrlValidation = (v: string) => void;

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const checkUrl: UrlValidation = (v) => {
  try {
    const url = new URL(v);
    return;
  } catch (error) {
    return 'email is not valid';
  }
};


const DirectPost: FC<DirectPostProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    setValue,
    reset,
    clearErrors,
  } = useForm<ApprovedJobs>({
    defaultValues: {
      responseId: FORM_ID,
      lastSubmittedTime: currentTime,
      createTime: currentTime,
      approvedAt: '',
      answers: {

      }
    },
    reValidateMode: 'onSubmit',
  });
  const [loading,setLoading] = useState(false);

  const onSubmit: SubmitHandler<ApprovedJobs> = async data => {
        const body = JSON.stringify(data)
        setLoading(true)
        try {
            const res = await fetch('/api/admin/jobs',{
                method: "POST",
                body: body,
            });
    
            if(res.ok){
                alert('success! job listing posted and approved')
                reset();
            }else alert((await res.json()).message)
    
            setLoading(false)
    
        } catch (error) {
            console.log(error)
            setLoading(false);
    
        }
  };
  const getErrorClass = (field: string) =>  errors.answers && errors.answers[field] ? 'input-error' : '';
  const getErrorMessage = (field:string) => {
    if(!errors.answers)return '\xa0';
    //@ts-ignore
    const message = (errors.answers[field]?.textAnswers.answers[0].value
    .message) || '\xa0';

    return message;
  }

  useEffect(() => {
    questionIds.forEach((id) =>
      register(`answers.${id}.questionId`, {
        value: id,
      })
    );
  }, [register]);


  return (
    <div className='min-h-screen p-5 text-gray-800'>
      <div className='mb-5 border-b w-fit pb-1'>
        <h1 className='text-sm font-normal uppercase'>
          Post a job directly to job search
        </h1>
      </div>
      <div className='max-w-lg'>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className='space-y-12'>
            <div className='border-b border-gray-900/10 pb-12'>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Profile
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                <span className='text-red-500'>*</span> field will be displayed
                publicly
              </p>

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6'>
                <div className='sm:col-span-4'>
                  <label
                    htmlFor='username'
                    id='fullname'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Applicant&apos;s name
                  </label>
                  <div className='mt-2'>
                    <input
                      id='applicant'
                      className='input input-bordered w-full max-w-xs'
                      placeholder='Jane Doe'
                      {...register('answers.616acbb2.textAnswers.answers.0.value')}
                    />
                    <label className='label'>
                      <span className='label-text-alt'>&nbsp;</span>
                    </label>
                  </div>
                </div>
                <div className='sm:col-span-4'>
                  <label
                    htmlFor='applicant email'
                    id='email'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Applicant&apos;s email
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      autoComplete='email'
                      className={`input input-bordered w-full max-w-xs ${getErrorClass(
                        '59d822a1'
                      )}`}
                      placeholder='jane.doe@workemail.com'
                      {...register('answers.59d822a1.textAnswers.answers.0.value', {
                        required: 'required',
                        pattern: {
                          value: emailRegex,
                          message: 'email is invalid',
                        },
                        onChange: (e) =>
                          (errors.answers && errors.answers['59d822a1']) && clearErrors('answers.59d822a1'),
                      })}
                    />

                    <label className='label'>
                      <span className='label-text-alt text-error'>
                        {getErrorMessage('59d822a1')}
                      </span>
                    </label>
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
                    <input
                      type='text'
                      id='company'
                      className={`input input-bordered w-full max-w-xs ${getErrorClass(
                        '1c017378'
                      )}`}
                      {...register('answers.1c017378.textAnswers.answers.0.value', {
                        required: 'required',
                        onChange: (e) =>
                          (errors.answers && errors.answers['1c017378']) && clearErrors('answers.1c017378'),
                      })}
                    />
                    <label className='label'>
                      <span className='label-text-alt text-error'>
                        { getErrorMessage('1c017378')}
                      </span>
                    </label>
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
                      id='misc'
                      rows={3}
                      className='textarea textarea-bordered w-full'
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
                      id='jobTitle'
                      type='text'
                      className={`input input-bordered w-full max-w-xs ${getErrorClass(
                        '1cf59252'
                      )}`}
                      {...register('answers.1cf59252.textAnswers.answers.0.value', {
                        required: 'required',
                        onChange: (e) =>
                          (errors.answers && errors.answers['1cf59252']) && clearErrors('answers.1cf59252'),
                      })}
                    />
                    <span className='label-text-alt text-error'>
                      {getErrorMessage('1cf59252')}
                    </span>
                  </div>
                </div>

                {/* <div className='sm:col-span-3'>
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
                      className={`input input-bordered w-full max-w-xs ${getErrorClass(
                        '24b2a3dd'
                      )}`}
                      {...register('24b2a3dd.textAnswers.answers.0.value', {
                        required: {
                          value: true,
                          message: 'required',
                        },
                        onChange: (e) =>
                          {
                            errors['24b2a3dd'] && clearErrors('24b2a3dd');
                            const newValue = e.target.value + ',' + getValues('24b2a3dd.textAnswers.answers.0.value')

                            setValue('24b2a3dd.textAnswers.answers.0.value',newValue)
                          }
                      })}
                    >
                      <option value=''>-</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                    <span className='label-text-alt text-error'>
                      {errors['24b2a3dd.textAnswers.answers.0.value']?.message || '\xa0'}
                    </span>
                  </div>
                </div> */}
                <div className='sm:col-span-4'>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Location
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      id='city'
                      autoComplete='address-level2'
                      placeholder='Format: [country,city] eg Egypt,Cairo'
                      className={`input input-bordered w-full max-w-xs ${getErrorClass(
                        '24b2a3dd'
                      )}`}
                      {...register('answers.24b2a3dd.textAnswers.answers.0.value', {
                        required: 'required',
                        onChange: (v) => (errors.answers && errors.answers['24b2a3dd']) && clearErrors('answers.24b2a3dd'),
                      })}
                    />
                    <span className='label-text-alt text-error'>
                      {getErrorMessage('24b2a3dd')}
                    </span>
                  </div>
                </div>
                <div className='sm:col-span-4 sm:col-start-1'>
                  <label
                    htmlFor='appUrl'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Application link
                  </label>
                  <div className='mt-2'>
                    <input
                      id='appUrl'
                      autoComplete='url'
                      placeholder='include https://'
                      className={`input input-bordered w-full max-w-xs ${getErrorClass('1dfa0c26')}`}
                      {...register('answers.1dfa0c26.textAnswers.answers.0.value', {
                        required: 'required',
                        onChange: e => (errors.answers && errors.answers['1dfa0c26']) && clearErrors("answers.1dfa0c26"),
                      })} 
                    />
                    <span className='label-text-alt text-error'>
                      {getErrorMessage('1dfa0c26')}
                    </span>
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
                      id='duties'
                      cols={30}
                      rows={7}
                      className={`textarea textarea-bordered w-full`}
                      defaultValue={''}
                      {...register('answers.2d0bb8c6.textAnswers.answers.0.value')}
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
                      id='requirements'
                      cols={30}
                      rows={7}
                      className='textarea textarea-bordered w-full'
                      defaultValue={''}
                      {...register('answers.25b9bb0e.textAnswers.answers.0.value')}
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
                    <span className='label-text-alt text-error ml-3 font-light'>
                      {getErrorMessage('484da9c7')}
                    </span>
                  </legend>
                  <div className='mt-6 space-y-6'>
                    <div className='relative flex gap-x-3'>
                      <div className='flex h-6 items-center'>
                        <input
                          id='fullTime'
                          type='radio'
                          value={'No'}
                          className={`radio ${getErrorClass('484da9c7')}`}
                          {...register('answers.484da9c7.textAnswers.answers.0.value',{
                            required: 'required',
                            onChange: e => (errors.answers && errors.answers['484da9c7']) && clearErrors('answers.484da9c7'),
                          })}
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
                          type='radio'
                          value={'Yes'}
                          className= {`radio ${getErrorClass('484da9c7')}`}
                          {...register('answers.484da9c7.textAnswers.answers.0.value',{
                            required: 'must pick one',
                            onChange: e => (errors.answers && errors.answers['484da9c7']) && clearErrors('answers.484da9c7'),
                          })}
                        />
                      </div>
                      <div className='text-sm leading-6'>
                        <label
                          htmlFor='internship'
                          className='font-medium text-gray-900'
                        >
                          Part-time/Internship
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
              className={`btn btn-primary btn-wide ${loading && 'loading'}`}
              disabled={isSubmitting}
            >
              {loading ? 'Loading' : 'Post/Approve'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DirectPost;
