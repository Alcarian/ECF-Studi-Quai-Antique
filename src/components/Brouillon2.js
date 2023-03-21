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



//******************************************************* */

import React, { useRef, useState } from "react";
import plate from "../img/ic-plate.png";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";

export default function Form() {
  // Reservation
  const personInputRef = useRef();
  const dateInputRef = useRef();
  const timeInputRef = useRef();
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const [dataUpdate, setDataUpdate] = useState();

  // modal
  const [showModal, setShowModal] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [error, setError] = useState(null);

  if (error) {
    console.log("true");
  } else {
    console.log("false");
  }

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModalRegister = () => {
    setShowModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setShowModalRegister(false);
  };

  // End modal

  const submitHandler = (event) => {
    event.preventDefault();
  };

  // Requête POST

  function makeBooking() {
    const enteredPerson = personInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredTime = timeInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    // mettre a jour le state
    setDataUpdate({
      ...dataUpdate,
      NbrPersonnes: enteredPerson,
      date: enteredDate,
      heures: enteredTime,
      nom: enteredName,
      Num_téléphone: enteredPhone,
      email: enteredEmail,
    });

    // Création objet
    const dataUpdateSend = {
      NbrPersonnes: enteredPerson,
      date: enteredDate,
      heures: enteredTime,
      nom: enteredName,
      Num_téléphone: enteredPhone,
      email: enteredEmail,
    };

    if (
      enteredEmail.trim().length === 0 ||
      enteredPerson.trim().length === 0 ||
      enteredDate.trim().length === 0 ||
      enteredTime.trim().lenght === 0 ||
      enteredName.trim().length === 0 ||
      enteredPhone.trim().length === 0
    ) {
      setError({
        title: "Un ou plusieurs champs sont vide",
      });
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const data = dataUpdateSend;
    console.log("*****DATA******");
    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    fetch("http://localhost:5000/api/booking/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    // Clear input
    personInputRef.current.value = "";
    dateInputRef.current.value = "";
    timeInputRef.current.value = "";
    nameInputRef.current.value = "";
    phoneInputRef.current.value = "";
    emailInputRef.current.value = "";
  }

  return (
    <div className="form-infos" id="résa">
      <div className="form-infos-container">
        <div className="borderForm">
          <h2>Réservation</h2>
          <div>
            <button className="btn1" onClick={handleShowModal}>
              Connexion ?
            </button>
            {showModal && (
              <ModalLogin className="modalVisible" onClose={handleCloseModal} />
            )}
          </div>
          <div>
            <button className="btn2" onClick={handleShowModalRegister}>
              Devenir client ?
            </button>
            {showModalRegister && (
              <ModalRegister
                className="modalVisible"
                onClose={handleCloseModalRegister}
              />
            )}
          </div>
          <h3>RESERVER EN LIGNE</h3>
          <span>
            <img src={plate} alt="icone" />
          </span>
          <form onSubmit={submitHandler} className="form-inputs">
            <select name="" id="people" ref={personInputRef}>
              <option value="">Personnes</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <input
              type="date"
              ref={dateInputRef}
              id="booking-date"
              name="booking-date"
              defaultValue="2023-02-24"
              min="2023-02-24"
              max="2024-12-31"
            />
            <input
              type="time"
              ref={timeInputRef}
              id="booking-time"
              name="booking-time"
              min="12:00"
              max="23:00"
            />
            <input type="text" placeholder="Name" ref={nameInputRef} />
            <input type="text" placeholder="Phone" ref={phoneInputRef} />
            <input
              type="email"
              placeholder="Email"
              ref={emailInputRef}
              required
            />

            <button
              type="submit"
              onClick={() => makeBooking()}
              className="btnReservation"
            >
              Réserver
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
