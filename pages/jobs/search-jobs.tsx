import { useMemo,useState } from 'react';
import type { GetStaticProps } from 'next';
import type { forms_v1 } from 'googleapis';
import { Jobs } from '../../utils/mongoConfig';
import type { ApprovedJobs } from '../../utils/types/jobs';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import JobListing from '../../components/jobs-search/JobListing';
import { JobSearch } from '../../utils/fns';


interface SearchJobsProps {
  jobListings: ApprovedJobs[];
}

type ListingConfig = {
    toggleFilter: boolean;
    toggleSearch: boolean;
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
  const transformedListing = useMemo(
    () => JobSearch.transformListings(jobListings),
    [jobListings]
  );
  const [listingConfig,setListingConfig] = useState<ListingConfig>({
    toggleFilter:false,
    toggleSearch:false,
  })

  if(!transformedListing)return <p>something went wrong</p>


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
            <button>
              filter <FunnelIcon className='w-4 inline text-gray-500' />
            </button>
          </div>
          <div className='py-10 space-y-5'>
            {transformedListing.map((l) => (
              <JobListing listings={l} key={l.id as string} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
