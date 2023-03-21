import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function AdminPage() {
  const entreeInputRef = useRef();
  const platInputRef = useRef();
  const dessertInputRef = useRef();
  const descriEntreeInputRef = useRef();
  const descriPlatInputRef = useRef();
  const descriDessertInputRef = useRef();
  const [menuData, setMenuData] = useState([]);
  const [modification, setModification] = useState(false);

  const [menuSemaine, setMenuSemaine] = useState([
    {
      jour: "Mardi",
      entree: "",
      plat: "",
      dessert: "",
      descriptionEntree: "",
      descriptionPlat: "",
      descriptionDessert: "",
      isEditing: false,
    },
  ]);

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(menuSemaine);
  };

  const handleChange = (event, menuJour) => {
    const { name, value } = event.target;
    setMenuSemaine((menuSemaine) =>
      menuSemaine.map((menu) => {
        if (menu.jour === menuJour) {
          return { ...menu, [name]: value };
        } else {
          return menu;
        }
      })
    );
  };

  const handleEdit = (menuJour) => {
    setMenuSemaine((menuSemaine) =>
      menuSemaine.map((menu) => {
        if (menu.jour === menuJour) {
          return { ...menu, isEditing: true };
        } else {
          return { ...menu, isEditing: false };
        }
      })
    );
  };

  const handleFinishEditing = (menuJour) => {
    setRows((menuSemaine) =>
      menuSemaine.map((menu) => {
        if (menu.jour === menuJour) {
          return { ...menu, isEditing: false };
        } else {
          return menu;
        }
      })
    );
  };

  // Modif données
  const modificationHandler = () => {
    setModification((modification) => !modification);
    console.log("**************modif*******");
    console.log(modification);
  };

  // surveiller les modifications des champs
  const [entree, setEntree] = useState();
  const [plat, setPlat] = useState();
  const [dessert, setDessert] = useState();
  const [descriptionEntree, setDescriptionEntree] = useState();
  const [descriptionPlat, setDescriptionPlat] = useState();
  const [descriptionDessert, setDescriptionDessert] = useState();
  const [jour_semaine, setJour_semaine] = useState();

  console.log("****entree*********");
  console.log(entree);

  // Requête GET
  function getMenuData() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch("http://localhost:5000/api/menu/", requestOptions)
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
    fetch("http://localhost:5000/api/admin/updateMenu", {
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

  return (
    <div className="adminPage">
      <h1>Espace Admin</h1>
      <h2>Menu de la semaine</h2>

      <div className="center">
        {<h3>Mardi</h3>}
        {menuData
          .filter((menu) => menu.jour_semaine === "Mardi")
          .map((menu) => (
            <div key={menu.jour_semaine} className="Day">
              <form>
                <label>Entrée :</label>
                {!modification && <p>{menu.entree}</p>}
                {modification && (
                  <input
                    type="text"
                    ref={entreeInputRef}
                    Value={menu.entree}
                    onChange={(e) => setEntree(e.target.value)}
                  />
                )}
                <label>Plat :</label>
                <input
                  type="text"
                  ref={platInputRef}
                  defaultValue={menu.plat}
                  onChange={(e) => setPlat(e.target.value)}
                />

                <label>Dessert :</label>
                <input
                  type="text"
                  ref={dessertInputRef}
                  defaultValue={menu.dessert}
                  onChange={(e) => setDessert(e.target.value)}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée :</label>
                <textarea
                  type="text"
                  ref={descriEntreeInputRef}
                  defaultValue={menu.description_entree}
                  onChange={(e) => setDescriptionEntree(e.target.value)}
                />

                <label>Descritpion plat :</label>
                <textarea
                  type="text"
                  ref={descriPlatInputRef}
                  defaultValue={menu.description_plat}
                  onChange={(e) => setDescriptionPlat(e.target.value)}
                />

                <label>Description dessert :</label>
                <textarea
                  type="text"
                  ref={descriDessertInputRef}
                  defaultValue={menu.description_dessert}
                  onChange={(e) => setDescriptionDessert(e.target.value)}
                />

                <div className="buttons">
                  <button
                    type="submit"
                    onClick={() => {
                      modificationHandler();
                      updateMenuData(
                        entree,
                        plat,
                        dessert,
                        descriptionEntree,
                        descriptionPlat,
                        descriptionDessert,
                        jour_semaine
                      );
                    }}
                  >
                    {!modification ? "Modifier" : "Enregistrer modification"}
                  </button>
                </div>
              </form>
            </div>
          ))}
        <h3>Mercredi</h3>
        {menuData
          .filter((menu) => menu.jour_semaine === "Mercredi")
          .map((menu) => (
            <div key={menu.jour_semaine} className="Day">
              <form>
                <label>Entrée :</label>
                <input
                  type="text"
                  ref={entreeInputRef}
                  defaultValue={menu.entree}
                />

                <label>Plat :</label>
                <input
                  type="text"
                  ref={platInputRef}
                  defaultValue={menu.plat}
                />

                <label>Dessert :</label>
                <input
                  type="text"
                  ref={dessertInputRef}
                  defaultValue={menu.dessert}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée</label>
                <textarea
                  type="text"
                  ref={descriEntreeInputRef}
                  defaultValue={menu.description_entree}
                />

                <label>Descritpion plat :</label>
                <textarea
                  type="text"
                  ref={descriPlatInputRef}
                  defaultValue={menu.description_plat}
                />

                <label>Description dessert :</label>
                <textarea
                  type="text"
                  ref={descriDessertInputRef}
                  defaultValue={menu.description_dessert}
                />

                <div className="buttons">
                  <button type="submit" onClick={() => {}}>
                    Enregistrer les modifications
                  </button>
                </div>
              </form>
            </div>
          ))}
        <h3>Jeudi</h3>
        {menuData
          .filter((menu) => menu.jour_semaine === "Jeudi")
          .map((menu) => (
            <div key={menu.jour_semaine} className="Day">
              <form>
                <label>Entrée :</label>
                <input
                  type="text"
                  ref={entreeInputRef}
                  defaultValue={menu.entree}
                />

                <label>Plat :</label>
                <input
                  type="text"
                  ref={platInputRef}
                  defaultValue={menu.plat}
                />

                <label>Dessert :</label>
                <input
                  type="text"
                  ref={dessertInputRef}
                  defaultValue={menu.dessert}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée :</label>
                <textarea
                  type="text"
                  ref={descriEntreeInputRef}
                  defaultValue={menu.description_entree}
                />

                <label>Descritpion plat :</label>
                <textarea
                  type="text"
                  ref={descriPlatInputRef}
                  defaultValue={menu.description_plat}
                />

                <label>Description dessert :</label>
                <textarea
                  type="text"
                  ref={descriDessertInputRef}
                  defaultValue={menu.description_dessert}
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
              <form>
                <label>Entrée :</label>
                <input
                  type="text"
                  ref={entreeInputRef}
                  defaultValue={menu.entree}
                />

                <label>Plat :</label>
                <input
                  type="text"
                  ref={platInputRef}
                  defaultValue={menu.plat}
                />

                <label>Dessert :</label>
                <input
                  type="text"
                  ref={dessertInputRef}
                  defaultValue={menu.dessert}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée :</label>
                <textarea
                  type="text"
                  ref={descriEntreeInputRef}
                  defaultValue={menu.description_entree}
                />

                <label>Descritpion plat :</label>
                <textarea
                  type="text"
                  ref={descriPlatInputRef}
                  defaultValue={menu.description_plat}
                />

                <label>Description dessert :</label>
                <textarea
                  type="text"
                  ref={descriDessertInputRef}
                  defaultValue={menu.description_dessert}
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
              <form>
                <label>Entrée :</label>
                <input
                  type="text"
                  ref={entreeInputRef}
                  defaultValue={menu.entree}
                />

                <label>Plat :</label>
                <input
                  type="text"
                  ref={platInputRef}
                  defaultValue={menu.plat}
                />

                <label>Dessert :</label>
                <input
                  type="text"
                  ref={dessertInputRef}
                  defaultValue={menu.dessert}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée :</label>
                <textarea
                  type="text"
                  ref={descriEntreeInputRef}
                  defaultValue={menu.description_entree}
                />

                <label>Descritpion plat :</label>
                <textarea
                  type="text"
                  ref={descriPlatInputRef}
                  defaultValue={menu.description_plat}
                />

                <label>Description dessert :</label>
                <textarea
                  type="text"
                  ref={descriDessertInputRef}
                  defaultValue={menu.description_dessert}
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
              <form>
                <label>Entrée :</label>
                <input
                  type="text"
                  ref={entreeInputRef}
                  defaultValue={menu.entree}
                />

                <label>Plat :</label>
                <input
                  type="text"
                  ref={platInputRef}
                  defaultValue={menu.plat}
                />

                <label>Dessert :</label>
                <input
                  type="text"
                  ref={dessertInputRef}
                  defaultValue={menu.dessert}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée :</label>
                <textarea
                  type="text"
                  ref={descriEntreeInputRef}
                  defaultValue={menu.description_entree}
                />

                <label>Descritpion plat :</label>
                <textarea
                  type="text"
                  ref={descriPlatInputRef}
                  defaultValue={menu.description_plat}
                />

                <label>Description dessert :</label>
                <textarea
                  type="text"
                  ref={descriDessertInputRef}
                  defaultValue={menu.description_dessert}
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
