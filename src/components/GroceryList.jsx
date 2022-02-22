import React from 'react';
import './GroceryList.css';
import Item from './Item';
import { useItems } from '../context/ItemsContext';

export default function GroceryList() {
  const { items } = useItems();
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
}

//renders list of groceries
//presentational component of shoppping.jsx
