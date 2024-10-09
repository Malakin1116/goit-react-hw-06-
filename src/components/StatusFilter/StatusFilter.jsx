import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";

import { useSelector, useDispatch } from "react-redux";
// 2. Імпортуємо фабрику екшену
import { setStatusFilter } from "../../redux/actions";

export const StatusFilter = () => {
  // 2. Отримуємо значення фільтра із стану Redux
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);

  // 4. Викликаємо фабрику екшену та передаємо значення фільтра
  // 5. Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button onClick={() => handleFilterChange("all")}>All</Button>
      <Button onClick={() => handleFilterChange("active")}>Active</Button>
      <Button onClick={() => handleFilterChange("completed")}>Completed</Button>
    </div>
  );
};
