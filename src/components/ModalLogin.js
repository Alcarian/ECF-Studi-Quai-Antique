import React, { useContext, useRef, useState } from "react";
import AuthContext from "../Store/AuthContext";
import ErrorModal from "./ErrorModal";

export default function ModalLogin(props) {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  // Utilisation du context
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const [datas, setDatas] = useState();
  const [error, setError] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Control input not empty

    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      setError({
        title: "Un ou plusieurs champs sont vide",
        message: "Entré votre Email et/ou votre mot de passe",
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
    const url = `${process.env.REACT_APP_API_URL}/api/authentification/login`;

    const fetchHandler = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
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
          authCtx.login(dataResponse.token, dataResponse.userId);
        } else {
          setError({
            title: "Echec Authentification",
            message: dataResponse.error,
          });

          throw new Error(dataResponse.error);
        }
      } catch (error) {
        console.log("Problème serveur");
        console.log(error);
      }
    };
    fetchHandler();

    // clear inputs
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  // clear state error
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      <div className="modal">
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}
        <div className="modal-content">
          {isLoggedIn && <p>Vous êtes connecté ! </p>}
          <button className="close-button" onClick={props.onClose}>
            X
          </button>
          <form onSubmit={submitHandler}>
            <input type="email" ref={emailInputRef} placeholder="Email" />
            <input
              type="password"
              placeholder="Password"
              ref={passwordInputRef}
            />
            {!isLoggedIn && (
              <button type="submit" onClick={() => {}}>
                Connexion
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
