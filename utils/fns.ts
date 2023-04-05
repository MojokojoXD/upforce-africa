import { ApprovedJobs } from "./types/jobs";

export function formatArticleDate(date: string) {
    return new Date(date).toDateString();
  }


export class JobSearch {
    static transformListings(listing:ApprovedJobs[]){
        
        if(!listing)return []
        return listing.map(l => {
            const {answers} = l
            if(typeof answers === 'undefined' || !answers)throw new Error('answers object is undefined')

            return {
                id: l.responseId,
                //@ts-ignore
                company: answers['1c017378'].textAnswers?.answers[0]?.value,
                //@ts-ignore
                jobTitle: answers['1cf59252'].textAnswers?.answers[0].value,
                //@ts-ignore
                duties: answers['2d0bb8c6'].textAnswers?.answers[0].value,
                //@ts-ignore
                requirements: answers['25b9bb0e'].textAnswers?.answers[0].value,
                //@ts-ignore
                compensation: answers['484da9c7'].textAnswers?.answers[0].value,
                //@ts-ignore
                location: answers['24b2a3dd'].textAnswers?.answers[0].value,
                //@ts-ignore
                appLocation: answers['1dfa0c26'].textAnswers?.answers[0].value,
                approvedOn: l.approvedAt as string,
            }
        })
    }

    static elapsedTime(dateString: string){
        let computedTime;
        const postDate = Date.parse(dateString);
        const currentDate = Date.now()

        const elapsedTime = Math.floor((currentDate - postDate)/1000);

        switch(true){
            case elapsedTime < 60:
                return `a few seconds`;
                break;
            case elapsedTime < 3600: 
                return `${Math.floor(elapsedTime/60)} minutes`;
                break;
            case elapsedTime < (3600 * 24):
                return `${Math.floor(elapsedTime/(3600))} hour(s)`;
                break;
            case elapsedTime < (3600 * 24 * 30):
                return `${Math.floor(elapsedTime/(3600 * 24))} day(s)`;
                break;
            case elapsedTime > (3600 * 24 * 30):
                return `30+ days`
                break;
            default:
                throw new Error(`Elapsed time invalid. Time computed: ${elapsedTime}`)
        }
    }

    static sort(listing: ApprovedJobs[], method: 'new' | 'oldest'){
        const temp = [...listing];
        switch(method){
            case 'new':
                return temp.sort((a,b) => {
                    return new Date(b.approvedAt as string).getTime() - new Date(a.approvedAt as string).getTime()
                })
            break;
            case 'oldest':
                return temp.sort((a,b)=> {
                    return new Date(a.approvedAt as string).getTime() - new Date(b.approvedAt as string).getTime()
                })
                break;
            default:
                throw new Error(`sort method ${method} is not supported`)
        }
    }
}