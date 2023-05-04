import React, { useContext, useState } from "react";
import { Store } from "../Store/TodoStore";

const Form = () => {
  const data = useContext(Store);
  let [item, setItem] = useState();
  let [expense, setExpense] = useState();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          data.handleCreate(item, Number(expense));
        }}
      >
        <input
          type="text"
          placeholder="item"
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          type="text"
          placeholder="expense"
          onChange={(e) => {
            setExpense(e.target.value);
          }}
        />

        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
