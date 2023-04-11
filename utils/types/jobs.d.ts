import type { forms_v1 } from "googleapis"

export interface ApprovedJobs extends forms_v1.Schema$FormResponse{
    approvedAt?: string | null | undefined;
}

export type GoogleQuestionIds = {
    name:string;
    id:string;
}