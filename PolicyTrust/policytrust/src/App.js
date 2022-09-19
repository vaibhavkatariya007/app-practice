import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Vision from './pages/Vision';
import About from './pages/About';
import Contact from './pages/Contact';
import Survey from './pages/Survey';
import NoMatch from './pages/NoMatch';

import './App.css';

function App() {
  return (
    <Router>
      <div className="container">

        <Header />
        <Menu />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/survey">
            <Survey />
          </Route>
          <Route path="/vision">
            <Vision />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
