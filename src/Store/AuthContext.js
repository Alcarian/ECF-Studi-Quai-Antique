import { createContext, useState } from "react";

// Création du context pour l'authentification
//pour stocker les données
const defaultValue = {
  token: "",
  userId: null,
  userIsLoggedIn: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext(defaultValue);

// Controle de la présence du token dans le local storage
const tokenLocalStorage = localStorage.getItem("token");

//Controle de l'useId dans le local storage
const userIdLocalStorage = localStorage.getItem("userId");

// le contexte provider
export const AuthContextProvider = (props) => {
  // stockage du token
  const [token, setToken] = useState(tokenLocalStorage);
  const [userId, setUserId] = useState(userIdLocalStorage);

  // fonction pour mettre à jour le token dans le state
  const loginHandler = (token, userId) => {
    setToken(token);
    setUserId(userId);
    // mettre la donnée dans le localstorage
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
  };

  // faire passer le token a null pour se déconnecter
  const logOutHandler = () => {
    setToken(null);
    setUserId(null);
    // supprimer la donnée du local storage
    localStorage.clear();
  };

  // Présence token = connecté et convertir le token en valeur booléenne
  const userIsLoggedIn = !!token;
  console.log("===>> USERISLOGGEDIN");
  console.log(userIsLoggedIn);

  // Le context value
  const contextValue = {
    token: token,
    userId: userId,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logOutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
