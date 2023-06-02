import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Store/AuthContext";
import SuppBooking from "./SuppBooking";

export default function AdminBooking(props) {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const [bookingData, setBookingData] = useState([]);
  const [modification, setModification] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [bookingIdToDelete, setBookingIdToDelete] = useState(null);

  const handleShowConfirm = (bookingId) => {
    setBookingIdToDelete(bookingId);
    setShowConfirm(true);
  };

  const handleCloseConfirm = (bookingId) => {
    setBookingIdToDelete(null);
    setShowConfirm(false);
  };

  // Modif données
  // const modificationHandler = () => {
  //   setModification((modification) => !modification);
  // };

  // Rafraîchir les données
  const refreshBookingData = () => {
    getBookingData().then((data) => {
      if (data && data.results) {
        setBookingData(data.results);
      }
    });
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

  return (
    <div className="adminBooking" id="adminBooking">
      <ul>
        <h2>Supprimer réservations</h2>
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
                {isLoggedIn && (
                  <button
                    onClick={() => {
                      handleShowConfirm(booking.id);
                    }}
                  >
                    X
                  </button>
                )}
                {showConfirm && (
                  <SuppBooking
                    onClose={handleCloseConfirm}
                    bookingId={bookingIdToDelete}
                    refreshBookingData={refreshBookingData}
                  />
                )}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
