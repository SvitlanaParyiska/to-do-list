import { useSelector } from "react-redux";
import { selectToDo } from "../../redux/selectors";
import { useEffect, useState } from "react";

function ToDoCounter() {
  const toDos = useSelector(selectToDo);
  const [count, setCount] = useState({ active: 0, completed: 0 });

  useEffect(() => {
    if (toDos.length > 0) {
      const total = toDos.reduce(
        (acc, toDo) => {
          if (toDo.completed) {
            acc.completed += 1;
          } else {
            acc.active += 1;
          }
          return acc;
        },
        { active: 0, completed: 0 }
      );
      setCount(total);
    } else {
      setCount({ active: 0, completed: 0 });
    }
  }, [toDos]);

  return (
    <div>
      <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
    </div>
  );
}

export default ToDoCounter;
