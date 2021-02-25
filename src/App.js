import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyles.js";
import { Home } from "./Routes/Home/Home"
import { Nav } from "./Components/Nav/Nav"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const theme = {
  primary_color: "#FC6621",
  secundary_color: "#00416D",
  ternary_color: "#fff",
  font_color: "#333",
  font_padrao: "Roboto, sans-serif"
};


function App() {

  const [isOpen, setIsOpen] = useState(false);

  // retorna o tamanho da tela
  const size = useWindowSize();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }
  // retorna o tamanho da tela

  const AuthenticatedRoutes = () => {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact>
          <Home isOpen={isOpen} />
        </Route>
      </Router>
    )
  }

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Nav isOpen={isOpen} setIsOpen={setIsOpen} sizeScreen={size.width} />

          <Switch>
            <Route component={AuthenticatedRoutes} />
          </Switch>

        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;