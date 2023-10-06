"use client";
import React, { useState } from 'react';

function NewItem() {
  // Initialize state for the form fields
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Display an alert with the current state of the fields
    alert(`Item Name: ${itemName}\nQuantity: ${quantity}\nCategory: ${category}`);

    // Reset the form fields to their initial state
    setItemName('');
    setQuantity(1);
    setCategory('');
  };

  // Define the list of categories
  const categories = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other"
  ];

  return (
    <div className="flex justify-center items-start h-screen bg-light-blue"> {/* Light and attractive background color */}
      <div className="bg-light-black p-4 rounded-md shadow-md w-1/3"> {/* Smaller width */}
        <h2 className="text-2xl font-semibold mb-4 text-center">Add a New Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="itemName" className="block text-gray-700">Item Name:</label>
            <input
              type="text"
              id="itemName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-700">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              min="1"
              max="99"
              required
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select a category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="text-center mb-4">
            <button type="submit" className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewItem;
