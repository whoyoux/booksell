import * as firebaseAdmin from 'firebase-admin';
import serviceAccount from './cred.json';

if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert({
            privateKey: serviceAccount.private_key,
            clientEmail: serviceAccount.client_email,
            projectId: serviceAccount.project_id
        }),
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
    });
}
const auth = firebaseAdmin.auth();

export { auth };
