import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="page-content">
        <h1> Láká Vás ostrov Réunion? </h1>
        <h2>
          Letenky a ubytování si ještě zvládnete zařídit sami, ale co na místě?
        </h2>
        <p>
          Času bude málo, letenky přecejen něco stály, ubytování taky, nechcete
          přece jít jen tak naslepo a doufat, že se výlet povede. Anebo naopak
          jít podle tištěného průvodce na ty nejturističtější místa, kde bude
          vždycky plno lidí a kde Vás to zaručeně otráví hned na začátku.
        </p>
        <h3>
          Na našich stránkách pojímáme cestování na ostrově
          <i> Réunion trochu jinak</i> ;).
        </h3>
        <p>
          Inspirujte se tipy na výlety od nás, co jsme ostrov už prolezly skrz
          naskrz <br></br>anebo tipy od místních, které jsme pro Vás během
          našich pobytů získaly.
        </p>
        <p>
          Více v našem{' '}
          <span className="link-to-project">
            <Link to="/o-projektu">projektu</Link>
          </span>
          .
        </p>
      </div>
    </>
  );
};

export default Home;
