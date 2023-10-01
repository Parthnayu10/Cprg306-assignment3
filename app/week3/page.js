

import React from 'react';
import ItemList from './item-list'; // Import the ItemList component

const Page = () => {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1> {/* Shopping List header */}
      <ItemList /> {/* Render the ItemList component */}
    </main>
  );
};

export default Page;
