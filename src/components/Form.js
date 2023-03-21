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
  const [dataUpdate, setDataUpdate] = useState();

  // modal
  const [showModal, setShowModal] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [error, setError] = useState(null);

  if (error) {
    console.log("true");
  } else {
    console.log("false");
  }
  console.log("*****error******");
  console.log(error);

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
  };

  // Requête POST

  function makeBooking() {
    const enteredPerson = personInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredTime = timeInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    // mettre a jour le state
    setDataUpdate({
      ...dataUpdate,
      NbrPersonnes: enteredPerson,
      date: enteredDate,
      heures: enteredTime,
      nom: enteredName,
      Num_téléphone: enteredPhone,
      email: enteredEmail,
    });

    // Création objet
    const dataUpdateSend = {
      NbrPersonnes: enteredPerson,
      date: enteredDate,
      heures: enteredTime,
      nom: enteredName,
      Num_téléphone: enteredPhone,
      email: enteredEmail,
    };

    if (
      enteredEmail.trim().length === 0 ||
      enteredPerson.trim().length === 0 ||
      enteredDate.trim().length === 0 ||
      enteredTime.trim().lenght === 0 ||
      enteredName.trim().length === 0 ||
      enteredPhone.trim().length === 0
    ) {
      setError({
        title: "Un ou plusieurs champs sont vide",
      });
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const data = dataUpdateSend;
    console.log("*****DATA******");
    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    fetch("http://localhost:5000/api/booking/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  // // Clear input
  // personInputRef.current.value = "";
  // dateInputRef.current.value = "";
  // timeInputRef.current.value = "";
  // nameInputRef.current.value = "";
  // phoneInputRef.current.value = "";
  // emailInputRef.current.value = "";

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
              <option value="9">9</option>
              <option value="10">10</option>
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

            <button
              type="submit"
              onClick={() => makeBooking()}
              className="btnReservation"
            >
              Réserver
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
