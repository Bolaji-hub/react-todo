import React, { useState } from "react";
import Form from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Items from "./Todo";
import EditItemForm from "./EditTodoForm";
import useLocalStorage from "../Hooks/useLocalStorage";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useLocalStorage("my_todos", []);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>What Do You Wanna Do Today!</h1>
      <Form addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditItemForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Items
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
