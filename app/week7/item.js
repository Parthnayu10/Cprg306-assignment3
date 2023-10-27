import React, { useState } from 'react';
import Item from './item';

function ShoppingList() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        <Item
          name="Bananas"
          quantity="6"
          category="Produce"
          onSelect={() => handleItemClick("Bananas")}
        />
        <Item
          name="Bread"
          quantity="2"
          category="Bakery"
          onSelect={() => handleItemClick("Bread")}
        />
        {/* Add more items with onSelect handlers */}
      </ul>

      {selectedItem && (
        <div>
          <h2>Selected Item: {selectedItem}</h2>
          {/* Render additional details for the selected item */}
        </div>
      )}
    </div>
  );
}

export default ShoppingList;
