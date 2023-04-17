import React, { useEffect, useState } from "react";
import plate from "../img/ic-plate.png";

export default function TimeOpen() {
  const [hoursData, setHoursData] = useState([]);

  function getHoursData() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      mode: "cors",
    };

    return fetch(`${process.env.REACT_APP_API_URL}/api/hours/`, requestOptions)
      .then((response) => response.json())
      .then((result) => setHoursData(result.results))
      .catch((error) => {
        console.log("error requète", error);
        throw error;
      });
  }

  useEffect(() => {
    getHoursData();
  }, []);

  return (
    <div className="timeOpen">
      {hoursData.map((hours) => (
        <div className="timeContainer">
          <div key={hours.id} className="border">
            <h2>Horaires d'ouverture</h2>
            <span>
              <img src={plate} alt="icone" />
            </span>
            <h3>Du mardi au jeudi</h3>
            <p>
              {hoursData[0].open_lunch} - {hoursData[0].close_lunch} (Déjeuner)
            </p>
            <p>
              {hoursData[0].open_diner} - {hoursData[0].close_diner} (Dîner)
            </p>
            <h3>Du vendredi au dimanche</h3>
            <p>
              {hoursData[1].open_lunch} - {hoursData[1].close_lunch} (Déjeuner)
            </p>
            <p>
              {hoursData[1].open_diner} - {hoursData[1].close_diner} (Diner)
            </p>
            <h3 className="phone">+04 79 01 02 03</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
