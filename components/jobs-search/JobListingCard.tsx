import { JobSearch } from '../../utils/fns';

interface JobListingProps extends React.HTMLAttributes<HTMLElement> {
  listings:
    | {
        [key: string]: any;
      }
    | undefined;
}

const JobListingCard: React.FC<JobListingProps> = (props) => {
  const { listings } = props;
  return (
    <div
      className='group w-full h-56 max-w-md sm:max-w-md p-5 rounded-lg shadow-sm hover:shadow focus:border-purple-500 cursor-pointer transition-all duration-100 ease-in space-y-2 border h-fit transition-all duration-300 ease-in-out flex flex-col justify-between'
      {...props}
    >
      <div>
        <div className='capitalize text-gray-700 space-y-1'>
          <h2 className='group-hover:underline text-lg font-semibold'>
            {listings?.jobTitle || ''}
          </h2>
          <p className='font-normal lowercase text-sm'>
            {listings?.company || ''}
          </p>
          <p className='font-normal text-sm'>{listings?.location || ''}</p>
        </div>
        <div className='text-xs text-gray-500 font-normal whitespace-pre-wrap leading-snug line-clamp-4 pr-10 mt-4'>
          <p>{listings?.requirements || ''}</p>
        </div>
      </div>
      <div className=''>
        <small className='text-purple-500 text-xs'>
          Posted {JobSearch.elapsedTime(listings?.approvedOn as string)} ago
        </small>
      </div>
    </div>
  );
};

export default JobListingCard;
