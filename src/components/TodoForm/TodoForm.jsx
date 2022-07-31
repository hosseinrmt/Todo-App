import { useEffect, useRef, useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ addTodoHandler }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
        ref={inputRef}
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
