"use client"; // This comment is not a recognized directive, you can remove it.

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";

// Create the AuthContext
const AuthContext = createContext();

// AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function for GitHub sign-in
  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Function for signing out
  const firebaseSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    return () => unsubscribe(); // Unsubscribe when the component unmounts
  }, []); // Pass an empty dependency array to run the effect once

  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for accessing user and auth functions
export const useUserAuth = () => {
  return useContext(AuthContext);
};
