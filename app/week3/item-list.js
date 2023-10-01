// item-list.js

import React from 'react';
import Item from './item'; // Make sure to import your Item component

// Sample item data
const item = [
  {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  },
  {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  },
  {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  },
  {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  },
  {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  },
  {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  },
  {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  },
  {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  },
  {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  },
  {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  },
  {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  },
  {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  },
];

function ItemList() {
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {item.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
