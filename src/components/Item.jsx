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
          aria-label={`editInput ${item.text}`}
          defaultValue={item.text}
          onChange={(e) => {
            handleChangeItem({ ...item, text: e.target.value });
          }}
        />
        <button aria-label={`save ${item.text}`} onClick={() => setEdit(false)}>
          save
        </button>
      </>
    );
  } else {
    itemContent = (
      <>
        <span>{item.text}</span>
        <button aria-label={`edit ${item.text}`} onClick={() => setEdit(true)}>
          edit
        </button>
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
