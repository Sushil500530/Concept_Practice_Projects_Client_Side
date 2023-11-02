/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [isLoading,setIsLoading] = useState(true)

    const createUser = (email,password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubcriber = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
            setIsLoading(false);
        })
        return () => {
            return unSubcriber()
        }
    },[])


    const authInfo = {
        user,
        isLoading,
        createUser,
        loginUser,
        logOut,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;