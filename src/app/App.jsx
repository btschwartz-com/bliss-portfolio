import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor  from "../hooks/AnimatedCursor";
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
          <div className="cursor__dot">
            <AnimatedCursor
              innerSize={10}
              outerSize={15}
              color="100, 100, 0"
              outerAlpha={0.4}
              innerScale={0.7}
              outerScale={3}
            />
          </div>
          <ScrollToTop>
            <Headermain />
            <AppRoutes />
          </ScrollToTop>
        </Router>

    </>
  );
}
