// item list, add item , edit, delete
// reducer goes in here
import { useReducer, useState } from 'react';
import AddItem from '../components/AddItem';
import GroceryList from '../components/GroceryList';

export default function Shopping() {
  return (
    <>
      <h1>grocery list</h1>
      <AddItem />
      <GroceryList />
    </>
  );
}
