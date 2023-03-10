import React, { useState } from "react";
import plate from "../img/ic-plate.png";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";

export default function Form() {
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
    <div className="form-infos" id="résa">
      <div className="form-infos-container">
        <div className="borderForm">
          <h2>Réservation</h2>
          <div>
            <button className="btn1" onClick={handleShowModal}>
              Connexion ?
            </button>
            {showModal && (
              <ModalLogin className="modalVisible" onClose={handleCloseModal} />
            )}
          </div>
          <div>
            <button className="btn2" onClick={handleShowModalRegister}>
              Devenir client ?
            </button>
            {showModalRegister && (
              <ModalRegister
                className="modalVisible"
                onClose={handleCloseModalRegister}
              />
            )}
          </div>
          <h3>RESERVER EN LIGNE</h3>
          <span>
            <img src={plate} alt="icone" />
          </span>
          <div className="form-inputs">
            <select name="" id="people">
              <option value="">Personnes</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <input
              type="date"
              id="booking-date"
              name="booking-date"
              defaultValue="2023-02-24"
              min="2023-02-24"
              max="2024-12-31"
            />
            <input
              type="time"
              id="booking-time"
              name="booking-time"
              min="12:00"
              max="23:00"
            />
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
            <input type="email" placeholder="Email" />
          </div>
          <button className="btnReservation">Réserver</button>
        </div>
      </div>
    </div>
  );
}
