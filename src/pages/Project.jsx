import React from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from '../data.js';

const Project = () => {
  return (
    <div className="page-content">
      <h1>O projektu</h1>
      <p>
        Chystáme pro Vás cestovatelský web, na kterém si budete moci vybrat
        výlet, tak, jak to pro Vás bude nejpohodlnější.
      </p>
      <p>
        Na jedné stránce bude dostupný seznam výletů podle kategorií - záleží
        zda bude Vaším cílem pláž, stoupání na vrcholky hor, pěší túra s
        překročením řeky, koupání v jezeře s vodopádem anebo třeba návštěva
        farmářských trhů či pěstírny vanilky.
      </p>
      <p>
        Výlety si budete moci zobrazit také podle názvů nebo části ostrova, kde
        se budou nacházet. U každého chystáme informace o dopravě, tipy na
        zajímavá místa k vidění, případně na dobré jídlo nebo supermarket poblíž
        (takový piknik s obyčejným čerstvým chlebem a francouzským sýrem a vínem
        pod vodopádem!).
      </p>
      <p>
        Každý výlet bude mít svou vlastní galerii fotek. Pokud se raději
        rozhodujete na základě polohy, můžete si jednotlivé výlety rozkliknout i
        na interaktivní mapě.
      </p>
      <p>Níže pár fotek jako lákadlo :)</p>
      <Gallery photos={photos} />;
    </div>
  );
};

export default Project;
