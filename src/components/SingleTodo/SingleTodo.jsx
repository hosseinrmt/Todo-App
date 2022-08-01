import styles from "./SingleTodo.module.css";
import { FaTrashAlt, FaEdit, FaRegCheckCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const SingleTodo = ({
  todo,
  checkHandler,
  deleteHandler,
  isEditingHandler,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  return (
    <div
      className={todo.isCompleted ? styles.completed : styles.Todo}
      key={todo.id}
    >
      {isEditing ? (
        <input
          className={styles.isEditing}
          type="text"
          onChange={isEditingHandler}
          value={todo.text}
          ref={inputRef}
        />
      ) : (
        <p>{todo.text}</p>
      )}
      <div>
        <button
          className={styles.editBtn}
          type="button"
          onClick={() => setIsEditing(!isEditing)}
        >
          <FaEdit />
        </button>

        <button
          className={styles.deleteBtn}
          type="button"
          onClick={deleteHandler}
        >
          <FaTrashAlt />
        </button>

        <button
          onClick={checkHandler}
          className={styles.checkBtn}
          type="button"
        >
          <FaRegCheckCircle />
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
