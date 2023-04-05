import { JobSearch } from "../../utils/fns";

interface JobListingProps {
    listings: {
        [key:string]: any ;
    } | undefined;
}

  
const JobListingCard: React.FC<JobListingProps> = ({listings}) => {
    
    return ( 
        <div className='sm:max-w-md border border-gray-300 p-5 rounded-lg hover:shadow focus:border-purple-500 cursor-pointer text-gray-800 transition-all duration-100 ease-in space-y-2'>
            <div className="capitalize space-y-1">
                <h1 className="text-lg font-bold">{listings?.jobTitle || ""}</h1>
                <p className="font-medium text-base lowercase first-letter:uppercase">{listings?.company || ""}</p>
                <p className="font-medium text-base">{listings?.location || ""}</p>
            </div>
            <div className="text-[14px] text-gray-500 font-normal">
                <p>{listings?.requirements  || ""}</p>
                <p>{listings?.duties || ""}</p>
            </div>
            <div className="text-gray-500 text-[14px] font-normal">
                <p>{listings?.compensation || ""}</p>
            </div>
            <div className="h-8">
                <small className="text-purple-600">Posted {JobSearch.elapsedTime(listings?.approvedOn as string)} ago</small>
                <button className="float-right mr-5 btn btn-outline btn-xs">apply</button>
            </div>
        </div>
     );
}
 
export default JobListingCard;