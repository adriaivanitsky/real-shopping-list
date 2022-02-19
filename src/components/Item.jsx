import { useState } from 'react';
// import itemReducer from '../views/Shopping';

export default function Item({ item, onDeleteItem, onChangeItem }) {
  const [edit, setEdit] = useState(false);
  let itemContent;

  if (edit) {
    itemContent = (
      <>
        <input
          defaultValue={item.text}
          onChange={(e) => {
            onChangeItem({ ...{ item, text: e.target.value } });
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
      <button onClick={() => onDeleteItem(item.id)}>delete</button>
    </>
  );
}
