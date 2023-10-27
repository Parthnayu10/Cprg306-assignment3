// Import necessary hooks and begin component definition
// Make sure you're using the "use client" directive.

import React, { useState, useEffect } from 'react';

function MealIdeas({ ingredient }) {
  // Define a state variable to store meal ideas
  const [meals, setMeals] = useState([]);

  // Define API Fetching Function
  const fetchMealIdeas = async (ingredient) => {
    try {
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data.meals || []; 
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  // Define Load Function
  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  // Use the useEffect Hook
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for {ingredient}:</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}

export default MealIdeas;
