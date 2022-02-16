import React from 'react';

export default function AddItem() {
  return (
    <form>
      <label>
        <input type="text" placeholder="grocery item"></input>
      </label>
      <button>add item</button>
    </form>
  );
}
