import React, { useEffect, useState } from "react";

export default function AdminBooking() {
  const [bookingData, setBookingData] = useState([]);
  const [modification, setModification] = useState(false);

  // Modif données
  const modificationHandler = () => {
    setModification((modification) => !modification);
  };

  function getBookingData() {
    const requestOptions = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(
      `${process.env.REACT_APP_API_URL}/api/booking/getBooking`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setBookingData(result.results))
      .catch((error) => {
        console.log("error requète", error);
        throw error;
      });
  }

  useEffect(() => {
    getBookingData();
  }, [modification]);

  const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    return newDate;
  };

  function deleteBooking(id) {
    const requestOptions = {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json, Authorization",
      },
    };

    return fetch(
      `${process.env.REACT_APP_API_URL}/api/booking/deleteBooking?id=${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => {
        console.log("error requète", error);
        throw error;
      });
  }

  return (
    <div className="adminBooking">
      <ul>
        {bookingData &&
          bookingData.length > 0 &&
          bookingData[0].map((booking) => (
            <li key={booking.id}>
              <div>
                <p>Nom : {booking.nom}</p>
                <p>Nombre de persones : {booking.NbrPersonnes}</p>
                <p>
                  Date et horaire de réservation : {dateFormater(booking.date)}{" "}
                  - {booking.heures}
                </p>
                <p>Numéro de téléphone : {booking.Num_téléphone}</p>
              </div>
              <div>
                <button
                  onClick={() => {
                    deleteBooking(booking.id);
                    modificationHandler();
                    getBookingData().then(
                      (data) =>
                        data && data.results && setBookingData(data.results)
                    );
                  }}
                >
                  X
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
