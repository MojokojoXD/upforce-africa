import { useState,useEffect } from "react";
import type { Article } from "../../utils/types/techNews";

export function useFetchStories(offset:number){
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<boolean>(false);
    const [stories,setStories] = useState<Article[]>([]);

    useEffect(()=>{
        const updateStories = async() => {
            setLoading(true);
            try {
                const newsUpdate = await fetch(`/api/news/${offset}`)

                if(newsUpdate.ok){
                    const data:Article[] = await newsUpdate.json();
                    setStories(data)
                    setLoading(false)
                }
                
            } catch (error) {
                console.log(error)
                setLoading(false)
            }

        }

        if(offset !== 0){
            updateStories();
        }
    },[offset,setStories])

    return [stories,loading,error]
}

// type RequestOptions={
//     url?:string;
//     method?: string;

// }

// class Fetcher {
//     private url:string = "";

//     constructor(){
//     }

//     async request(data:any,options?:RequestOptions){
//         if(!url || !options)throw new Error('resource location has not been set');

//         const result = await fetch()
//     }
// }



