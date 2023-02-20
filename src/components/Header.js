import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Logo />
      </div>
      <nav>
        <HamburgerMenu />
      </nav>
    </div>
  );
};

export default Header;
