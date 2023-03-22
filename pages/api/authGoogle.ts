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

    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes.join(' ')
    })
    return res.status(200).json({message: authUrl})
}


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
