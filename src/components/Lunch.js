import React from "react";
import salade from "../img/Salade1.jpg";
import croissant from "../img/Croissant.jpg";
import pâtes from "../img/Pâtes.jpg";
import viande from "../img/viandes.jpg";
import fruits from "../img/fruits.jpg";
import mousse from "../img/moussechoc.jpg";
import { NavLink } from "react-router-dom";

export default function Lunch() {
  return (
    <div className="lunchCard">
      <div className="borderLunch">
        <h1>Menu du jour</h1>
        <p>1 entrée + 1 plat + 1 déssert</p>
        <h3>19€</h3>
        <h2>Nos Entrées</h2>
        <div>
          <img src={salade} alt="Salade composée" className="reglageImg" />
          <div>
            <p>Salade composée</p>
          </div>
        </div>
        <div>
          <img
            src={croissant}
            alt="Croisant de charcuterie"
            className="reglageImg"
          />
          <div>
            <p>Croissant de charcuterie</p>
          </div>
        </div>
        <h2>Nos Plats</h2>
        <div>
          <img src={pâtes} alt="Pâtes carbonara" className="reglageImg" />
          <div>
            <p>Pâtes carbonara</p>
          </div>
        </div>
        <div>
          <img src={viande} alt="Viandes grillées" className="reglageImg" />
          <div>
            <p>Viandes du moment</p>
          </div>
        </div>
        <h2>Nos Désserts</h2>
        <div>
          <img src={fruits} alt="Salade de fruits" className="reglageImg" />
          <div>
            <p>Salade de fruits frais</p>
          </div>
        </div>
        <div>
          <img src={mousse} alt="Mousse au chocolat" className="reglageImg" />
          <div>
            <p>Mousse au chocolat du Chef</p>
          </div>
        </div>
        <h1>Bon Appetit !</h1>
        <h4>Ouvrez la carte pour plus de précisions :</h4>
        <NavLink
          to="/CardMenu"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <button>La carte</button>
        </NavLink>
      </div>
    </div>
  );
}
