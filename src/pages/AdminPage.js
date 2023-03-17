import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const entreeInputRef = useRef();
  const platInputRef = useRef();
  const dessertInputRef = useRef();
  const descriEntreeInputRef = useRef();
  const descriPlatInputRef = useRef();
  const descriDessertInputRef = useRef();
  const [menuData, setMenuData] = useState([]);
  const [datas, setDatas] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEntree = entreeInputRef.current.value;
    const enteredPlat = platInputRef.current.value;
    const enteredDessert = dessertInputRef.current.value;
    const enteredDesEntree = descriEntreeInputRef.current.value;
    const enteredDesPlat = descriPlatInputRef.current.value;
    const enteredDesDessert = descriDessertInputRef.current.value;

    // Control input not empty

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

    // Se connecter et récupérer userId et token authentification
    const url = "http://localhost:5000/api/admin/updateMenu";

    const fetchHandler = async () => {
      try {
        const response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify({
            entree: enteredEntree,
            plat: enteredPlat,
            dessert: enteredDessert,
            descriptionEntree: enteredDesEntree,
            descriptionPlat: enteredDesPlat,
            descriptionDessert: enteredDesDessert,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const dataResponse = await response.json();
        setDatas(dataResponse);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHandler();
  };

  console.log(datas);

  useEffect(() => {
    const fetchMenuData = async () => {
      const response = await fetch("http://localhost:5000/api/menu/");
      const data = await response.json();
      setMenuData(data.results);
      // console.log(response.body);
    };
    fetchMenuData();
  });

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
              <form>
                <label>Entrée</label>
                <input
                  type="text"
                  ref={entreeInputRef}
                  placeholder={menu.entree}
                />

                <label>Plat</label>
                <input type="text" ref={platInputRef} placeholder={menu.plat} />

                <label>Dessert</label>
                <input
                  type="text"
                  ref={dessertInputRef}
                  placeholder={menu.dessert}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée</label>
                <textarea
                  type="text"
                  ref={descriEntreeInputRef}
                  placeholder={menu.description_entree}
                />

                <label>Descritpion plat</label>
                <textarea
                  type="text"
                  ref={descriPlatInputRef}
                  placeholder={menu.description_plat}
                />

                <label>Description dessert</label>
                <textarea
                  type="text"
                  ref={descriDessertInputRef}
                  placeholder={menu.description_dessert}
                />

                <div className="buttons">
                  <button type="submit" onClick={() => {}}>
                    Enregistrer les modifications
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
                <label>Entrée</label>
                <input
                  type="text"
                  ref={entreeInputRef}
                  placeholder={menu.entree}
                />

                <label>Plat</label>
                <input type="text" ref={platInputRef} placeholder={menu.plat} />

                <label>Dessert</label>
                <input
                  type="text"
                  ref={dessertInputRef}
                  placeholder={menu.dessert}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée</label>
                <textarea
                  type="text"
                  ref={descriEntreeInputRef}
                  placeholder={menu.description_entree}
                />

                <label>Descritpion plat</label>
                <textarea
                  type="text"
                  ref={descriPlatInputRef}
                  placeholder={menu.description_plat}
                />

                <label>Description dessert</label>
                <textarea
                  type="text"
                  ref={descriDessertInputRef}
                  placeholder={menu.description_dessert}
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
                <label>Entrée</label>
                <input
                  type="text"
                  ref={entreeInputRef}
                  placeholder={menu.entree}
                />

                <label>Plat</label>
                <input type="text" ref={platInputRef} placeholder={menu.plat} />

                <label>Dessert</label>
                <input
                  type="text"
                  ref={dessertInputRef}
                  placeholder={menu.dessert}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée</label>
                <textarea
                  type="text"
                  ref={descriEntreeInputRef}
                  placeholder={menu.description_entree}
                />

                <label>Descritpion plat</label>
                <textarea
                  type="text"
                  ref={descriPlatInputRef}
                  placeholder={menu.description_plat}
                />

                <label>Description dessert</label>
                <textarea
                  type="text"
                  ref={descriDessertInputRef}
                  placeholder={menu.description_dessert}
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
                <label>Entrée</label>
                <input
                  type="text"
                  ref={entreeInputRef}
                  placeholder={menu.entree}
                />

                <label>Plat</label>
                <input type="text" ref={platInputRef} placeholder={menu.plat} />

                <label>Dessert</label>
                <input
                  type="text"
                  ref={dessertInputRef}
                  placeholder={menu.dessert}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée</label>
                <textarea
                  type="text"
                  ref={descriEntreeInputRef}
                  placeholder={menu.description_entree}
                />

                <label>Descritpion plat</label>
                <textarea
                  type="text"
                  ref={descriPlatInputRef}
                  placeholder={menu.description_plat}
                />

                <label>Description dessert</label>
                <textarea
                  type="text"
                  ref={descriDessertInputRef}
                  placeholder={menu.description_dessert}
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
                <label>Entrée</label>
                <input
                  type="text"
                  ref={entreeInputRef}
                  placeholder={menu.entree}
                />

                <label>Plat</label>
                <input type="text" ref={platInputRef} placeholder={menu.plat} />

                <label>Dessert</label>
                <input
                  type="text"
                  ref={dessertInputRef}
                  placeholder={menu.dessert}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée</label>
                <textarea
                  type="text"
                  ref={descriEntreeInputRef}
                  placeholder={menu.description_entree}
                />

                <label>Descritpion plat</label>
                <textarea
                  type="text"
                  ref={descriPlatInputRef}
                  placeholder={menu.description_plat}
                />

                <label>Description dessert</label>
                <textarea
                  type="text"
                  ref={descriDessertInputRef}
                  placeholder={menu.description_dessert}
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
                <label>Entrée</label>
                <input
                  type="text"
                  ref={entreeInputRef}
                  placeholder={menu.entree}
                />

                <label>Plat</label>
                <input type="text" ref={platInputRef} placeholder={menu.plat} />

                <label>Dessert</label>
                <input
                  type="text"
                  ref={dessertInputRef}
                  placeholder={menu.dessert}
                />
              </form>
              <form onSubmit={submitHandler}>
                <label>Description entrée</label>
                <textarea
                  type="text"
                  ref={descriEntreeInputRef}
                  placeholder={menu.description_entree}
                />

                <label>Descritpion plat</label>
                <textarea
                  type="text"
                  ref={descriPlatInputRef}
                  placeholder={menu.description_plat}
                />

                <label>Description dessert</label>
                <textarea
                  type="text"
                  ref={descriDessertInputRef}
                  placeholder={menu.description_dessert}
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
