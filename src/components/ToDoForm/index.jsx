import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/toDoSlice";
import { N } from "../../redux/constants";
import Notiflix from "notiflix";

function ToDoForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (task.length > N) {
      Notiflix.Notify.warning(`Length of task should be no more than ${N}!`, {
        timeout: 2000,
      });
      return;
    }

    try {
      await dispatch(addToDo(task));
      setTask("");
      form.reset();
      Notiflix.Notify.success("Task was successful added!", {
        timeout: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          p: 3,
          display: "flex",
          width: "80%",
          gap: "10px",

          boxShadow: "0 0 10px 1px grey",
          borderRadius: "5px",
          mb: 2,
          mt: 2,
        }}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="New task"
          variant="outlined"
          value={task}
          sx={{ width: "100%" }}
          onChange={(e) => setTask(e.target.value)}
        />

        <Button variant="contained" type="submit">
          Save
        </Button>
      </Box>
    </div>
  );
}

export default ToDoForm;
