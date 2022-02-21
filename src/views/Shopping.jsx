// item list, add item , edit, delete
// reducer goes in here
import { useReducer, useState } from 'react';
import AddItem from '../components/AddItem';
import GroceryList from '../components/GroceryList';

const initialItems = [
  { id: 0, text: 'spinach', done: false },
  { id: 1, text: 'oats', done: false },
  { id: 2, text: 'almonds', done: false },
];

export default function Shopping() {
  const [text, setText] = useState('');

  return (
    <>
      <h1>grocery list</h1>
      <AddItem handleAddItem={handleAddItem} text={text} setText={setText} />
      <GroceryList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
    </>
  );
}
