"use client";
import { getShoppingList, addItem } from "../_services/shopping-list-service";
import React, { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context';

function Page() {
  const { user } = useUserAuth();

  if (!user) {
    return <p>Please log in to access this page.</p>;
  }

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  const [meals, setMeals] = useState([]);

  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(user.uid, newItem);
      newItem.id = newItemId;
      setItems([...items, newItem]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
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

  useEffect(() => {
    const loadItems = async () => {
      try {
        const shoppingList = await getShoppingList(user.uid);
        setItems(shoppingList);
      } catch (error) {
        console.error("Error loading items:", error);
      }
    };

    loadItems();
  }, [user.uid]);

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
