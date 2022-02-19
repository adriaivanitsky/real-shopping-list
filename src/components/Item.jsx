import { useState } from 'react';

export default function Item({ item, onDeleteItem }) {
  const [edit, setEdit] = useState(false);
  let itemContent;

  if (edit) {
    itemContent = (
      <>
        <input value={item.text} />
        <button onClick={() => setEdit(false)}>save</button>
      </>
    );
  } else {
    itemContent = (
      <>
        <span>{item.text}</span>
        <button onClick={() => setEdit(true)}>edit</button>
      </>
    );
  }
  return (
    <>
      <input type="checkbox"></input>
      {itemContent}
      <button onClick={() => onDeleteItem(item.id)}>delete</button>
    </>
  );
}
