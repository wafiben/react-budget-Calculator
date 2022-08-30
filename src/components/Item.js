import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

function Item({ expence,deleteItem,handleEdit }) {

  const { id, charge, amount } = expence;
  const handleDelete=()=>{
    deleteItem(id)
  }
  const editItem=()=>{
     handleEdit(id) 
  }
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
        <button className="edit-btn" aria-label="edit button" onClick={editItem}>
          <MdEdit />
        </button>
        <button className="clear-btn" aria-label="delete button" onClick={handleDelete}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
}

export default Item;
