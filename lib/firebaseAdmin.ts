import * as firebaseAdmin from 'firebase-admin';

if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert({
            privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(
                /\\n/g,
                '\n'
            ),
            clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
            projectId: process.env.FIREBASE_ADMIN_PROJECT_ID
        }),
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
    });
}
const auth = firebaseAdmin.auth();

export { auth };
