import React from "react";

export default function SuppBooking(props) {
  const { onClose, bookingId, refreshBookingData } = props;
  const closeModal = () => {
    props.onClose();
  };

  // Requête DELETE
  function deleteBooking() {
    const requestOptions = {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(
      `${process.env.REACT_APP_API_URL}/api/booking/deleteBooking?id=${bookingId}`,
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => {
        console.log("error requète", error);
        throw error;
      });
  }

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>X</button>
        <h2>Voulez-vous vraiment supprimer cette réservation?</h2>
        <button
          onSubmit={submitHandler}
          onClick={() => {
            deleteBooking().then(() => {
              refreshBookingData();
              closeModal();
            });
          }}
        >
          <a href="#adminBooking">Supprimer</a>
        </button>
      </div>
    </div>
  );
}
