import React from "react";
import { NavLink } from "react-router-dom";

export default function Diner() {
  return (
    <div className="dinerCard">
      <div className="borderDiner">
        <h1>À la Carte</h1>
        <h2>Nos Entrées</h2>
        <div className="diner">
          <p>Salade chèvre chaud</p>
          <h3>10€</h3>
        </div>
        <div className="diner">
          <p>Salade César</p>
          <h3>9€</h3>
        </div>
        <div className="diner">
          <p>Assiette de charcuterie</p>
          <h3>12€</h3>
        </div>
        <div className="diner">
          <p>Oeuf mimosa</p>
          <h3>8€</h3>
        </div>
        <div className="diner">
          <p>Foie gras poêlé</p>
          <h3>10€</h3>
        </div>
        <h2>Nos Plats</h2>
        <div className="diner">
          <p>Raclette (2 personnes)</p>
          <h3>22€</h3>
        </div>
        <div className="diner">
          <p>Croziflette</p>
          <h3>20€</h3>
        </div>
        <div className="diner">
          <p>Diots en sauce</p>
          <h3>18€</h3>
        </div>
        <div className="diner">
          <p>Pavé de truite</p>
          <h3>19€</h3>
        </div>
        <div className="diner">
          <p>Hamburger Savoyard</p>
          <h3>20€</h3>
        </div>
        <h2>Nos désserts</h2>
        <div className="diner">
          <p>Chocolat mi-cuit</p>
          <h3>8€</h3>
        </div>
        <div className="diner">
          <p>Tarte au citron</p>
          <h3>8€</h3>
        </div>
        <div className="diner">
          <p>Tiramisu</p>
          <h3>9€</h3>
        </div>
        <div className="diner">
          <p>Salade de fruits frai</p>
          <h3>7€</h3>
        </div>
        <div className="diner">
          <p>Café gourmand</p>
          <h3>9€</h3>
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
