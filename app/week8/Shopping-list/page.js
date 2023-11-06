"use client";
import React, { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../week8/_utils/auth-context';

function Page() {
  const { user } = useUserAuth();

  if (!user) {
    return <p>Please log in to access this page.</p>;
  }

  const [items, setItems] = useState([
    {
      id: "1h2GJKH12gkHG31h1H",
      name: "milk, 4 L 🥛",
      quantity: 1,
      category: "dairy"
    },
    {
      id: "2KJH3k2j3H1k2J3K1H",
      name: "bread 🍞",
      quantity: 2,
      category: "bakery"
    },
    {
      id: "3h2KJH3k2j3H1k2J3",
      name: "eggs, dozen 🥚",
      quantity: 2,
      category: "dairy"
    },
    {
      id: "4k2J3K1H2GJKH12gk",
      name: "bananas 🍌",
      quantity: 6,
      category: "produce"
    },
    {
      id: "5H1h1H2KJH3k2j3H",
      name: "broccoli 🥦",
      quantity: 3,
      category: "produce"
    },
    {
      id: "6H1k2J3K1H2GJKH1",
      name: "chicken breasts, 1 kg 🍗",
      quantity: 1,
      category: "meat"
    },
    {
      id: "7gkHG31h1H2KJH3k",
      name: "pasta sauce 🍝",
      quantity: 3,
      category: "canned goods"
    },
    {
      "id": "8j3H1k2J3K1H2GJK",
      "name": "spaghetti, 454 g 🍝",
      "quantity": 2,
      "category": "dry goods"
    },
    {
      id: "9H12gkHG31h1H2KJ",
      name: "toilet paper, 12 pack 🧻",
      quantity: 1,
      category: "household"
    },
    {
      id: "10H3k2j3H1k2J3K1",
      name: "paper towels, 6 pack",
      quantity: 1,
      category: "household"
    },
    {
      id: "11k2J3K1H2GJKH12",
      name: "dish soap 🍽️",
      quantity: 1,
      category: "household"
    },
    {
      id: "12GJKH12gkHG31h1",
      name: "hand soap 🧼",
      quantity: 4,
      category: "household"
    }
  ]);

  const [selectedItemName, setSelectedItemName] = useState('');
  const [meals, setMeals] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const itemNameParts = item.name.split(" ");
    if (itemNameParts.length > 0) {
      setSelectedItemName(itemNameParts[0]);
    }
  };

  useEffect(() => {
    if (selectedItemName) {
      fetchMealIdeas(selectedItemName);
    }
  }, [selectedItemName]);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
    }
  };

  return (
    <div className="flex flex-row justify-center items-start h-screen bg-light-blue">
      <div className="bg-small-box p-4 rounded-md shadow-md w-1/3">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add New Item</h2>
        <NewItem onAddItem={handleAddItem} />
      </div>
      <div className="bg-small-box p-4 rounded-md shadow-md w-1/3 ml-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Shopping List</h2>
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="bg-small-box p-4 rounded-md shadow-md w-1/3 ml-4">
        <h2 className="text-xl font-semibold mb-4">Selected Item:</h2>
        <p>{selectedItemName}</p>
      </div>
      <div className="bg-small-box p-4 rounded-md shadow-md w-1/3 ml-4">
        <h2 className="text-xl font-semibold mb-4">Meal Ideas:</h2>
        <MealIdeas ingredient={selectedItemName} meals={meals} />
      </div>
    </div>
  );
}

export default Page;
