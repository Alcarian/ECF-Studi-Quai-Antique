import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TimeOpen from "../components/TimeOpen";

export default function CardMenu() {
  // window.scrollTo(0, 0);

  const dotenv = require("dotenv");
  dotenv.config();

  const [menuData, setMenuData] = useState([]);

  function getInfosData() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch(`${process.env.REACT_APP_API_URL}/api/menu/`, requestOptions)
      .then((response) => response.json())
      .then((result) => setMenuData(result.results))
      .catch((error) => {
        console.log("error requète", error);
        throw error;
      });
  }

  useEffect(() => {
    getInfosData();
  }, []);

  return (
    <div className="cardMenu">
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <button>Retour à l'accueil</button>
      </NavLink>
      <h1 id="accueil">Menu du jour</h1>
      <h4>1 entrée + 1 plat + 1 déssert</h4>
      <h3>19€</h3>
      <div className="déjeuner">
        {menuData
          .filter((menu) => menu.jour_semaine === "Mardi")
          .map((menu) => (
            <div key={menu.jour_semaine} className="center">
              <div className="entrées">
                <h2>Entrée du jour</h2>
                <h5>{"* " + menu.entree}</h5>
                <p>{menu.description_entree}</p>
              </div>
              <div className="plats">
                <h2>Plat du jour</h2>
                <h5>{"* " + menu.plat}</h5>
                <p>{menu.description_plat}</p>
              </div>
              <div className="desserts">
                <h2>Desserts du jour</h2>
                <h5>{"* " + menu.dessert}</h5>
                <p>{menu.description_dessert}</p>
              </div>
            </div>
          ))}
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
        <div className="desserts">
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
      <div className="hours">
        <TimeOpen />
      </div>
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
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
