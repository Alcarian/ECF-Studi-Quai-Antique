import React from "react";
import { NavLink } from "react-router-dom";

export default function CardMenu() {
  return (
    <div className="cardMenu">
      <p>
        En cours de maintenance, la carte sera bientôt disponible, merci de
        votre patience !
      </p>
      <NavLink
        to="/Home"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <a href="#menu">
          <button>Retour à l'accueil</button>
        </a>
      </NavLink>
    </div>
  );
}
