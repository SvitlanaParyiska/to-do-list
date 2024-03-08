import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AssignmentIcon from '@mui/icons-material/Assignment'

function Header() {
  return (
    <header>
      <Box sx={{ 'flexGrow': 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                'flexGrow': 1,
                'display': { 'xs': 'none', 'sm': 'block' },
              }}
            >
              TODO
            </Typography>
            <AssignmentIcon />
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
}

export default Header
