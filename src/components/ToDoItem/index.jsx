import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch } from "react-redux";
import { deleteToDo, toggleCompleted } from "../../redux/toDoSlice";
import Notiflix from "notiflix";
import PropTypes from "prop-types";

function ToDoItem({ toDo }) {
  ToDoItem.propTypes = {
    toDo: {
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      completed: PropTypes.boolean.isRequired,
    },
  };

  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch(deleteToDo(toDo.id));
    Notiflix.Notify.success("Task was successful deleted!", {
      timeout: 2000,
    });
  };

  const handleToggle = () => dispatch(toggleCompleted(toDo.id));

  return (
    <div>
      <FormControlLabel
        control={<Checkbox checked={toDo.completed} onChange={handleToggle} />}
        label={toDo.text}
      />
      <IconButton color="primary" aria-label="delete" onClick={deleteTask}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default ToDoItem;
