import {useState,useEffect,useMemo} from 'react'
import type { ApprovedJobs } from '../../utils/types/jobs'
import { JobSearch } from '../../utils/fns';


const useProcessJobs = (listings:ApprovedJobs[],sortOrder: 'new' | 'oldest' | undefined) => {
    const [temp,setTemp] = useState<ApprovedJobs>(listings);
    const transformedList = useMemo(()=> {
        return JobSearch.transformListings(temp);
    },[temp])

    useEffect(()=>{

        if(sortOrder === 'new' || sortOrder === 'oldest'){
            const sortedList = JobSearch.sort(listings,sortOrder)
            setTemp(sortedList)
        }

    },[sortOrder,listings])

    return transformedList;
}


export default useProcessJobs;