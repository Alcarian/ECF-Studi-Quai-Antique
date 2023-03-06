import React, { useState } from "react";

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  let largeur = window.innerWidth;

  const handleClick = () => {
    if (largeur < 1000) {
      setMenuOpen(!menuOpen);
    } else {
      setMenuOpen(menuOpen);
    }
  };

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
      </ul>
    </div>
  );
}
