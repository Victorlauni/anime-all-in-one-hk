import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './component/Navbar.js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { GlobalContext } from './globalContext';
import Bangumi from './component/Bangumi.js';

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
        <Bangumi/>
      </GlobalContext.Provider>
    </ThemeProvider>
  )
  
}

export default App;
