"use client";
import React, { useEffect } from 'react';
import { useUserAuth } from './_utils/auth-context';

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Function to handle GitHub sign-in
  const handleGitHubSignIn = async () => {
    await gitHubSignIn();
  };

  useEffect(() => {
    // Your code that uses user, gitHubSignIn, or firebaseSignOut can go here.
  }, []); // Ensure this code runs on the client-side

  const shoppingListStyle = {
    fontSize: '2rem', // Adjust the size as needed
    fontWeight: '600', // Semi-bold
  };

  return (
    <div>
      <p style={shoppingListStyle}>ShoppingList APP {user ? user.displayName : ''}</p>
      <button onClick={handleGitHubSignIn}>Sign in with GitHub</button>
    </div>
  );
};

export default Page;
