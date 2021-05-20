import React, { useState } from 'react';
import { render } from 'react-dom';
import MenuItem from './components/MenuItem';
import Home from './components/Home';
import About from './components/About';
import './style.css';

const App = () => {
  const [showPage, setShowPage] = useState('Domů');

  const handleSelectItem = (page) => {
    setShowPage(page);
  };

  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <MenuItem text="Domů" onSelect={handleSelectItem} />
          <MenuItem text="O projektu" onSelect={handleSelectItem} />
          <MenuItem text="O nás" onSelect={handleSelectItem} />
        </nav>
        <div className="img-main"></div>
      </header>
      <main>
        {showPage === 'Domů' ? <Home /> : null}
        {showPage === 'O projektu' ? <div>Project Page</div> : null}
        {showPage === 'O nás' ? <About /> : null}
      </main>
      <footer>
        <div> Czechitas, Digitální akademie: Web </div>
        <div> © 2021 Markéta Staňková & Kateřina Levová </div>
      </footer>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
