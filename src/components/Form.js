import React, { useRef, useState } from "react";
import plate from "../img/ic-plate.png";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";

export default function Form() {
  // Reservation
  const personInputRef = useRef();
  const dateInputRef = useRef();
  const timeInputRef = useRef();
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();

  // modal
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

  // End modal

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredPerson = personInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredTime = timeInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    console.log(
      enteredPerson,
      enteredDate,
      enteredTime,
      enteredName,
      enteredPhone,
      enteredEmail
    );
    // Clear input

    personInputRef.current.value = "";
    dateInputRef.current.value = "";
    timeInputRef.current.value = "";
    nameInputRef.current.value = "";
    phoneInputRef.current.value = "";
    emailInputRef.current.value = "";
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
          <form onSubmit={submitHandler} className="form-inputs">
            <select name="" id="people" ref={personInputRef}>
              <option value="">Personnes</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">8</option>
              <option value="10">8</option>
            </select>
            <input
              type="date"
              ref={dateInputRef}
              id="booking-date"
              name="booking-date"
              defaultValue="2023-02-24"
              min="2023-02-24"
              max="2024-12-31"
            />
            <input
              type="time"
              ref={timeInputRef}
              id="booking-time"
              name="booking-time"
              min="12:00"
              max="23:00"
            />
            <input type="text" placeholder="Name" ref={nameInputRef} />
            <input type="text" placeholder="Phone" ref={phoneInputRef} />
            <input type="email" placeholder="Email" ref={emailInputRef} />

            <button type="submit" onClick={() => {}} className="btnReservation">
              Réserver
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
