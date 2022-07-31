import SingleTodo from "../SingleTodo/SingleTodo";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, checkHandler }) => {
  return (
    <div className={styles.TodoList}>
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          checkHandler={() => checkHandler(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
