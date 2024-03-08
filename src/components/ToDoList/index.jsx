import { useSelector } from "react-redux";
import { selectToDo, selectFilter } from "../../redux/selectors";
import ToDoItem from "../ToDoItem";
import { nanoid } from "nanoid";

const getVisibleTasks = (toDos, statusFilter) => {
  switch (statusFilter) {
    case "Active":
      return toDos.filter((toDo) => !toDo.completed);
    case "Completed":
      return toDos.filter((toDo) => toDo.completed);
    default:
      return toDos;
  }
};

function ToDoList() {
  const toDos = useSelector(selectToDo);
  const statusFilter = useSelector(selectFilter);
  const visibleTasks = getVisibleTasks(toDos, statusFilter);

  return (
    <div>
      {toDos.length > 0 ? (
        <h3>Tasks list:</h3>
      ) : (
        <p>Your tasks ist is empty... Please add task.</p>
      )}
      <ul>
        {visibleTasks.length > 0 &&
          visibleTasks.map((item) => <ToDoItem key={nanoid()} toDo={item} />)}
      </ul>
    </div>
  );
}

export default ToDoList;
