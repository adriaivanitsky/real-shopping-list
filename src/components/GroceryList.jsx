import React from 'react';
import './GroceryList.css';
export default function GroceryList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <label key={item.id}>
          <input type="checkbox"></input>
          {item.text}
        </label>
      ))}
    </div>
  );
}

//renders list of groceries
//presentational component of shoppping.jsx
