import { google } from "googleapis";
import keys from '../credentials.json'
import type { OAuth2Client } from "google-auth-library";


export const oauth2Client = new google.auth.OAuth2(
    keys.web.client_id,
    keys.web.client_secret,
    keys.web.redirect_uris[0]
)
