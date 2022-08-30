import React from "react";
import { MdSend } from "react-icons/md";

function Form({ ...formProps }) {
  const { handleSubmit, handleAmount, handleCharge, charge, amount, edit } =
    formProps;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            value={charge}
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="charge"
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="amount"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "Edit" : "Submit"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
}

export default Form;
