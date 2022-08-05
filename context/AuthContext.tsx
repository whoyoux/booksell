import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithRedirect, signOut } from 'firebase/auth';

import { auth, googleProvider } from '../lib/firebase';
import { useRouter } from 'next/router';

type UserProp = {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
};

type AuthContextType = {
    user: UserProp | null;
    login: () => void;
    logout: () => void;
};

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const [user, setUser] = useState<UserProp | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setUser({
                    uid: user.uid ?? '',
                    email: user.email ?? '',
                    displayName: user.displayName ?? '',
                    photoURL: user.photoURL ?? ''
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const login = async () => {
        // return await signInWithPopup(auth, googleProvider);
        return await signInWithRedirect(auth, googleProvider);
    };

    const logout = async () => {
        setUser(null);
        router.push('/');
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {loading ? <h1>Loading</h1> : children}
        </AuthContext.Provider>
    );
};
