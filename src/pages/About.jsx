import React from 'react';

const About = () => {
  return (
    <>
      <section className="page-content">
        <h1> O nás </h1>
        <section className="about-us">
          <div className="text-us">
            <h2> Markéta </h2>
            <p>
              Turistika patří mezi moje oblíbené činnosti a pokud je kolem
              krásná příroda, tak jako na ostrově Réunion, užívám si tím víc. Na
              ostrově jsem strávila 14 dnů dovolené a prošla část vnitrozemí v
              oblasti kráterů Mafate, Salazie a Cilaos. Během svých cest ráda
              fotím a i touto obrazovou cestou vám ráda předám svoje zážitky a
              zkušenosti.
            </p>
          </div>
          <div className="img-us">
            <img src="../assets/marketa.jpg" alt="Markéta" />
          </div>
        </section>
        <section className="about-us">
          <div className="text-us">
            <h2> Káťa </h2>
            <p>
              Na ostrově jsem strávila 6 měsíců jako au-pair. Žila jsem v napůl
              české a napůl reunionské rodině, spřátelila jsem se místními
              studenty a od všech jsem sondovala tipy na výlety, které Vám ráda
              předám. Já osobně jsem spíše plážový a koupací typ, tipy na hory
              dostanete zase od Markét. :) Ostrov má spoustu specifik, na které
              je třeba dávat si pozor, jako např. nevyzpytatelnost počasí a
              dopravy, ale také nejkrásnější západy slunce, panoramata hor a
              modře čisté laguny a moře. Budu se těšit, že z našich zážitků něco
              využijete!
            </p>
          </div>
          <div className="img-us">
            <img src="../assets/kata.jpg" alt="Fotka Káťa" />
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
