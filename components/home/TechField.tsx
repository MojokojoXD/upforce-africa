import { FC } from 'react';
import { ChevronRightIcon,ChevronLeftIcon } from '@heroicons/react/24/outline';

interface TechFieldProps {
  fieldName: string;
  fieldCode: string;
  url:string;
}

const TechField: FC<TechFieldProps> = ({
  fieldName,
  fieldCode,
  url,
}) => {
  const handleClick = (url:string) => {
    if(typeof window === 'undefined')return;
    window.open(url,'_blank')
  }
  return (
    <div className='group rounded-xl hover:bg-gray-100 hover:backdrop-blur-md mx-auto py-4 transition-all duration-300 ease-in-out cursor-pointer' onClick={()=>handleClick(url)}>
      <div className='flex items-center justify-center py-2'>
        <div className={`aspect-square flex justify-end items-center`}>
        <ChevronLeftIcon className='w-3 sm:w-4 text-white group-hover:text-gray-600 transition-all ease-in-out duration-300' />
          <span
            className={`font-bold text-purple-400 text-[14px] tracking-tighter display-font float-right`}
          >
            {fieldCode}
          </span>
        </div>
        <div className='flex px-2'>
          <p className='text-xs w-fit sm:text-lg font-light capitalize '>
            {fieldName}
          </p>
          <ChevronRightIcon className='w-3 sm:w-4 text-white group-hover:text-gray-600 transition-all ease-in-out duration-300' />
        </div>
      </div>
      <div className='text-center'></div>
    </div>
  );
};

export default TechField;
