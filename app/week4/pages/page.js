/** @jsxImportSource @react/jsx-runtime */
import React from 'react';

// This pragma comment marks this component as a Client Component
/** @jsxImportSource @react/jsx-runtime */

// Import the component you want to use in ParentComponent
import NewItem from '../components/new-item'; // Ensure you have the correct relative path

function ParentComponent() {
  return (
    <div>
      {/* Other components */}
      <NewItem />
    </div>
  );
}

export default ParentComponent;
