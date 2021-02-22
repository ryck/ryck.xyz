import admin from 'firebase-admin';

import { getDecryptedSecret } from '@/lib/google/decret-secret';
import { firebase } from '@/lib/google/service-account.enc';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(getDecryptedSecret(firebase)),
    databaseURL:
      'https://ryck-xyz-default-rtdb.europe-west1.firebasedatabase.app'
  });
}

export default admin.database();
