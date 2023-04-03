import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../Store/AuthContext";
import Logout from "./Logout";

export default function HamburgerMenu() {
  const authCtx = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const largeur = window.innerWidth;
  const [isAdmin, setIsAdmin] = useState(false);
  const adminId = 53;

  const handleClick = () => {
    if (largeur < 1000) {
      setMenuOpen(!menuOpen);
    } else {
      setMenuOpen(menuOpen);
    }
  };

  useEffect(() => {
    if (authCtx.userId === adminId) {
      setIsAdmin(true);
    }
  }, [authCtx.userId]);

  return (
    <div
      className={`hamburger-menu ${menuOpen ? "open" : ""}`}
      onClick={handleClick}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <ul>
        <li>
          <a href="#accueil">Accueil</a>
        </li>
        <li>
          <a href="#diapo">Photos</a>
        </li>
        <li>
          <a href="#menu">Menus</a>
        </li>
        <li>
          <a href="#résa">Réservation</a>
        </li>
        <li>
          <a href="#footer">Nous suivre</a>
        </li>
        <li>
          <Logout />
        </li>
        <li>
          <NavLink
            to="/AdminPage"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            {isAdmin ? (
              <button className="buttonAdmin">Administrateur</button>
            ) : (
              false
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
