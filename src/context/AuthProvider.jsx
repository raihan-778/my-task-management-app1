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

const AuthProvider = ({ children }) => {
  const Auth = getAuth(app);
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
  // SignOut

  const logOut = () => {
    signOut(Auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currenUser) => {
      if (currenUser) {
        console.log(currenUser);
        setUser(currenUser);
        setIsLoading(false);
      }
    });
    return unsubscribe();
  }, []);

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
