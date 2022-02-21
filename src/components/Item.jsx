import { useState } from 'react';
import { useItems } from '../context/ItemsContext';
// import itemReducer from '../views/Shopping';

export default function Item({ item }) {
  const [edit, setEdit] = useState(false);
  const { handleDeleteItem, handleChangeItem } = useItems();
  let itemContent;

  if (edit) {
    itemContent = (
      <>
        <input
          defaultValue={item.text}
          onChange={(e) => {
            handleChangeItem({ ...item, text: e.target.value });
          }}
        />
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
      <button onClick={() => handleDeleteItem(item.id)}>delete</button>
    </>
  );
}
