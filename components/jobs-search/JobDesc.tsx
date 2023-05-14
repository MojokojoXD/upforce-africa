import { FC } from 'react';
import { WalletIcon } from '@heroicons/react/24/solid';

interface JobDescProps {
    currentListing: {
        [key:string]: any;
    } | undefined;
}

const JobDesc: FC<JobDescProps> = ({currentListing}) => {
    if(!currentListing)return<></>

    const compensation = currentListing?.compensation === 'No' ? "Full-time" : currentListing?.compensation === 'Yes' ? "Part-time" : '';

    const handleApply = (appUrl:string) => {
        if(typeof window === 'undefined')return;
        try {
            const url = new URL(appUrl)
            window.open(url,'_blank');
            
        } catch (error) {
            console.log('job application url unusable')
        }
        
    }
  return (
    <div className='relative h-full'>
        <div className='absolute inset-2 rounded-lg border shadow-sm text-zinc-600 min-w-max flex flex-col'>
            <div className="border-b px-10 h-fit pt-12 pb-6 bg-gradient-to-br from-purple-50 to-purple-200">
                <div className='space-y-2'>
                    <h2 className='text-2xl font-semibold capitalize'>
                        {currentListing?.jobTitle || ''}
                    </h2>
                    <div className='text-zinc-500'>
                        <p>{currentListing?.company || ''}</p>
                        <p>{currentListing?.location || ''} | <span className=' font-normal mt-2'>{compensation}</span></p>
                       
                    </div>
                    <div className='py-2'>
                        <button className='btn btn-wide btn-sm btn-primary'
                        onClick={()=>handleApply(currentListing?.appLocation)}
                        >Apply</button>
                    </div>
                </div>
            </div>
            <div className="p-10 h-full overflow-auto space-y-5 shadow-inner">
                <div className="space-y-3">
                    <h3 className='text-lg font-semibold'>Job Details</h3>
                    <div>
                         <div className='flex space-x-4'>
                            <WalletIcon className='w-6 text-zinc-400 self-start'/>
                            <div className='text-sm space-y-2'>
                                <p>Job Type</p>
                                <span className='badge badge-sm'>{compensation}</span>
                            </div>
                         </div>
                    </div>
                </div>
                <hr/>
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Description</h3>
                    <p className='whitespace-pre-wrap max-w-md font-light'>
                        {currentListing?.duties}
                    </p>
                    <hr />
                    <h4 className='bold'><strong>Requirements</strong></h4>
                    <p className='whitespace-pre-wrap max-w-md font-light'>{currentListing?.requirements}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default JobDesc;
