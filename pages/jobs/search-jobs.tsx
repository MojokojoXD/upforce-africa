import { useState, useCallback, useEffect } from 'react';
import type { GetStaticProps } from 'next';
import type { forms_v1 } from 'googleapis';
import { Jobs } from '../../utils/mongoConfig';
import type { ApprovedJobs } from '../../utils/types/jobs';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import JobListingCard from '../../components/jobs-search/JobListingCard';
import FilterButton from '../../components/jobs-search/FilterButton';
import useProcessJobs from '../../components/customHooks/useProcessJobs';
import Header from '../../components/layout/Header';
import JobDesc from '../../components/jobs-search/JobDesc';

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
  const [sortOrder, setSortOrder] = useState<'new' | 'oldest' | undefined>(
    undefined
  );
  const transformedListing = useProcessJobs(jobListings, sortOrder);
  const initialCurrentListId =
    transformedListing.length > 0 ? transformedListing[0].id : '';
  const [currentListId, setCurrentListId] = useState(initialCurrentListId);
  const selectedLising = transformedListing.filter(
    (l) => l.id === currentListId
  );

  //memoized function to fetch sort order from JobFilter component
  const _getSortOrder = useCallback(
    (order: 'new' | 'oldest' | undefined) => {
      setSortOrder(order);
    },
    [setSortOrder]
  );

  const handleClick = (id: string) => {
    setCurrentListId(id);
  };

  return (
    <>
      <Header title='job search'>
        <div className='flex justify-between py-2 px-5 bg-white rounded-full shadow-lg text-gray-700'>
          <button className='btn btn-ghost font-normal normal-case text-lg'>
            <MagnifyingGlassIcon className='w-6 inline' />
            Search
          </button>
          <FilterButton getSortOrder={_getSortOrder} />
        </div>
      </Header>
      <div className='min-h-screen bg-white'>
        {!initialCurrentListId ? (
            <div className='relative min-h-screen'>
                <div className='text-gray-600 flex justify-center items-center absolute inset-2'>
                    <h1 className='mb-10 text-2xl display-font font-normal'>
                        Jobs found(0)
                    </h1>
                </div>
            </div>
        ) : (
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-5 bg-white'>
            <div className='py-5 h-full sm:grid sm:grid-cols-2'>
              <div className='flex space-y-4 items-center flex-col '>
                {transformedListing.map((l) => (
                  <JobListingCard
                    listings={l}
                    key={l.id as string}
                    onClick={()=> handleClick(l.id as string)}
                  />
                ))}
              </div>
              <div>
                <div className='sticky top-20 hidden sm:block h-[calc(100vh-5rem)] max-w-prose'>
                  <JobDesc currentListing={selectedLising[0]} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
