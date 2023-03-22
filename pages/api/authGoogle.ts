import {google} from 'googleapis'
import type { NextApiHandler } from 'next'
import path from 'path';
import http from 'http'
import url from 'url'
import opn from 'open'
// import keys from '../../credentials.json'
import destroyer from 'server-destroy'
import { oauth2Client } from '../../utils/googleAuth';
import { stashTokens } from '../../utils/mongoConfig';
import type { GetTokenResponse } from 'google-auth-library/build/src/auth/oauth2client';
import type { Credentials } from 'google-auth-library';


const scopes = ['https://www.googleapis.com/auth/forms.responses.readonly'];

const authGoogle:NextApiHandler = async (req,res) => {
    try {
        await authenticate(scopes);
        return res.status(200).json({message: 'authentication successfull'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"something went wrong"})
    }

}

// const oauth2Client = new google.auth.OAuth2(
//     keys.web.client_id,
//     keys.web.client_secret,
//     keys.web.redirect_uris
// )


async function authenticate(scopes) {
    return new Promise<void>((resolve, reject) => {
      // grab the url that will be used for authorization
      const authorizeUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes.join(' '),
      });
      const server = http
        .createServer(
            async (req, res) => {
          try {
            if ((req.url as string).indexOf('/callback') > -1) {
              const qs = new url.URL(req.url as string, 'http://localhost:4000')
                .searchParams;
              res.end('Authentication successful! Please return to the console.');
              server.destroy();
              //@ts-ignore
              const {tokens}:{tokens: Credentials } = await oauth2Client.getToken(qs.get('code'));
              await stashTokens(tokens);
              oauth2Client.credentials = tokens; // eslint-disable-line require-atomic-updates
              resolve();
            }
          } catch (e) {
            reject(e);
          }
        })
        .listen(4000, () => {
          // open the browser to the authorize url to start the workflow
          opn(authorizeUrl, {wait: false}).then(cp => cp.unref());
        });
      destroyer(server);
    });
  }
  

export default authGoogle;
