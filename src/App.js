import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './component/Navbar.js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { GlobalContext } from './globalContext';
import BangumiList from './page/BangumiList.js';
import './style/global.scss'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Bangumi from './component/Bangumi';
import BangumiDetail from './page/BangumiDetail';

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
        <BrowserRouter>
          <Navbar changeSession={setSession}/>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/bangumi"/>
            </Route>
            <Route path="/bangumi/:bangumiId">
              <BangumiDetail/>
            </Route>
            <Route path="/bangumi">
              <BangumiList session={session}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </GlobalContext.Provider>
    </ThemeProvider>
  )
  
}

export default App;
