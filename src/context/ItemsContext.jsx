import { useContext, createContext, useReducer } from 'react';

const initialItems = [
  { id: 0, text: 'spinach', done: false },
  { id: 1, text: 'oats', done: false },
  { id: 2, text: 'almonds', done: false },
];

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
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
    <ItemsContext.Provider
      value={{ handleChangeItem, handleAddItem, handleDeleteItem, items }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemsContext);

  if (context === undefined) {
    throw new Error('useItems may not be used outside of ItemsProvider');
  }
  return context;
};
