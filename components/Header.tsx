import Link from 'next/link';
import { useRouter } from 'next/router';

import { useSession, signIn, signOut } from 'next-auth/react';

const Header: React.FC = () => {
    const router = useRouter();
    const { data: session } = useSession();

    return (
        <header className="w-full py-10 px-10 sm:px-20 bg-indigo-500 flex items-center justify-between font-medium mb-5 text-white">
            <div>
                <h1 className="text-xl">
                    <Link href="/">Book Sell</Link>
                </h1>
            </div>
            {session?.user ? (
                <div className="flex items-center gap-2">
                    <button
                        className="hidden md:block py-2.5 px-5 bg-indigo-500 border-2 border-white rounded text-white font-bold hover:bg-white hover:text-black transition-all mr-5"
                        onClick={() => router.push('/add')}
                    >
                        Dodaj swoją książkę do listy
                    </button>
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
                        {session.user?.email} &#9660;
                    </h2>
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
    );
};

export default Header;
