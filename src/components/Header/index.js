import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="logo">
          <div>Réunion &nbsp;</div>
          <div>trochu &nbsp;</div>
          <div>jinak</div>
        </div>
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
      </div>
      <div className="img-main"></div>
    </header>
  );
};

export default Header;
