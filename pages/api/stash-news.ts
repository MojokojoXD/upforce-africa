// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db_client } from '../../utils/mongoConfig'
import type { Article } from '../../utils/types/techNews'
import { stashNews } from '../../utils/mongoConfig'
import { getStories } from '../../utils/blog-fns'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.query.token !== process.env.PATH_TOKEN){
        return res.status(401).json({message: 'invalid token'})
    }
    if(req.method === "GET"){

        let stories:{status:number;numResults:number;articles: Article[]}
         //fetch tech stories from perigon
    
         try {
             stories = await getStories();
    
             if(stories.status !== 200 || stories === undefined){
                return res.status(400).json({message:"news fetching return unfavourable status"})
                return;
             }
         }catch(error){
            console.log(error)
            res.status(500).json({message: 'fetching stories failed'})
            return;
         }
    
         //insert stories into mongoDb
    
         try {
            await stashNews(stories.articles)
            await res.revalidate('/tech-news');

            return res.status(200).json({message:"path revalidated and stories stashed"})
         } catch (error) {
            console.log(error)
    
            return res.status(500).json({message: "story insertion failed"})
         }
    }
}
