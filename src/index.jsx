import React, { useState } from 'react';
import { render } from 'react-dom';
import MenuItem from './components/MenuItem';
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
      </header>
      <main>
        {showPage === 'Domů' ? <div>Home Page</div> : null}
        {showPage === 'O projektu' ? <div>Project Page</div> : null}
        {showPage === 'O nás' ? <div>About Us Page</div> : null}
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
