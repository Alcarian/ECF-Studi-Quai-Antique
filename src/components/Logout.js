import React, { useContext } from "react";
import AuthContext from "../Store/AuthContext";

export default function Logout() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div className="brouillon">
      {isLoggedIn && (
        <a href="#accueil" onClick={authCtx.logout}>
          Se déconnecter
        </a>
      )}
    </div>
  );
}
