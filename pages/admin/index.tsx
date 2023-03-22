import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import type { Login } from '../../utils/types/admin';
import Spinner from '../../components/misc/Spinner';

interface AdminProps {}

const Admin: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [credentials, setCredentials] = useState<Login>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<Boolean>(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { id, value } = event.target;
    setError(false);
    setCredentials((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const data = await signIn('credentials', {
      redirect: false,
      username: credentials.email,
      password: credentials.password,
    });

    if (!data?.ok) {
      setError(true);
    }
  };

  if(!session)return<Spinner/>
  if (session) {
    router.push(`/admin/${session.user?.name}`);

  } 
    return (
      <div className='h-screen flex'>
        <div className='w-1/4 bg-white bg-gradient-to-br from-purple-400 to-indigo-300 shadow-lg'>
          <div className='bg-slate-100 py-20 shadow-inner relative'>
            <h1 className='text-2xl w-fit font-semibold text-right text-gray-700 tracking-tight absolute right-10 after:content-["africa"] after:text-[10px] after:absolute after:left-0 after:-bottom-3.5 after:w-full after:text-gray-500'>
              UpForce
            </h1>
          </div>
        </div>
        <div className='bg-stone-50 w-3/4 flex justify-center items-center flex-col text-gray-700 space-y-5'>
          <h1 className='text-3xl font-semibold tracking-tighter'>
            Admin Panel
          </h1>
          <div className='w-1/2'>
            <form className='space-y-5 relative' onSubmit={handleSubmit}>
              <input
                type='Email'
                className='input input-bordered block mx-auto w-1/2 input-sm placeholder:italic placeholder:font-light bg-slate-50'
                placeholder='Email'
                id='email'
                onChange={handleChange}
              />
              <input
                type='password'
                className='input input-bordered block mx-auto w-1/2 input-md input-sm placeholder:italic placeholder:font-light bg-slate-50'
                placeholder='Password'
                onChange={handleChange}
                id='password'
              />
              <input
                type='submit'
                className='btn btn-xs block mx-auto'
                value='sign in'
              />
              <div className='relative h-20'>
                {error ? (
                  <p className='-bottom-16 mx-auto w-1/2 text-sm text-red-500 block max-w-prose'>
                    Unauthorized! Please check your credentials and sign in or
                    contact site admin.
                  </p>
                ) : (
                  <span></span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Admin;
