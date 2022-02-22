import React from 'react';

export default function AddItem({ handleAddItem, text, setText }) {
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
      <button onClick={(e) => handleAddItem(e, text)}>add item</button>
    </form>
  );
}
