import { NextPage, NextPageContext } from 'next/types';
import React from 'react';

import { useSession } from 'next-auth/react';

import { auth as adminAuth } from '../../lib/firebaseAdmin';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';

const Profile: NextPage = () => {
    // const { user, logout } = useAuth();

    const { data: session } = useSession();

    return (
        <main className="w-4/5 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-0 items-center w-full justify-between">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        // src={userFound?.photoURL}
                        alt="User profile picture"
                        className="w-16 h-16 rounded-full"
                    />
                    <h1 className="text-2xl font-medium">
                        {/* {userFound?.displayName} */}
                    </h1>
                </div>
            </div>
        </main>
    );
};

// export async function getServerSideProps(context: NextPageContext) {
//     const { slug } = context.query;

//     if (!slug || Array.isArray(slug))
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false
//             }
//         };

//     try {
//         const { uid, email, emailVerified, displayName, photoURL } =
//             await adminAuth.getUser(slug);

//         const preparedUser = {
//             uid,
//             email,
//             emailVerified,
//             displayName,
//             photoURL
//         };

//         return {
//             props: { user: preparedUser }
//         };
//     } catch (error) {
//         console.log(error);
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false
//             }
//         };
//     }
// }

export default Profile;
