import { useState } from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="item-input"
        value={value}
        placeholder="What are you doing today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn">
        Add Task
      </button>
    </form>
  );
};

export default Form;
