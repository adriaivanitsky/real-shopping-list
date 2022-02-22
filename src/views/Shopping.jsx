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

  function itemsReducer(items, action) {
    switch (action.type) {
      case 'added': {
        return [...items, { id: action.id, text: action.text, done: false }];
      }
      case 'changed': {
        return items.map((item) => {
          if (item.id === action.task.id) {
            return action.task;
          }
          return item;
        });
      }
      case 'deleted': {
        return items.filter((item) => item.id !== action.id);
      }
      default: {
        throw Error(`Unknown action: ${action.type}`);
      }
    }
  }
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const handleAddItem = (e, text) => {
    e.preventDefault();
    dispatch({
      type: 'added',
      id: items.length + 1,
      text,
    });
  };

  const handleChangeItem = (task) => {
    dispatch({
      type: 'changed',
      task,
    });
  };

  const handleDeleteItem = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };

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
