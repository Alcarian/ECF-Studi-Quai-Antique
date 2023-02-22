import React from "react";
import salade from "../img/Salade1.jpg";
import croissant from "../img/Croissant.jpg";
import pâtes from "../img/Pâtes.jpg";
import viande from "../img/viandes.jpg";
import fruits from "../img/fruits.jpg";
import mousse from "../img/moussechoc.jpg";

export default function Lunch() {
  return (
    <div className="lunchCard">
      <h1>Menu du jour</h1>
      <p>1 entrée + 1 plat + 1 déssert</p>
      <h3>12€</h3>
      <h2>Nos Entrées</h2>
      <div>
        <img src={salade} alt="Salade composée" />
        <div>
          <p>Salade composée</p>
        </div>
      </div>
      <div>
        <img src={croissant} alt="Croisant de charcuterie" />
        <div>
          <p>Croissant de charcuterie</p>
        </div>
      </div>
      <h2>Nos Plats</h2>
      <div>
        <img src={pâtes} alt="Pâtes carbonara" />
        <div>
          <p>Pâtes carbonara</p>
        </div>
      </div>
      <div>
        <img src={viande} alt="Viandes grillées" />
        <div>
          <p>Viandes du moment</p>
        </div>
      </div>
      <h2>Nos Desserts</h2>
      <div>
        <img src={fruits} alt="Salade de fruits" />
        <div>
          <p>Salade de fruits frais</p>
        </div>
      </div>
      <div>
        <img src={mousse} alt="Mousse au chocolat" />
        <div>
          <p>Mousse au chocolat du chef</p>
        </div>
      </div>
      <h1>Bon Appetit !</h1>
    </div>
  );
}