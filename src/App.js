import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";
import SmoothScrollbar from "./components/SmoothScrollbar";
// import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  const location = useLocation();
  return (
    <>
      <NavMenu />
      {/* <ScrollToTop /> */}
      <SmoothScrollbar>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer />
      </SmoothScrollbar>
    </>
  );
}
