import React, { useRef } from "react";

export default function ModalRegister(props) {
  const nameInputRef = useRef();
  const firstNameInputRef = useRef();
  const emailInputRef = useRef();
  const passewordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredFistrName = firstNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passewordInputRef.current.value;

    console.log(enteredName, enteredFistrName, enteredEmail, enteredPassword);

    //clear inputs
    nameInputRef.current.value = "";
    firstNameInputRef.current.value = "";
    emailInputRef.current.value = "";
    passewordInputRef.current.value = "";
  };

  return (
    <div>
      <div className="modalRegister">
        <div className="modalRegister-content">
          <button onClick={props.onClose} className="close-button">
            X
          </button>

          <h2>Devenir client</h2>
          <form onSubmit={submitHandler}>
            <input type="text" placeholder="Nom" ref={nameInputRef} />
            <input type="text" placeholder="Prénom" ref={firstNameInputRef} />
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
