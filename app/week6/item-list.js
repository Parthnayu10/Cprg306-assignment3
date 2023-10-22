import React, { useState } from 'react';

function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('Name');

  // Helper function to sort items by name or category
  const sortItems = () => {
    if (sortBy === 'Name') {
      return items.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'Category') {
      return items.slice().sort((a, b) => a.category.localeCompare(b.category));
    }
    return items;
  };

  const sortedItems = sortItems();

  return (
    <div>
      <div className="mb-4 flex items-center">
        <span className="mr-2">Sort by:</span>
        <button
          onClick={() => setSortBy('Name')}
          className={`mr-2 ${
            sortBy === 'Name' ? 'text-blue-500 font-semibold' : ''
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('Category')}
          className={`${
            sortBy === 'Category' ? 'text-blue-500 font-semibold' : ''
          }`}
        >
          Category
        </button>
      </div>
      <div className="shopping-list-container" style={{ maxHeight: '300px', overflowY: 'auto' }}>
        <ul>
          {sortedItems.map((item) => (
            <li key={item.id}>
              Item Name: {item.name.toLowerCase()}<br />
              Quantity: {item.quantity}, Category: {item.category.toLowerCase()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemList;
