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

  let [itemRefStore, setItemRefStore] = useState();
  let [expenseRefStore, setExpenseRefStore] = useState();

  let [id, setId] = useState(1);

  useEffect(() => {
    setId(id + 1);
  }, [todo]);

  const handleCreate = (para1, para2) => {
    setTodo([...todo, { id: id, item: para1, expense: para2 }]);
    itemRefStore.current.value = "";
    expenseRefStore.current.value = "";
  };

  const handleUpdate = (id) => {
    todo.map((value) => {
      if (value.id === id) {
        itemRefStore.current.value = value.item;
        expenseRefStore.current.value = value.expense;
        setTodo(todo.filter((value) => id !== value.id));
      }
      console.log(todo);
    });
  };

  const handleDelete = (para1) => {
    setTodo(
      todo.filter((value) => {
        return para1 !== value.id;
      })
    );
  };

  return (
    <Store.Provider
      value={{
        todo,
        handleCreate,
        handleUpdate,
        handleDelete,
        setItemRefStore,
        setExpenseRefStore,
      }}
    >
      {props.children}
    </Store.Provider>
  );
};

export default TodoStore;
