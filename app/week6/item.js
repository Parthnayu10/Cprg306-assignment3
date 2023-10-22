import React from 'react';

function Item({ item }) {
  return (
    <li className="border p-2 mb-2">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg">{item.name}</h3>
          <p className="text-sm text-gray-600">{`Quantity: ${item.quantity}, Category: ${item.category}`}</p>
        </div>
      </div>
    </li>
  );
}

export default Item;
