import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import Logo from "./Logo";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModalRegister = () => {
    setShowModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setShowModalRegister(false);
  };

  return (
    <div className="header" id="accueil">
      <div className="loginRegister">
        <li>
          <button className="btn1" onClick={handleShowModal}>
            Se connecter
          </button>
          {showModal && <ModalLogin onClose={handleCloseModal} id="modal" />}
        </li>
        <li>
          <button className="btn2" onClick={handleShowModalRegister}>
            Devenir client ?
          </button>
          {showModalRegister && (
            <ModalRegister onClose={handleCloseModalRegister} />
          )}
        </li>
      </div>
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
