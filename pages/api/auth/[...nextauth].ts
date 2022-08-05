import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirestoreAdapter } from '@next-auth/firebase-adapter';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        })
    ],
    adapter: FirestoreAdapter({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
    }),
    secret: process.env.JWT_SECRET,
    session: {
        strategy: 'jwt'
    },
    jwt: {
        secret: process.env.JWT_SECRET
    }
});
