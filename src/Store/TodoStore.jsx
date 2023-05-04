import { createContext, useEffect, useState } from "react";

const Store = createContext([{}]);

export { Store };

const TodoStore = (props) => {
  let [todo, setTodo] = useState([
    {
      id: 1,
      title: "No title",
      description: "No Description",
    },
  ]);

  let [titleRefStore, setTitleRefStore] = useState();
  let [descriptionRefStore, setDescriptionRefStore] = useState();

  let [id, setId] = useState(1);

  useEffect(() => {
    setId(id + 1);
  }, [todo]);

  const handleCreate = (para1, para2) => {
    setTodo([...todo, { id: id, title: para1, description: para2 }]);
    titleRefStore.current.value = "";
    descriptionRefStore.current.value = "";
  };

  const handleUpdate = (id) => {
    todo.map((value) => {
      if (value.id === id) {
        titleRefStore.current.value = value.title;
        descriptionRefStore.current.value = value.description;
        setTodo(todo.filter((value) => id !== value.id));
      }
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
        setTitleRefStore,
        setDescriptionRefStore,
      }}
    >
      {props.children}
    </Store.Provider>
  );
};

export default TodoStore;
