import { google } from "googleapis";
import type { OAuth2Client } from "google-auth-library";


export const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
)
