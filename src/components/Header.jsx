import React from 'react';
import { useItems } from '../context/ItemsContext';

export default function Header() {
  const { items, handleClear } = useItems();

  return (
    <div>
      <span>you have {items.length} items in your cart</span>
      <button onClick={handleClear}>clear list</button>
    </div>
  );
}
