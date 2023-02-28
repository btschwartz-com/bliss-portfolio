import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import NavBarWithRouter from "../components/NavBar";
import GlobalStyles from './GlobalStyles';
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {


  return (
      <>
        <GlobalStyles />
        <Router basename={process.env.PUBLIC_URL}>
          <ScrollToTop>
            <NavBarWithRouter />
            <AppRoutes />
          </ScrollToTop>
        </Router>

    </>
  );
}

