import React, { useRef } from "react";

export default function ModalLogin(props) {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log(enteredEmail, enteredPassword);

    //clear inputs
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

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
