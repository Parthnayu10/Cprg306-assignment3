"use client";
import React, { useEffect, useState } from 'react';
import { useUserAuth } from '../week10/_utils/auth-context';

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
    fontSize: '2rem',
    fontWeight: '600',
  };

  const handleLogOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      <p style={shoppingListStyle}>Shopping List App</p>
      {popupClosed && <p>The sign-in popup was closed by the user.</p>}
      {user ? (
        <div>
          <p>
            Signed in as {user.email}
          </p>
          <button onClick={handleLogOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button onClick={handleGitHubSignIn}>Sign in with GitHub</button>
        </div>
      )}
      {user ? (
        <div>
          <a href="/shopping-list">Continue with Shopping List</a>
        </div>
      ) : null}
    </div>
  );
};

export default LandingPage;
