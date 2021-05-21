import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="header">
          <nav className="nav">
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Domů
                </Link>
              </li>
              <li>
                <Link to="/o-projektu" className="nav-link">
                  O projektu
                </Link>
              </li>
              <li>
                <Link to="/o-nas" className="nav-link">
                  O nás
                </Link>
              </li>
            </ul>
          </nav>
          <div className="img-main"></div>
        </header>
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
        <footer>
          <div> Czechitas, Digitální akademie: Web </div>
          <div> © 2021 Markéta Staňková & Kateřina Levová </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

render(<App />, document.querySelector('#app'));
