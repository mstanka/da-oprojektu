import React from 'react';
import './style.css';
// import PhotoKata from 'src/img/fotka Kata.jpg';

const Domu = () => {
  return (
    <>
      <div className="page-content">
        <h1> O nás </h1>
        <h2> Markéta </h2>
        <img src=""></img>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ab
          culpa quaerat quasi nostrum sed illum iste, facilis magni, natus
          laboriosam sapiente corporis vel. Possimus iure quam laborum maxime
          illo.
        </p>
        <h2> Káťa </h2>
        {/* <img src alt="Fotka Káťa" />; */}
        <p>
          Na ostrově jsem strávila 6 měsíců jako au-pair. Žila jsem v napůl
          české a napůl reunionské rodině, spřátelila jsem se místními studenty
          a celou jsem od všech sondovala tipy na výlety, které Vám ráda předám.
          Jsem spíše plážový a koupací typ, tipy na hory dostanete zase od
          Markét. :) Ostrov má spoustu specifik, na které je třeba dávat si
          pozor, jako např. nevyzpytatelnost počasí a dopravy, ale také
          nejkrásnější západy slunce, panoramata hor a modře čisté laguny a
          moře. Budu se těšit, že z našich zážitků něco využijete!
        </p>
      </div>
    </>
  );
};

export default Domu;
