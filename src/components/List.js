import React from "react";
import Item from "./Item";
import { MdDelete } from "react-icons/md";

function List({ expenses, deleteItem, clearAllItem, handleEdit }) {
  return (
    <>
      <ul className="list">
        {expenses.map((expence) => (
          <Item
            key={expence.id}
            expence={expence}
            deleteItem={deleteItem}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearAllItem}>
          Clear expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
}

export default List;
