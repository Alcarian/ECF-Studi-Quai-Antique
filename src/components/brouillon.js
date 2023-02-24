import React, { useState } from "react";

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    "Accueil",
    "Photos",
    "Menus",
    "Réservation",
    "Connexion",
    "Devenir client ?",
  ];

  return (
    <div
      className={`hamburger-menu ${menuOpen ? "open" : ""}`}
      onClick={handleClick}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
