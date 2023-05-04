import React, { useContext } from "react";
import { Store } from "../Store/TodoStore";

const Display = () => {
  const data = useContext(Store);

  return (
    <>
      {data.todo.map((value) => {
        return (
          <div key={value.id}>
            <p>{value.item}</p>
            <p>{value.expense}</p>
            <button onClick={() => data.handleDelete(value.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default Display;
