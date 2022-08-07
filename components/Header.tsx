import Link from 'next/link';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
    const { data: session } = useSession();
    const router = useRouter();

    return (
        <>
            <header className="w-full py-10 px-10 sm:px-20 bg-indigo-500 flex items-center justify-between font-medium mb-5 text-white">
                <div>
                    <h1 className="text-xl">
                        <Link href="/">Book Sell</Link>
                    </h1>
                </div>
                {session?.user ? (
                    <div className="flex items-center gap-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={session?.user.image || ''}
                            alt="User profile picture"
                            className="rounded-full h-8 w-8 md:h-10 md:w-10 p-0"
                        />
                        <h2
                            // onClick={() =>
                            //     router.push(`/profiles/${session.user?.email}`)
                            // }
                            onClick={() => signOut()}
                            className="hover:underline cursor-pointer relative"
                        >
                            {session.user?.name?.split(' ')[0] || 'Anonymous'}
                            {/* {' '}&#9660; */}
                        </h2>
                        <button
                            className="hidden md:block py-3 w-full md:w-auto ml-5 font-bold md:px-5 bg-white rounded border-2 text-indigo-500 border-white text-black/80 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all cursor-pointer"
                            onClick={() => router.push('/add')}
                        >
                            Wystaw książkę
                        </button>
                    </div>
                ) : (
                    <ul className="flex gap-5">
                        <li
                            className="hover:underline cursor-pointer"
                            onClick={() => signIn('google')}
                        >
                            Login
                        </li>
                    </ul>
                )}
            </header>
            {session?.user && (
                <div className="fixed bottom-0 left-0 w-full bg-indigo-500 text-white py-4 md:hidden text-center z-50">
                    <button
                        className="py-3 px-4 md:w-auto font-medium md:px-5 bg-white rounded border-2 text-indigo-500 border-white text-black/80 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all cursor-pointer"
                        onClick={() => router.push('/add')}
                    >
                        Wystaw książkę
                    </button>
                </div>
            )}
        </>
    );
};

export default Header;
