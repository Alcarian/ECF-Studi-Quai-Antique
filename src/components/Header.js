import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header" id="accueil">
      <nav>
        <Logo />
        <HamburgerMenu />
      </nav>
      <div className="header-text">
        <h1>Le Quai Antique</h1>
        <h6>La Savoie dans votre assiette !</h6>
      </div>
    </div>
  );
};

export default Header;
