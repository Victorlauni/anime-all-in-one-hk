import { AppBar, Button, makeStyles, Menu, MenuItem, StylesProvider, Toolbar, useTheme, withStyles } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { getAllSession } from '../api/common'
import { GlobalContext } from '../globalContext'

const useStyles = makeStyles(theme => ({
  toolbarRoot: {
    gap: theme.spacing(1)
  }
}))

export default function Navbar(props) {
  const {changeSession} = props;
  const [listOfSession, setListOfSession] = useState([])
  const [archEl, setArchEl] = useState(null)
  const theme = useTheme()
  const classes = useStyles(theme);
  const handleClick = (evt) => {
    setArchEl(evt.currentTarget)
  }
  const handleClose = () => {
    setArchEl(null)
  }
  useEffect(() => {
    getAllSession().then((res) => setListOfSession(res))
  }, [])
  useEffect(() => changeSession(listOfSession[0]), [listOfSession])
  return (
    <GlobalContext.Consumer>
      {val => <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbarRoot}>
          <div style={{flexGrow: 1}}/>
          <Button onClick={handleClick}>
            {val.selectedSession}
          </Button>
          <Menu anchorEl={archEl} onClose={handleClose} open={archEl}>
            {
              listOfSession.map(val => <MenuItem>{val}</MenuItem>)
            }
          </Menu>
          <Button variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>}
    </GlobalContext.Consumer>

    
  )
}
