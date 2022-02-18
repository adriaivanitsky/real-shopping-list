import React from 'react';

export default function Item({ item, onDeleteItem }) {
  return (
    <>
      <input type="checkbox"></input>
      {item.text}
      <button onClick={() => onDeleteItem(item.id)}>delete</button>
    </>
  );
}
