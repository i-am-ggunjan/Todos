import React, { useContext, useEffect, useRef, useState } from "react";
import { Store } from "../Store/TodoStore";

const Form = () => {
  const data = useContext(Store);
  let [item, setItem] = useState();
  let [expense, setExpense] = useState();

  let itemRef = useRef();
  let expenseRef = useRef();
  // console.log(itemRef)

  useEffect(() => {
    data.setItemRefStore(itemRef);
    data.setExpenseRefStore(expenseRef);
  }, []);

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
          ref={itemRef}
        />
        <input
          type="text"
          placeholder="expense"
          onChange={(e) => {
            setExpense(e.target.value);
          }}
          ref={expenseRef}
        />

        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
