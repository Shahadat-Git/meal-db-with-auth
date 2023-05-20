import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singInuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logoutUser = () => {
        return signOut(auth)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }



    // obesrver auth state
    useEffect(() => {
        onAuthStateChanged(auth, (loogedUser) => {
            // console.log("auth state chanded", loogedUser)
            setUser(loogedUser);
            setLoading(false);
        })
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        singInuser,
        logoutUser,
        resetPassword,
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;