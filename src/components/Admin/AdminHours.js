import React, { useEffect, useState } from "react";

export default function AdminHours() {
  const [dataHours, setDataHours] = useState([]);
  const [openLunch, setOpenLunch] = useState();
  const [closeLunch, setCloseLunch] = useState();
  const [openDiner, setOpenDiner] = useState();
  const [closeDiner, setCloseDiner] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  // Requête GET
  function getDataHours() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      mode: "cors",
    };

    return fetch(`${process.env.REACT_APP_API_URL}/api/hours/`, requestOptions)
      .then((response) => response.json())
      .then((result) => setDataHours(result.results))
      .catch((error) => {
        console.log("error requète", error);
        throw error;
      });
  }

  useEffect(() => {
    getDataHours();
  }, []);

  // Ajout d'une condition pour afficher un message d'attente
  if (dataHours.length === 0) {
    return <div>Chargement des données en cours...</div>;
  }

  // Requête PUT
  const updateHoursData = (openLunch, closeLunch, openDiner, closeDiner) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/hours/update`, {
      method: "PUT",
      // headers: {
      //   "Content-Type": "application/json, Authorization",
      // },
      mode: "cors",
      body: JSON.stringify({
        open_lunch: openLunch,
        close_lunch: closeLunch,
        open_diner: openDiner,
        close_diner: closeDiner,
      }),
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  // Mettre le contenu du composant en dehors de la fonction pour éviter un map
  const timeOpenContent = (
    <div className="timeContainer">
      <h2>Modifier les horaires</h2>

      <h3>Du mardi au jeudi</h3>
      <form onSubmit={submitHandler}>
        <div className="hours">
          <label>Heure d'ouverture déjeuner</label>
          <input
            type="text"
            defaultValue={dataHours.length > 0 && `${dataHours[0].open_lunch}`}
            onChange={(e) => setOpenLunch(e.target.value)}
          />
        </div>

        <div className="hours">
          <label>Heure fermeture déjeuner</label>
          <input
            type="text"
            defaultValue={dataHours.length > 0 && `${dataHours[0].close_lunch}`}
            onChange={(e) => setCloseLunch(e.target.value)}
          />
        </div>

        <div className="hours">
          <label>Heure d'ouverture dîner</label>
          <input
            type="text"
            defaultValue={dataHours.length > 0 && `${dataHours[0].open_diner}`}
            onChange={(e) => setOpenDiner(e.target.value)}
          />
        </div>

        <div className="hours">
          <label>Heure fermeture dîner</label>
          <input
            type="text"
            defaultValue={dataHours.length > 0 && `${dataHours[0].close_diner}`}
            onChange={(e) => setCloseDiner(e.target.value)}
          />
        </div>
      </form>

      <h3>Du vendredi au dimanche</h3>

      <form onSubmit={submitHandler}>
        <div className="hours">
          <label>Heures d'ouverture déjeuner</label>
          <input
            type="text"
            defaultValue={dataHours.length > 1 && `${dataHours[1].open_lunch}`}
          />
        </div>

        <div className="hours">
          <label>Heures fermeture déjeuner</label>
          <input
            type="text"
            defaultValue={dataHours.length > 1 && `${dataHours[1].close_lunch}`}
          />
        </div>

        <div className="hours">
          <label>Heure d'ouverture dîner</label>
          <input
            type="text"
            defaultValue={dataHours.length > 1 && `${dataHours[1].open_diner}`}
          />
        </div>

        <div className="hours">
          <label>Heure fermeture dîner</label>
          <input
            type="text"
            defaultValue={dataHours.length > 1 && `${dataHours[1].close_diner}`}
          />
        </div>
      </form>
      <button
        type="submit"
        onClick={() => {
          updateHoursData(openLunch, closeLunch, openDiner, closeDiner);
        }}
      >
        Enregistrer modifications
      </button>
    </div>
  );

  return <div className="adminHours">{timeOpenContent}</div>;
}
