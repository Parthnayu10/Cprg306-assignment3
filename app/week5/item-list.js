"use client";
import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [groupCategory, setGroupCategory] = useState(false);

  const sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  const handleSortByName = () => {
    setSortBy("name");
    setGroupCategory(false);
  };

  const handleSortByCategory = () => {
    setSortBy("category");
    setGroupCategory(false);
  };

  const handleGroupCategory = () => {
    setSortBy("category");
    setGroupCategory(true);
  };

  const groupedItems = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="bg-sky-blue">
      <div className="bg-orange rounded-lg p-4 mb-4">
        <div className="space-x-2">
          <button
            onClick={handleSortByName}
            className={`px-4 py-2 rounded ${
              sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            Sort by Name
          </button>
          <button
            onClick={handleSortByCategory}
            className={`px-4 py-2 rounded ${
              sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            Sort by Category
          </button>
          <button
            onClick={handleGroupCategory}
            className={`px-4 py-2 rounded ${
              groupCategory ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            Group by Category
          </button>
        </div>
      </div>
      <ul>
        {groupCategory
          ? Object.keys(groupedItems).map((category) => (
              <div key={category}>
                <h2 className="text-lg text-gray-800 font-semibold m-2">
                  {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitalize the category */}
                </h2>
                {groupedItems[category].map((item) => (
                  <Item key={item.id} item={item} />
                ))}
              </div>
            ))
          : sortedItems.map((item) => (
              <Item key={item.id} item={item} />
            ))}
      </ul>
    </div>
  );
}

export default ItemList;
