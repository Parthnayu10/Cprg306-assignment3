import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getShoppingList = async (userId) => {
  const items = [];

  try {
    const shoppingListRef = collection(db, "users", userId, "items");
    const querySnapshot = await getDocs(query(shoppingListRef));

    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, data: doc.data() });
    });
  } catch (error) {
    console.error("Error getting shopping list:", error);
  }

  return items;
};

export const addItem = async (userId, item) => {
  try {
    const shoppingListRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(shoppingListRef, item);
    return docRef.id; // Return the ID of the newly created document
  } catch (error) {
    console.error("Error adding item:", error);
    return null; // Handle the error as needed in your application
  }
};
