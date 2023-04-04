import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function AdminPage(menu) {
  const entreeInputRef = useRef();
  const platInputRef = useRef();
  const dessertInputRef = useRef();
  const descriEntreeInputRef = useRef();
  const descriPlatInputRef = useRef();
  const descriDessertInputRef = useRef();
  const [menuData, setMenuData] = useState([]);
  const [modification, setModification] = useState(false);

  const dotenv = require("dotenv");
  dotenv.config();

  // console.log("*********menuData******");
  // console.log(menuData[2]);

  // Modif données
  const modificationHandler = () => {
    setModification((modification) => !modification);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  // surveiller les modifications des champs
  const [entree, setEntree] = useState();
  const [plat, setPlat] = useState();
  const [dessert, setDessert] = useState();
  const [descriptionEntree, setDescriptionEntree] = useState();
  const [descriptionPlat, setDescriptionPlat] = useState();
  const [descriptionDessert, setDescriptionDessert] = useState();

  // Vérifier si les champs ont été modifiés et ont une valeur
  const updateEntree =
    entree !== menu.entree && entree !== "" ? entree : menu.entree;
  const updatePlat = plat !== menu.plat && plat !== "" ? plat : menu.plat;
  const updateDessert =
    dessert !== menu.dessert && dessert !== "" ? dessert : menu.dessert;
  const updateDescriptionEntree =
    descriptionEntree !== menu.description_entree && descriptionEntree !== ""
      ? descriptionEntree
      : menu.description_entree;
  const updateDescriptionPlat =
    descriptionPlat !== menu.description_plat && descriptionPlat !== ""
      ? descriptionPlat
      : menu.description_plat;
  const updateDescriptionDessert =
    descriptionDessert !== menu.description_dessert && descriptionDessert !== ""
      ? descriptionDessert
      : menu.description_dessert;

  // Requête GET
  function getMenuData() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch(`${process.env.REACT_APP_API_URL}/api/menu/`, requestOptions)
      .then((response) => response.json())
      .then((result) => setMenuData(result.results))
      .catch((error) => {
        console.log("error requète", error);
        throw error;
      });
  }

  useEffect(() => {
    getMenuData();
  }, [modification]);

  // Requête PUT
  const updateMenuData = (
    entree,
    plat,
    dessert,
    descriptionEntree,
    descriptionPlat,
    descriptionDessert,
    jour_semaine
  ) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/admin/updateMenu`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        entree: entree,
        plat: plat,
        dessert: dessert,
        descriptionEntree: descriptionEntree,
        descriptionPlat: descriptionPlat,
        descriptionDessert: descriptionDessert,
        jour_semaine: jour_semaine,
      }),
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {}, [modification]);

  return (
    <div className="adminPage">
      <h1>Espace Admin</h1>
      <h2>Menu de la semaine</h2>

      <div className="center">
        <h3>Mardi</h3>
        {menuData
          .filter((menu) => menu.jour_semaine === "Mardi")
          .map((menu) => (
            <div key={menu.jour_semaine} className="Day">
              <form onSubmit={submitHandler}>
                <label>Entrée :</label>
                {!modification && <p>{menu.entree}</p>}
                {modification && (
                  <input
                    type="text"
                    value={menu.entree}
                    onChange={(e) => setEntree(e.target.value)}
                    ref={entreeInputRef}
                  />
                )}

                <label>Plat :</label>
                {!modification && <p>{menu.plat}</p>}
                {modification && (
                  <input
                    type="text"
                    value={menu.plat}
                    onChange={(e) => setPlat(e.target.value)}
                    ref={platInputRef}
                  />
                )}

                <label>Dessert :</label>
                {!modification && <p>{menu.dessert}</p>}
                {modification && (
                  <input
                    type="text"
                    value={menu.dessert}
                    onChange={(e) => setDessert(e.target.value)}
                    ref={dessertInputRef}
                  />
                )}
              </form>

              <form onSubmit={submitHandler}>
                <label>Description entrée :</label>
                {!modification && <p>{menu.description_entree}</p>}
                {modification && (
                  <textarea
                    type="text"
                    value={menu.description_entree}
                    onChange={(e) => setDescriptionEntree(e.target.value)}
                    ref={descriEntreeInputRef}
                  />
                )}

                <label>Descritpion plat :</label>
                {!modification && <p>{menu.description_plat}</p>}
                {modification && (
                  <textarea
                    type="text"
                    value={menu.description_plat}
                    onChange={(e) => setDescriptionPlat(e.target.value)}
                    ref={descriPlatInputRef}
                  />
                )}

                <label>Description dessert :</label>
                {!modification && <p>{menu.description_dessert}</p>}
                {modification && (
                  <textarea
                    type="text"
                    value={menu.description_dessert}
                    onChange={(e) => setDescriptionDessert(e.target.value)}
                    ref={descriDessertInputRef}
                  />
                )}

                <div className="buttons">
                  {!modification && (
                    <button
                      onSubmit={submitHandler}
                      onClick={() => {
                        modificationHandler();
                        getMenuData();
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
                        updateMenuData(
                          updateEntree,
                          updatePlat,
                          updateDessert,
                          updateDescriptionEntree,
                          updateDescriptionPlat,
                          updateDescriptionDessert,
                          "Mardi"
                        );
                        getMenuData();
                      }}
                    >
                      Enregistrer modifications
                    </button>
                  )}
                </div>
              </form>
            </div>
          ))}
        <h3>Mercredi</h3>
        {menuData
          .filter((menu) => menu.jour_semaine === "Mercredi")
          .map((menu) => (
            <div key={menu.jour_semaine} className="Day">
              <form onSubmit={submitHandler}>
                <label>Entrée :</label>
                {!modification && <p>{menu.entree}</p>}
                {modification && (
                  <input
                    type="text"
                    defaultValue={menu.entree}
                    onChange={(e) => setEntree(e.target.value)}
                    ref={entreeInputRef}
                  />
                )}
                <label>Plat :</label>
                <input
                  type="text"
                  defaultValue={menu.plat}
                  ref={platInputRef}
                />

                <label>Dessert :</label>
                <input
                  type="text"
                  defaultValue={menu.dessert}
                  ref={dessertInputRef}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée</label>
                <textarea
                  type="text"
                  defaultValue={menu.description_entree}
                  ref={descriEntreeInputRef}
                />

                <label>Descritpion plat :</label>
                <textarea
                  type="text"
                  defaultValue={menu.description_plat}
                  ref={descriPlatInputRef}
                />

                <label>Description dessert :</label>
                <textarea
                  type="text"
                  defaultValue={menu.description_dessert}
                  ref={descriDessertInputRef}
                />

                <div className="buttons">
                  {!modification && (
                    <button
                      onSubmit={submitHandler}
                      onClick={() => {
                        modificationHandler();
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
                        updateMenuData(
                          updateEntree,
                          updatePlat,
                          updateDessert,
                          updateDescriptionEntree,
                          updateDescriptionPlat,
                          updateDescriptionDessert,
                          "Mercredi"
                        );
                      }}
                    >
                      Enregistrer modifications
                    </button>
                  )}
                </div>
              </form>
            </div>
          ))}
        <h3>Jeudi</h3>
        {menuData
          .filter((menu) => menu.jour_semaine === "Jeudi")
          .map((menu) => (
            <div key={menu.jour_semaine} className="Day">
              <form onSubmit={submitHandler}>
                <label>Entrée :</label>
                <input
                  type="text"
                  defaultValue={menu.entree}
                  ref={entreeInputRef}
                />

                <label>Plat :</label>
                <input
                  type="text"
                  defaultValue={menu.plat}
                  ref={platInputRef}
                />

                <label>Dessert :</label>
                <input
                  type="text"
                  defaultValue={menu.dessert}
                  ref={dessertInputRef}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée :</label>
                <textarea
                  type="text"
                  defaultValue={menu.description_entree}
                  ref={descriEntreeInputRef}
                />

                <label>Descritpion plat :</label>
                <textarea
                  type="text"
                  defaultValue={menu.description_plat}
                  ref={descriPlatInputRef}
                />

                <label>Description dessert :</label>
                <textarea
                  type="text"
                  defaultValue={menu.description_dessert}
                  ref={descriDessertInputRef}
                />

                <div className="buttons">
                  <button type="submit" onClick={() => {}}>
                    Enregistrer les modifications
                  </button>
                </div>
              </form>
            </div>
          ))}
        <h3>Vendredi</h3>
        {menuData
          .filter((menu) => menu.jour_semaine === "Vendredi")
          .map((menu) => (
            <div key={menu.jour_semaine} className="Day">
              <form onSubmit={submitHandler}>
                <label>Entrée :</label>
                <input
                  type="text"
                  defaultValue={menu.entree}
                  ref={entreeInputRef}
                />

                <label>Plat :</label>
                <input
                  type="text"
                  defaultValue={menu.plat}
                  ref={platInputRef}
                />

                <label>Dessert :</label>
                <input
                  type="text"
                  defaultValue={menu.dessert}
                  ref={dessertInputRef}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée :</label>
                <textarea
                  type="text"
                  defaultValue={menu.description_entree}
                  ref={descriEntreeInputRef}
                />

                <label>Descritpion plat :</label>
                <textarea
                  type="text"
                  defaultValue={menu.description_plat}
                  ref={descriPlatInputRef}
                />

                <label>Description dessert :</label>
                <textarea
                  type="text"
                  defaultValue={menu.description_dessert}
                  ref={descriDessertInputRef}
                />

                <div className="buttons">
                  <button type="submit" onClick={() => {}}>
                    Enregistrer les modifications
                  </button>
                </div>
              </form>
            </div>
          ))}
        <h3>Samedi</h3>
        {menuData
          .filter((menu) => menu.jour_semaine === "Samedi")
          .map((menu) => (
            <div key={menu.jour_semaine} className="Day">
              <form onSubmit={submitHandler}>
                <label>Entrée :</label>
                <input
                  type="text"
                  defaultValue={menu.entree}
                  ref={entreeInputRef}
                />

                <label>Plat :</label>
                <input
                  type="text"
                  defaultValue={menu.plat}
                  ref={platInputRef}
                />

                <label>Dessert :</label>
                <input
                  type="text"
                  defaultValue={menu.dessert}
                  ref={dessertInputRef}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée :</label>
                <textarea
                  type="text"
                  defaultValue={menu.description_entree}
                  ref={descriEntreeInputRef}
                />

                <label>Descritpion plat :</label>
                <textarea
                  type="text"
                  defaultValue={menu.description_plat}
                  ref={descriPlatInputRef}
                />

                <label>Description dessert :</label>
                <textarea
                  type="text"
                  defaultValue={menu.description_dessert}
                  ref={descriDessertInputRef}
                />

                <div className="buttons">
                  <button type="submit" onClick={() => {}}>
                    Enregistrer les modifications
                  </button>
                </div>
              </form>
            </div>
          ))}
        <h3>Dimanche</h3>
        {menuData
          .filter((menu) => menu.jour_semaine === "Dimanche")
          .map((menu) => (
            <div key={menu.jour_semaine} className="Day">
              <form onSubmit={submitHandler}>
                <label>Entrée :</label>
                <input
                  type="text"
                  defaultValue={menu.entree}
                  ref={entreeInputRef}
                />

                <label>Plat :</label>
                <input
                  type="text"
                  defaultValue={menu.plat}
                  ref={platInputRef}
                />

                <label>Dessert :</label>
                <input
                  type="text"
                  defaultValue={menu.dessert}
                  ref={dessertInputRef}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée :</label>
                <textarea
                  type="text"
                  defaultValue={menu.description_entree}
                  ref={descriEntreeInputRef}
                />

                <label>Descritpion plat :</label>
                <textarea
                  type="text"
                  defaultValue={menu.description_plat}
                  ref={descriPlatInputRef}
                />

                <label>Description dessert :</label>
                <textarea
                  type="text"
                  defaultValue={menu.description_dessert}
                  ref={descriDessertInputRef}
                />
                <div className="buttons">
                  <button type="submit" onClick={() => {}}>
                    Enregistrer les modifications
                  </button>
                </div>
              </form>
            </div>
          ))}
      </div>

      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <button>Retour à l'accueil</button>
      </NavLink>
    </div>
  );
}
