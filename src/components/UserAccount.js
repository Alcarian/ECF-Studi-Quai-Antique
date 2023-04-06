import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../Store/AuthContext";
import ConfirmSupp from "./ConfirmSupp";

export default function UserAccount(props) {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const nameInputRef = useRef();
  const nbrCouvertInputRef = useRef();
  const [infosData, setInfosData] = useState([]);
  const [modification, setModification] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleShowConfirm = () => {
    setShowConfirm(true);
  };

  const handleCloseConfirm = () => {
    setShowConfirm(false);
  };

  console.log("****infosdata****");
  console.log(infosData);

  // Modif données
  const modificationHandler = () => {
    setModification((modification) => !modification);
    console.log("**************modif*******");
    console.log(modification);
  };

  // surveiller les modifications des champs
  const [nom, setNom] = useState();
  const [couvert, setCouvert] = useState();

  // Requête GET

  function getInfosData() {
    const requestOptions = {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${authCtx.token}`,
        "Content-Type": "application/json",
      }),
      redirect: "follow",
    };

    return fetch(
      `${process.env.REACT_APP_API_URL}/api/users/infos?id=${authCtx.userId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setInfosData(result.results))
      .catch((error) => {
        console.log("error requète", error);
        throw error;
      });
  }

  useEffect(() => {
    getInfosData();
  }, [modification]);

  // Requête PUT

  const updateData = (nom, nbrCouvert) => {
    fetch(
      `${process.env.REACT_APP_API_URL}/api/users/userUpdate?id=${authCtx.userId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: authCtx.userId,
          Nom: nom,
          nbrCouvert: nbrCouvert,
        }),
      }
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  // Requête DELETE
  // function deleteUser() {
  //   const requestOptions = {
  //     method: "DELETE",
  //     headers: new Headers({
  //       Authorization: `Bearer ${authCtx.token}`,
  //       "Content-Type": "application/json, Authorization",
  //     }),
  //     redirect: "follow",
  //   };

  //   fetch(
  //     `${process.env.REACT_APP_API_URL}/api/users/deleteUser?id=${authCtx.userId}`,
  //     requestOptions
  //   )
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // }

  // useEffect(() => {}, [modification]);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="userAccount">
        {infosData.map((data, index) => (
          <div key={index} className="userAccount-content">
            <button onClick={props.onClose} className="close-button">
              X
            </button>

            <h2>Modifier infos</h2>
            <form onSubmit={submitHandler}>
              <label htmlFor="name">Nom d'utilisateur:</label>

              {!modification && <p>{data.Nom}</p>}
              {modification && (
                <input
                  type="text"
                  defaultValue={data.Nom}
                  ref={nameInputRef}
                  onChange={(e) => setNom(e.target.value)}
                />
              )}
              <label htmlFor="name">Nbr couverts par defaut:</label>
              {!modification && <p>{data.nbrCouvert}</p>}
              {modification && (
                <input
                  type="text"
                  defaultValue={data.nbrCouvert}
                  ref={nbrCouvertInputRef}
                  onChange={(e) => setCouvert(e.target.value)}
                />
              )}
              {!modification && (
                <button
                  onSubmit={submitHandler}
                  onClick={() => {
                    modificationHandler();
                    getInfosData();
                  }}
                >
                  Modifier
                </button>
              )}
              {modification && (
                <button
                  type="submit"
                  onClick={() => {
                    modificationHandler();
                    updateData(nom, couvert);
                  }}
                >
                  Envoyer
                </button>
              )}
              <div>
                {isLoggedIn && (
                  <button onClick={handleShowConfirm}>Supprimer compte</button>
                )}
                {showConfirm && <ConfirmSupp onClose={handleCloseConfirm} />}
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
