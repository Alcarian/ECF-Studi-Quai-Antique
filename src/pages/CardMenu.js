import React from "react";
import { NavLink } from "react-router-dom";

export default function CardMenu() {
  return (
    <div className="cardMenu">
      <NavLink
        to="/Home"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <button>Retour à l'accueil</button>
      </NavLink>
      <h1 id="accueil">Menu du jour</h1>
      <h4>1 entrée + 1 plat + 1 déssert</h4>
      <h3>19€</h3>
      <div className="déjeuner">
        <h2>Nos Entrées</h2>
        <div className="entrées">
          <h5>* Salade composée</h5>
          <p>Salade verte, lardons, oeufs, croutons</p>
          <h5>* Croissant de charcuterie</h5>
          <p>Croissant, jambon cru, reblochon</p>
        </div>
        <h2>Nos Plats</h2>
        <div className="plats">
          <h5>* Pâtes carbonara</h5>
          <p>Pâtes, oeufs, crème, oignons, lardons</p>
          <h5>* Viandes du moment</h5>
          <p>Viande du chef accompagnée de frites</p>
        </div>
        <h2>Nos Désserts</h2>
        <div className="désserts">
          <h5>* Salade de fruits frais</h5>
          <p>Oranges, pommes, kiwis, raisins et ananas</p>
          <h5>* Mousse au chocolat du Chef</h5>
          <p>Chocolat, oeuf, beurre, sucre</p>
        </div>
      </div>
      <h1>À la Carte</h1>
      <div className="repas">
        <h2>Nos Entrées</h2>
        <div className="entrées">
          <div className="diner">
            <div>
              <h5>* Salade chèvre chaud</h5>
              <p>Salade verte, fromage de chèvre, lardons</p>
            </div>
            <h3>10€</h3>
          </div>
          <div className="diner">
            <div>
              <h5>* Salade César</h5>
              <p>Salade verte, oeuf, parmesan</p>
            </div>
            <h3>9€</h3>
          </div>
          <div className="diner">
            <div>
              <h5>* Assiette de charcuterie</h5>
              <p>Jambon cru, saucisson, pâté</p>
            </div>
            <h3>12€</h3>
          </div>
          <div className="diner">
            <div>
              <h5>* Oeuf mimosa</h5>
              <p>Oeuf, mayonnaise, persil</p>
            </div>
            <h3>8€</h3>
          </div>
          <div className="diner">
            <div>
              <h5>* Foie gras poêlé</h5>
              <p>Foie gras, confiture de figue</p>
            </div>
            <h3>10€</h3>
          </div>
        </div>
        <h2>Nos Plats</h2>
        <div className="plats">
          <div className="diner">
            <div>
              <h5>* Raclette (2 personnes)</h5>
              <p>Plateau de charcuterie et pomme de terre</p>
            </div>
            <h3>22€</h3>
          </div>
          <div className="diner">
            <div>
              <h5>* Croziflette</h5>
              <p>Crozets, reblochon, oignons</p>
            </div>
            <h3>20€</h3>
          </div>
          <div className="diner">
            <div>
              <h5>* Diots en sauce</h5>
              <p>Porc, frites ou salade</p>
            </div>
            <h3>18€</h3>
          </div>
          <div className="diner">
            <div>
              <h5>* Pavé de truite</h5>
              <p>Truite, pomme de terre poêlé</p>
            </div>
            <h3>19€</h3>
          </div>
          <div className="diner">
            <div>
              <h5>* Hamburger Savoyard</h5>
              <p>Viande de boeuf, reblochon, oignons</p>
            </div>
            <h3>20€</h3>
          </div>
        </div>
        <h2>Nos Désserts</h2>
        <div className="désserts">
          <div className="diner">
            <div>
              <h5>* Chocolat mi-cuit</h5>
              <p>Chocolat au coeur fondant</p>
            </div>
            <h3>8€</h3>
          </div>
          <div className="diner">
            <div>
              <h5>* Tarte au citron meringuée</h5>
              <p>Citron, oeuf, sucre</p>
            </div>
            <h3>8€</h3>
          </div>
          <div className="diner">
            <div>
              <h5>* Tiramisu</h5>
              <p>Mascarpone, café, cacao, oeufs</p>
            </div>
            <h3>9€</h3>
          </div>
          <div className="diner">
            <div>
              <h5>* Salade de fruits frai</h5>
              <p>Oranges, pommes, kiwis, raisins et ananas</p>
            </div>
            <h3>7€</h3>
          </div>
          <div className="diner">
            <div>
              <h5>* Café gourmand</h5>
              <p>Café, muffin chocolat, sablé ou cookie</p>
            </div>
            <h3>9€</h3>
          </div>
        </div>
      </div>
      <h2>Bon Appetit !</h2>
      <NavLink
        to="/Home"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <button>Retour à l'accueil</button>
      </NavLink>
      <div className="top">
        <a href="#accueil">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
}
