import type { NextApiRequest, NextApiResponse } from 'next';
import { getStoriesDB } from '../../../utils/mongoConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "GET"){
        const {offset} = req.query;
        const stories = await getStoriesDB(parseInt(offset as string))
        res.status(200).json(stories)
    }else{  
        res.status(401).json({message:"request unrecognizedd"})
    }
}
