import React, { createContext, useEffect, useState } from 'react';
import app from '../../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const authContext = createContext();
const auth = getAuth(app);

const AuthContext = ({children}) => {
    const provider = new GoogleAuthProvider();


    const [user, setUser] = useState(null)



    const RegisterTheUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () =>{
        return signOut(auth)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth,provider)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })

        return () =>{
            unsubscribe()
        }
    },[])
    
  
    const authInfo = {RegisterTheUser,loginUser,user,logOut,googleLogin}
    return (
     <authContext.Provider value={authInfo}>
        {children}
     </authContext.Provider>
    );
};

export default AuthContext;