import type { NextApiHandler } from "next";
import { Jobs } from "../../../utils/mongoConfig";
import { URL } from "url";

const deleteJobHandler:NextApiHandler = async(req,res) => {
    if(req.method === 'DELETE'){
        const url = new URL(req.url as string,req.headers.origin)
        const responseId = url.searchParams.get('id')

        try {
            await Jobs.deleteApproved(responseId as string);
            const updatedListing = await Jobs.getApproved()

            return res.status(200).json({message: 'listing removed succesfully'})
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'job deletion failed'})
        }
        
    }else return res.status(400).json({message: "bad request"})
}


export default deleteJobHandler;