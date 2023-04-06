import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Store/AuthContext";

export default function ConfirmSupp(props) {
  const authCtx = useContext(AuthContext);
  const [modification, setModification] = useState(false);

  // Modif données
  const modificationHandler = () => {
    setModification((modification) => !modification);
  };

  // Requête DELETE
  function deleteUser() {
    const requestOptions = {
      method: "DELETE",
      headers: new Headers({
        Authorization: `Bearer ${authCtx.token}`,
        "Content-Type": "application/json, Authorization",
      }),
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_API_URL}/api/users/deleteUser?id=${authCtx.userId}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {}, [modification]);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={props.onClose}>
          X
        </button>
        <p>Voulez-vous vraiment supprimer votre compte ?</p>
        <button
          onSubmit={submitHandler}
          onClick={() => {
            modificationHandler();
            deleteUser();
          }}
        >
          <a href="#accueil" onClick={authCtx.logout}>
            Supprimer
          </a>
        </button>
      </div>
    </div>
  );
}
