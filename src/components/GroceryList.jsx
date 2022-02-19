import React from 'react';
import './GroceryList.css';
import Item from './Item';

export default function GroceryList({ items, onDeleteItem, onChangeItem }) {
  return (
    <div>
      {items.map((item) => (
        <label key={item.id}>
          <Item
            onDeleteItem={onDeleteItem}
            item={item}
            onChangeItem={onChangeItem}
          />
        </label>
      ))}
    </div>
  );
}

//renders list of groceries
//presentational component of shoppping.jsx
