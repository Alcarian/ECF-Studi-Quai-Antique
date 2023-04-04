import React, { useRef, useState } from "react";
import ErrorModal from "./ErrorModal";

export default function ModalRegister(props) {
  const nameInputRef = useRef();
  const nbrCouvertInputRef = useRef();
  const emailInputRef = useRef();
  const passewordInputRef = useRef();

  const dotenv = require("dotenv");
  dotenv.config();

  const [datas, setDatas] = useState();
  const [error, setError] = useState(null);

  if (error) {
    console.log("true");
  } else {
    console.log("false");
  }

  console.log("****error****");
  console.log(error);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredNbrCouvert = nbrCouvertInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passewordInputRef.current.value;

    // Control input not empty

    if (
      enteredName.trim().length === 0 ||
      enteredNbrCouvert.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      setError({
        title: "Un ou plusieurs champs sont vide",
        message: "Merci de remplir tous les champs",
      });
      return;
    }

    // Control email validity

    const regexEmail = (value) => {
      /* eslint-disable*/
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    };
    if (!regexEmail(enteredEmail)) {
      setError({
        title: "Email invalide",
        message: " Entrer un format d'email valide",
      });
      return;
    }

    // Se connecter et récupérer userId et token authentification
    const url = `${process.env.REACT_APP_API_URL}/api/authentification/signup`;

    const fetchHandler = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            nom: enteredName,
            nbrCouvert: enteredNbrCouvert,
            email: enteredEmail,
            password: enteredPassword,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const dataResponse = await response.json();
        if (response.ok) {
          setDatas(dataResponse);
          alert("Enregistrement créé !!");
        } else {
          setError({
            title: "Echec Authentification",
            message: dataResponse.error,
          });

          throw new Error(dataResponse.error);
        }

        if (dataResponse && dataResponse.error) {
          setError({
            title: "il y a un problème",
            message: "Compte Email déja existant",
          });
        }
      } catch (error) {
        console.log("Problème serveur");
        console.log(error);
      }
    };
    fetchHandler();

    //clear inputs

    nameInputRef.current.value = "";
    nbrCouvertInputRef.current.value = "";
    emailInputRef.current.value = "";
    passewordInputRef.current.value = "";
  };

  // clear state error
  const errorHandler = () => {
    setError(null);
  };

  console.log(datas);

  return (
    <div>
      <div className="modalRegister">
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}
        <div className="modalRegister-content">
          <button onClick={props.onClose} className="close-button">
            X
          </button>

          <h2>Devenir client</h2>
          <form onSubmit={submitHandler}>
            <input type="text" placeholder="Nom" ref={nameInputRef} />
            <input
              type="text"
              placeholder="Nbr de couvert entre 1 et 10"
              ref={nbrCouvertInputRef}
            />
            <input type="email" placeholder="Email" ref={emailInputRef} />
            <input
              type="password"
              placeholder="Mot de passe"
              ref={passewordInputRef}
            />
            <button type="submit" onClick={() => {}}>
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
