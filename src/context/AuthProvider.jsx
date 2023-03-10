import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();
const Auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //signUP with email and password

  const signUp = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  //sign in with email and password

  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };
  //sign in with google

  const googleSignUp = (provider) => {
    setIsLoading(true);
    return signInWithPopup(Auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
      }
      setIsLoading(false);
    });
    return unsubscribe();
  }, [user]);

  // SignOut

  const logOut = () => {
    return signOut(Auth);
  };
  const authInfo = {
    signUp,
    login,
    logOut,
    isLoading,
    setIsLoading,
    user,
    googleSignUp,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
