import { google } from 'googleapis';

import { getDecryptedSecret } from './decret-secret';
import { youtube } from './service-account.enc';

const googleAuth = new google.auth.GoogleAuth({
  credentials: getDecryptedSecret(youtube),
  scopes: [
    'https://www.googleapis.com/auth/analytics.readonly',
    'https://www.googleapis.com/auth/youtube.readonly'
  ]
});

export default googleAuth;
