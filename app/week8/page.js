"use client";
import React from 'react';
import { useUserAuth } from '../week8/_utils/auth-context';


const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Function to handle GitHub sign-in
  const handleGitHubSignIn = async () => {
    await gitHubSignIn();
  };

  const shoppingListStyle = {
    fontSize: '2rem', // Adjust the size as needed
    fontWeight: '600', // Semi-bold
  };

  const handleLogOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      <p style={shoppingListStyle}>ShoppingList APP {user ? user.displayName : ''}</p>
      {user ? (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogOut}>Log Out</button>
          <a href="/week8/shopping-list">Go to Shopping List</a>
        </>
      ) : (
        <button onClick={handleGitHubSignIn}>Sign in with GitHub</button>
      )}
    </div>
  );
};

export default LandingPage;
