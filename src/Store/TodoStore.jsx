import { createContext, useEffect, useState } from "react";

const Store = createContext([{}]);

export { Store };

const TodoStore = (props) => {
  let [todo, setTodo] = useState([
    {
      id: 1,
      item: "No Item",
      expense: 0,
    },
  ]);

  //   console.log(todo);

  let [id, setId] = useState(1);

  useEffect(() => {
    setId(id + 1);
  }, [todo]);

  const handleCreate = (para1, para2) => {
    setTodo([...todo, { id: id, item: para1, expense: para2 }]);
  };

  

  const handleUpdate = () => {};
  const handleDelete = (para1) => {
    setTodo(
      todo.filter((value) => {
        return para1 !== value.id;
      })
    );
  };

  return (
    <Store.Provider value={{ todo, handleCreate, handleUpdate, handleDelete }}>
      {props.children}
    </Store.Provider>
  );
};

export default TodoStore;
