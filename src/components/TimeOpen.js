import React from "react";
import plate from "../img/ic-plate.png";

export default function TimeOpen() {
  return (
    <div className="timeOpen">
      <div className="timeContainer">
        <div className="border">
          <h2>Horaires d'ouverture</h2>
          <span>
            <img src={plate} alt="icone" />
          </span>
          <h3>Du mardi au jeudi</h3>
          <p>11h30 - 14h (Déjeuner)</p>
          <p>18h30 - 22h (Dîner)</p>
          <h3>Du vendredi au dimanche</h3>
          <p>11h30 - 14h (Déjeuner)</p>
          <p>18h30 - 23h (Diner)</p>
          <h3 className="phone">+04 79 01 02 03</h3>
        </div>
      </div>
    </div>
  );
}
