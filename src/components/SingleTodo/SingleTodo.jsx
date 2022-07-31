import styles from "./SingleTodo.module.css";
import { FaTrashAlt, FaEdit, FaRegCheckCircle } from "react-icons/fa";

const SingleTodo = ({ todo, checkHandler }) => {
  return (
    <div
      className={todo.isCompleted ? styles.completed : styles.Todo}
      key={todo.id}
    >
      <p>{todo.text}</p>
      <div>
        <button className={styles.editBtn} type="button">
          <FaEdit />
        </button>

        <button className={styles.deleteBtn} type="button">
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
