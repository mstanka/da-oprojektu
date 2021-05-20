import React, { useState } from 'react';
import { render } from 'react-dom';
import MenuItem from './components/MenuItem';
import './style.css';
import Domu from './components/Domu/index.jsx';

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
      </header>
      <main>
        {showPage === 'Domů' ? <Domu /> : null}
        {showPage === 'O projektu' ? <div>Project Page</div> : null}
        {showPage === 'O nás' ? <div>About Us Page</div> : null}
      </main>
      <footer>
        <div> Czechitas, Digitální akademie: Web </div>
        <div> © 2021 Markéta Staňková & Kateřina Levová </div>
      </footer>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
