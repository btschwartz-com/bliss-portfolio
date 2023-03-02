import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import NavBarWithRouter from "../components/NavBar";
import GlobalStyles from '../styles/GlobalStyles';
import "../styles/App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading &&
    (<>
        <GlobalStyles />
        <Router basename={process.env.PUBLIC_URL}>
          <ScrollToTop>
            <NavBarWithRouter />
            <br/>
            <AppRoutes />
          </ScrollToTop>
        </Router>

    </>)
  );
}

