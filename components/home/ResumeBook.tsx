import { FC } from 'react';
import TechField from './TechField';
import { content_links } from '../../utils/vars';

interface ResumeBookProps {}

const ResumeBook: FC<ResumeBookProps> = () => {
  return (
    <div className='sm:py-12 space-y-5 bg-white'>
      <div className='w-full sm:max-w-xl mx-auto flex justify-center bg-gradient-to-b to-transparent via-indigo-300 from-purple-500 py-16 sm:rounded-lg'>
        <div className='space-y-4 flex flex-col justify-center'>
          <h2 className='text-center text-2xl sm:text-4xl tracking-tight font-light'>
            Access candidate resume book<sup className='text-[12px]'>Beta</sup>
          </h2>
          <button className='btn btn-sm normal-case font-normal btn-ghost bg-white text-indigo-400 hover:bg-white btn-wide mx-auto'>
            Join Now
          </button>
        </div>
      </div>
      <div className='text-gray-500'>
        <div className='max-w-3xl sm:mx-auto py-5 px-5'>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-3'>
            {content_links.map((l) => (
                <div key={l.id}>
                <TechField
                    fieldCode={l.code}
                    fieldName={l.name}
                    url={l.href}
                />
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBook;
