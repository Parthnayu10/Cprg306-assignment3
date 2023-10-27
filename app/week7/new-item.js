"use client";
import React, { useState } from 'react';

function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItem(newItem);

    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label>
            Item Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-4">
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              min="1"
              max="100"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </label>
        </div>
        <div className="mb-4">
          <label>
            Category:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover-bg-blue-600 focus-outline-none focus-ring-2 focus-ring-blue-500 focus-ring-opacity-50 transition duration-300 ease-in-out">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default NewItem;
