import { AppBar, Box, Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <Box sx={{flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variants='h6' component='div' sx={{flexGrow: 1}} align='left'>
              <Link to="/" style={{color:'white',textDecoration:'none'}}>
                Welcome to react
              </Link>
            </Typography>
            <Button color="inherit">
              <Link to='/add' style={{color:'white',textDecoration:'none'}}>NewStudents</Link>
            </Button>
            <Button color="inherit"><Link to="/" style={{color:'white',textDecoration:'none'}}>View</Link></Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Nav
