import React, { useRef, useState } from "react";

export default function ModalLogin(props) {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [datas, setDatas] = useState();
  const [error, setError] = useState(null);

  if (error) {
    console.log("true");
  } else {
    console.log("false");
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Control input not empty

    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
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
    const url = "http://localhost:5000/api/authentification/login";

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
        setDatas(dataResponse);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHandler();

    //clear inputs
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  console.log(datas);

  return (
    <div className="modal">
      <div className="modal-content">
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
          <button type="submit" onClick={() => {}}>
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}
