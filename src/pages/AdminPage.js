import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminMenu from "../components/Admin/AdminMenu";
import AdminHours from "../components/Admin/AdminHours";
import AdminBooking from "../components/Admin/AdminBooking";

export default function AdminPage() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="adminPage">
      <h1>Espace Admin</h1>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Menu
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Horaires
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Réservations
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div>
              <AdminMenu />
            </div>
          </div>
          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div>
              <AdminHours />
            </div>
          </div>
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <div>
              <AdminBooking />
            </div>
          </div>
        </div>
      </div>
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <button>Retour à l'accueil</button>
      </NavLink>
    </div>
  );
}
