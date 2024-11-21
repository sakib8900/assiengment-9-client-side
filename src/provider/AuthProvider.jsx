import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.confg';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // loading
    const [ loading , setLoading] = useState(true)
    console.log(loading, user);

    // login user
    const userLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // register user
    const createNewUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // user logout
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    
    // user profile update
    const updateUserProfile = (updatedData)=>{
        return updateUserProfile(auth.currentUser , updatedData)
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logout,
        userLogin,
        loading,
        updateUserProfile,
        
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    },[])
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;