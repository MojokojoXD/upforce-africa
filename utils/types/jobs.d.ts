import type { forms_v1 } from "googleapis"

export interface ApprovedJobs extends forms_v1.Schema$FormResponse{
    approvedAt?: string | null | undefined;
}

type GoogleQuestionIds = {
    name:string;
    id:string;
}


export type ListingField = {
    [key:string]: GoogleQuestionIds;
}

