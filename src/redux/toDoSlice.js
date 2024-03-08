import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  toDo: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
  filters: {
    status: "all",
  },
};

const toDoSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addToDo: {
      reducer(state, action) {
        state.toDo.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteToDo(state, action) {
      const index = state.toDo.findIndex((task) => task.id === action.payload);
      state.toDo.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const toDo of state.toDo) {
        if (toDo.id === action.payload) {
          toDo.completed = !toDo.completed;
          break;
        }
      }
    },
    setStatusFilter(state, action) {
      state.filters.status = action.payload;
    },
  },
});

export const { addToDo, deleteToDo, toggleCompleted, setStatusFilter } =
  toDoSlice.actions;
export const toDoReducer = toDoSlice.reducer;
