import React from 'react';
import PhotoKata from '../img/fotkakata.jpg';

const About = () => {
  return (
    <>
      <section className="page-content">
        <h1> O nás </h1>
        <h2> Markéta </h2>
        <section className="about-us marketa">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ab
            culpa quaerat quasi nostrum sed illum iste, facilis magni, natus
            laboriosam sapiente corporis vel. Possimus iure quam laborum maxime
            illo.
          </p>
          <img src="" alt="" className="img-us"></img>
        </section>
        <h2> Káťa </h2>
        <section className="about-us kata">
          <img src={PhotoKata} alt="Fotka Káťa" className="img-us" />;
          <p>
            Na ostrově jsem strávila 6 měsíců jako au-pair. Žila jsem v napůl
            české a napůl reunionské rodině, spřátelila jsem se místními
            studenty a celou jsem od všech sondovala tipy na výlety, které Vám
            ráda předám. Jsem spíše plážový a koupací typ, tipy na hory
            dostanete zase od Markét. :) Ostrov má spoustu specifik, na které je
            třeba dávat si pozor, jako např. nevyzpytatelnost počasí a dopravy,
            ale také nejkrásnější západy slunce, panoramata hor a modře čisté
            laguny a moře. Budu se těšit, že z našich zážitků něco využijete!
          </p>
        </section>
      </section>
    </>
  );
};

export default About;
