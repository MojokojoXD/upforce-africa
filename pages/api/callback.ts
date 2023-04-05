import type { NextApiHandler } from "next";
import { stashTokens } from "../../utils/mongoConfig";
import { oauth2Client } from "../../utils/googleAuth";
import url from 'url'
import type { Credentials } from "google-auth-library";


const callBack:NextApiHandler = async(req,res) => {

    if ((req.url as string).indexOf('/callback') > -1) {
        const qs = new url.URL(req.url as string, 'https://upforce-africa.vercel.app')
          .searchParams;
        res.end('Authentication successful! Please return to the console.');
        //@ts-ignore
        const {tokens}= await oauth2Client.getToken(qs.get('code'));
        await stashTokens(tokens);
        oauth2Client.credentials = tokens; // eslint-disable-line require-atomic-updates
      }else {
        res.status(400).json({message: "authorization failed"})
      }
}


export default callBack;