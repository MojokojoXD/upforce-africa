import React,{FC} from 'react'

interface JobFieldProps {
    detail?: string;
    label: string;
    noFormatting?: boolean
}

const JobField:FC<JobFieldProps> = ({detail="no data",label,noFormatting=false}) => {
    return (
        <div>
            <p className='text-gray-500 text-xs font-semibold tracking-wide capitalize'>{label}</p>
            <p className={`bg-white w-fit py-1 px-3 border rounded max-w-prose ${!noFormatting && "capitalize"} ${!detail && 'hidden'} mt-2`}>{detail}</p>
        </div>
    )
}

export default JobField;
