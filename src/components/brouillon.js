import React, { useContext } from "react";
import AuthContext from "../Store/AuthContext";

export default function Brouillon() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  //requète pour accéder aux données formuser
  // const url = `http://localhost:5000/api/form_user/fiche/?userId=${authCtx.userId}}`;
  console.log("==> TOKEN <==");
  console.log(authCtx.token);
  console.log("==> USERID <==");
  console.log(authCtx.userId);

  const fetchHandler = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/form_user/fiche/?userId=${authCtx.userId}}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authCtx.token}`,
          },
        }
      );
      const dataResponse = await response.json();
      if (response.ok) {
        console.log(dataResponse);
      } else {
        throw new Error(dataResponse.error);
      }
    } catch (error) {
      console.log("==> Problème serveur la requête n'est pas partie");
      console.log(error);
    }
  };
  if (isLoggedIn) {
    fetchHandler();
  }

  return (
    <div className="brouillon">
      {isLoggedIn && <p>Vous êtes connecté ! </p>}
      {!isLoggedIn && <p>Vous n'êtes pas connecté !</p>}
      {isLoggedIn && <button onClick={authCtx.logout}>Se déconnecter</button>}
    </div>
  );
}
