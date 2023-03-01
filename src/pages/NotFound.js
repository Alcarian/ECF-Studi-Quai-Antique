import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFound">
      <div className="notFound-content">
        <h2>Erreur 404</h2>
        <NavLink to="/">
          <h3>
            Retour à l'accueil <i className="fas fa-home"></i>
          </h3>
        </NavLink>
      </div>
    </div>
  );
}
