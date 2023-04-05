export type LoadingState = {
    jobApproval: boolean;
    gAuthorization: boolean;
    formResponses:boolean;
    getApproved: boolean;
}

type ACTIONTYPE = {
    type: "JOBAPPROVAL" | "GAUTH" | "FORMRES" | "GETAPPROVED";
    payload: boolean;
}


export const loadingReducer = (state:LoadingState,action:ACTIONTYPE) => {
    const {payload} = action
    switch(action.type){
        case 'FORMRES':
            return {
                ...state,
                formResponses: payload,
            }
        case 'GAUTH':
            return {
                ...state,
                gAuthorization:payload,
            }
        case 'JOBAPPROVAL':
            return {
                ...state,
                jobApproval: payload
            }
        case 'GETAPPROVED': 
            return {
                ...state,
                getApproved: payload
            }
        default:
            throw new Error("action is not supported")
    }
}