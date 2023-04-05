import {google} from 'googleapis'
import type { NextApiHandler } from 'next'
import path from 'path';
import http from 'http'
import url from 'url'
import opn from 'open'
import { oauth2Client } from '../../../utils/googleAuth';
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

  

export default authGoogle;
