// import { MdClose } from "react-icons/md";
import css from "./Task.module.css";

import { useDispatch } from "react-redux";
// 2. Імпортуємо фабрику екшену
import { deleteTask, toggleCompleted } from "../../redux/actions";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  // 4. Викликаємо фабрику екшену та передаємо ідентифікатор завдання
  // 5. Відправляємо результат - екшен видалення завдання
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  const handleToggle = () => {
    dispatch(toggleCompleted(task.id));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button type="button" onClick={handleToggle}>
        Delete
      </button>
    </div>
  );
};
