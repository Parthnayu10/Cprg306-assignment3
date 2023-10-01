
import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-white p-4 my-2 rounded-md shadow">
      <div className="font-bold">{name}</div>
      <div className="text-gray-600">Quantity: {quantity}</div>
      <div className="text-gray-600">Category: {category}</div>
    </li>
  );
};

export default Item;
