"use client";
import React, { useEffect, useState } from 'react';
import { useUserAuth } from '../week8/_utils/auth-context';

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [popupClosed, setPopupClosed] = useState(false);

  // Function to handle GitHub sign-in
  const handleGitHubSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        // Handle the popup closed by the user
        setPopupClosed(true);
      } else {
        // Handle other authentication errors here
        console.error(error);
      }
    }
  };

  useEffect(() => {
    // Your code that uses user, gitHubSignIn, or firebaseSignOut can go here.
  }, []); // Ensure this code runs on the client-side

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
      {popupClosed && <p>The sign-in popup was closed by the user.</p>}
      {user ? (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogOut}>Log Out</button>
          <a href="/shopping-list">Go to Shopping List</a>
        </>
      ) : (
        <button onClick={handleGitHubSignIn}>Sign in with GitHub</button>
      )}
    </div>
  );
};

export default LandingPage;
