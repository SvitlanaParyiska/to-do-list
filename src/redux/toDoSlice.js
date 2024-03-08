/* eslint-disable unicorn/filename-case */
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = {
  'toDo': [],
  'filters': {
    'status': 'all',
  },
}

const toDoSlice = createSlice({
  'name': 'tasks',
  initialState,
  'reducers': {
    'addToDo': {
      reducer(state, action) {
        state.toDo.push(action.payload)
      },
      prepare(text) {
        return {
          'payload': {
            text,
            'id': nanoid(),
            'completed': false,
          },
        }
      },
    },
    deleteToDo(state, action) {
      const index = state.toDo.findIndex((task) => task.id === action.payload)
      state.toDo.splice(index, 1)
    },
    toggleCompleted(state, action) {
      for (const toDo of state.toDo) {
        if (toDo.id === action.payload) {
          toDo.completed = !toDo.completed
          break
        }
      }
    },
    setStatusFilter(state, action) {
      state.filters.status = action.payload
    },
  },
})

export const { addToDo, deleteToDo, toggleCompleted, setStatusFilter } =
  toDoSlice.actions
export const toDoReducer = toDoSlice.reducer
