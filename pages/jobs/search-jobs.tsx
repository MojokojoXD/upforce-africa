import { useMemo,useState } from 'react';
import type { GetStaticProps } from 'next';
import type { forms_v1 } from 'googleapis';
import { Jobs } from '../../utils/mongoConfig';
import type { ApprovedJobs } from '../../utils/types/jobs';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import JobListingCard from '../../components/jobs-search/JobListingCard';
import FilterButton from '../../components/jobs-search/FilterButton';
import useProcessJobs from '../../components/customHooks/useProcessJobs';

interface SearchJobsProps {
  jobListings: ApprovedJobs[];
}

export const getStaticProps: GetStaticProps<SearchJobsProps> = async (
  context
) => {
  try {
    let listings: ApprovedJobs[] | undefined = await Jobs.getApproved();

    if (!listings) throw new Error('unable to fetch approved jobs');
    return {
      props: {
        jobListings: listings,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default function SearchJobs({ jobListings }: SearchJobsProps) {
  const [sortOrder,setSortOrder] = useState<'new' | 'oldest' | undefined>(undefined)
  const transformedListing = useProcessJobs(jobListings, sortOrder)

  //function to fetch sort order from JobFilter component
  const _getSortOrder = (order: 'new' | 'oldest') => {
     setSortOrder(order)
  }

  return (
    <>
      <div className='px-6 lg:px-20 bg-gradient-to-br from-black via-black to-purple-800'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10'>
          <h2 className='text-3xl font-bold leading-7 text-white sm:truncate sm:text-4xl sm:tracking-tighter'>
            Job Search
          </h2>
        </div>
      </div>
      <div className='min-h-screen bg-white text-black'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-5'>
          {/* job search options */}
          <div className='flex justify-between px-5 py-3 border-b'>
            <button>
              <MagnifyingGlassIcon className='w-4 inline text-gray-500' />
              Search
            </button>
            <FilterButton getSortOrder={_getSortOrder}/>
          </div>
          <div className='py-10 space-y-5'>
            {transformedListing.map((l) => (
              <JobListingCard listings={l} key={l.id as string} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
