import React from "react";
import Form from "./components/Form";
import TodoStore from "./Store/TodoStore";
import Display from "./components/Display";

const App = () => {
  return (
    <TodoStore>
      <Form />
      <Display />
    </TodoStore>
  );
};

export default App;
