import React, { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const Itemswrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  return (
    <div className="item-wrapper">
      <Form addTodo={addTodo} />
    </div>
  );
};

export default Itemswrapper;
