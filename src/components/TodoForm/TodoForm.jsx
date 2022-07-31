import { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ addTodoHandler }) => {
  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Please enter a todo");
      return;
    }

    addTodoHandler(input);
    setInput("");
  };

  return (
    <form className={styles.TodoForm} onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="I have to do..."
        value={input}
        onChange={(event) => changeHandler(event)}
      />
      <button type="submit">add Todo</button>
    </form>
  );
};

export default TodoForm;
