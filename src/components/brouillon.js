import React, { useContext } from "react";
import AuthContext from "../Store/AuthContext";

export default function Brouillon() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  //requète pour accéder aux données formuser
  // const url = `http://localhost:5000/api/form_user/fiche/?userId=${authCtx.userId}}`;
  // console.log("==> TOKEN <==");
  // console.log(authCtx.token);
  // console.log("==> USERID <==");
  // console.log(authCtx.userId);
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${authCtx.token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `http://localhost:5000/api/form_user/fiche/?userId=${authCtx.userId}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error requète", error));

  // const fetchHandler = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:5000/api/form_user/fiche/?userId=${authCtx.userId}}`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${authCtx.token}`,
  //         },
  //       }
  //     );
  //     console.log("==> RESPONSE <==");
  //     console.log(response);

  //     const dataResponse = await response.json();
  //     if (response.ok) {
  //       console.log(dataResponse);
  //     } else {
  //       throw new Error(dataResponse.error);
  //     }
  //   } catch (error) {
  //     console.log("==> Problème serveur la requête n'est pas partie");
  //     console.log(error);
  //   }
  // };
  // if (isLoggedIn) {
  //   fetchHandler();
  // }

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


//************************************************************************** */

import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../Store/AuthContext";

export default function UserAccount(props) {
  const authCtx = useContext(AuthContext);
  const nameInputRef = useRef();
  const nbrCouvertInputRef = useRef();
  const [infosData, setInfosData] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authCtx.token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    let isMounted = true;

    fetch(
      `http://localhost:5000/api/users/infos?id=${authCtx.userId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (isMounted) {
          setInfosData(result.results);
        }
      })
      .catch((error) => console.log("error requète", error));
    return () => {
      isMounted = false;
    };
  }, [authCtx]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      id: 40,
      Nom: "Alcarian",
      nbrCouvert: 5,
    });

    console.log("*********raw*******");
    console.log(raw);

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    let isMounted = true;

    fetch(
      `http://localhost:5000/api/users/userUpdate?id=${authCtx.userId}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        if (isMounted) {
          console.log(result);
        }
      })
      .catch((error) => console.log("error", error));
    return () => {
      isMounted = false;
    };
  }, [authCtx]);

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
              <input type="text" defaultValue={data.Nom} ref={nameInputRef} />
              <input
                type="text"
                defaultValue={data.nbrCouvert}
                ref={nbrCouvertInputRef}
              />
              <button type="submit" onClick={() => {}}>
                Modifier
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}


//******************************************************************* */



  const raw = JSON.stringify({
    entree: { entreeInputRef },
    plat: { platInputRef },
    dessert: { dessertInputRef },
    descriptionEntree: { descriEntreeInputRef },
    descriptionPlat: { descriPlatInputRef },
    descriptionDessert: { descriDessertInputRef },
    jour_semaine: menuData.jour_semaine,
  });


   // Control input not empty

   const enteredEntree = entreeInputRef.current;
   const enteredPlat = platInputRef.current;
   const enteredDessert = dessertInputRef.current;
   const enteredDesEntree = descriEntreeInputRef.current;
   const enteredDesPlat = descriPlatInputRef.current;
   const enteredDesDessert = descriDessertInputRef.current;
 
   console.log("******enteredEntree******");
   console.log(entreeInputRef);
 
   if (
     enteredEntree.trim().length === 0 ||
     enteredPlat.trim().length === 0 ||
     enteredDessert.trim().length === 0 ||
     enteredDesEntree.trim().length === 0 ||
     enteredDesPlat.trim().length === 0 ||
     enteredDesDessert.trim().length === 0
   ) {
     return;
   }