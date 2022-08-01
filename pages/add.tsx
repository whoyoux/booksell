import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

const AddNewBook: NextPage = () => {
    const router = useRouter();
    const { user } = useAuth();

    if (!user) router.push('/');

    return (
        <div>
            {!user ? (
                <h1 className="text-xl">Loading ...</h1>
            ) : (
                <div>Logged in</div>
            )}
        </div>
    );
};

export default AddNewBook;
