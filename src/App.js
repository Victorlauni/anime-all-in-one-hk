import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './component/Navbar.js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { GlobalContext } from './globalContext';
import BangumiList from './component/BangumiList.js';
import './style/global.scss'

const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#FFF1"
      }
    }
  }
})

function App() {
  const [session, setSession] = useState("")
  return (
    <ThemeProvider theme={theme}>
      <GlobalContext.Provider value={{selectedSession: session}}>
        <Navbar changeSession={setSession}/>
        <BangumiList session={session}/>
      </GlobalContext.Provider>
    </ThemeProvider>
  )
  
}

export default App;
