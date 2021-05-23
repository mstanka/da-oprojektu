import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <main>
          <Switch>
            <Route path="/o-projektu">
              <Project />
            </Route>
            <Route path="/o-nas">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

render(<App />, document.querySelector('#app'));
