/* eslint-disable comma-dangle */
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../../redux/toDoSlice'
import { Numb } from '../../redux/constants'
import Notiflix from 'notiflix'

function ToDoForm() {
  const [task, setTask] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (task.length > Numb) {
      Notiflix.Notify.warning(
        `Length of task should be no more than ${Numb}!`,
        {
          'timeout': 2000,
        }
      )
      return
    }
    try {
      await dispatch(addToDo(task))
      setTask('')
      Notiflix.Notify.success('Task was successful added!', {
        'timeout': 2000,
      })
    } catch {}
  }

  return (
    <div
      style={{
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
      }}
    >
      <Box
        component="form"
        sx={{
          'p': 3,
          'display': 'flex',
          'width': '80%',
          'gap': '10px',

          'boxShadow': '0 0 10px 1px grey',
          'borderRadius': '5px',
          'mb': 2,
          'mt': 2,
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
          sx={{ 'width': '100%' }}
          onChange={(event) => setTask(event.target.value)}
        />

        <Button variant="contained" type="submit">
          Save
        </Button>
      </Box>
    </div>
  )
}

export default ToDoForm
