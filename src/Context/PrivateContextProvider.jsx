import React, { useEffect, useState } from "react";
import { PrivateContext } from "./PrivateContext";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.init";
const googleProvider = new GoogleAuthProvider();
const PrivateContextProvider = ({ children }) => {
 const [user,setUser]=useState(null)
 const [loading,setLoading]=useState(true)
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutUser=()=>{
    setLoading(true)
    signOut(auth)
  }
  useEffect(() => {
    const userDetails = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      userDetails;
    };
  }, []);
  const information = {
    googleLogin,
    createUser,
    loginUser,
    user,
    logoutUser,
    loading
  };
  return <PrivateContext value={information}>{children}</PrivateContext>;
};

export default PrivateContextProvider;
