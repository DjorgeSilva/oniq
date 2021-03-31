import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyles.js";
import { Home } from "./Routes/Home/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const theme = {
  primary_color: "#FC6621",
  secundary_color: "#00416D",
  ternary_color: "#fff",
  font_color: "#333",
  font_padrao: "Roboto, sans-serif"
};


function App() {


  const AuthenticatedRoutes = () => {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact>
          <Home />
        </Route>
      </Router >
    )
  }

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route component={AuthenticatedRoutes} />
          </Switch>
          
        </ThemeProvider>
      </Router>


    </>
  );
}

export default App;