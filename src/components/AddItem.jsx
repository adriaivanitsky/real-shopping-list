import React from 'react';
import { useItems } from '../context/ItemsContext';
import { useState } from 'react';

export default function AddItem() {
  const { handleAddItem } = useItems();
  const [text, setText] = useState('');
  return (
    <form>
      <label>
        <input
          value={text}
          type="text"
          placeholder="grocery item"
          onChange={(e) => setText(e.target.value)}
        ></input>
      </label>
      <button
        onClick={(e) => {
          handleAddItem(e, text);
          setText('');
        }}
      >
        add item
      </button>
    </form>
  );
}
