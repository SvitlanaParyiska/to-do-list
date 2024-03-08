import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useDispatch } from 'react-redux'
import { setStatusFilter } from '../../redux/toDoSlice'

function Filter() {
  const dispatch = useDispatch()

  const filterChange = (filter) => {
    dispatch(setStatusFilter(filter))
  }

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={() => filterChange('All')}>
        All
      </Button>
      <Button variant="contained" onClick={() => filterChange('Active')}>
        Active
      </Button>
      <Button variant="contained" onClick={() => filterChange('Completed')}>
        Completed
      </Button>
    </Stack>
  )
}

export default Filter
