import { google } from "googleapis";
import { oauth2Client } from "../../utils/googleAuth";
import type { NextApiHandler } from "next";
import { getTokens } from "../../utils/mongoConfig";


const testEndpointHandler:NextApiHandler = async(req,res) => {
    if(req.method !== 'GET') return res.status(400).json({message: "endpoint error"})

    const tokens = await getTokens()

    if(tokens === undefined)return res.status(400).json('auth tokens not set')

    oauth2Client.credentials = tokens;

    const forms = google.forms({
        version: 'v1',
        auth: oauth2Client,
    })

    try {
        const result = await forms.forms.responses.list({formId:'1OFFUXXqVcBNPSKOcvx-i-4q6yyyv36BwR_hNgMapHn4'})
    
    
        return res.status(200).json({...result.data})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'failed to fetch form responses'})
    }
}


export default testEndpointHandler;