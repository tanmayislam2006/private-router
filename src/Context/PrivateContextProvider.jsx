import React from 'react';
import { PrivateContext } from './PrivateContext';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../Firebase/firebase.init';
const googleProvider=new GoogleAuthProvider()
const PrivateContextProvider = ({children}) => {
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const information={
            googleLogin,
            createUser
    }
    return (
            <PrivateContext value={information}>
                    {children}
            </PrivateContext>
    );
};

export default PrivateContextProvider;