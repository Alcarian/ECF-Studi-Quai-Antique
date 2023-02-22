import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import plate from "../img/ic-plate.png";
import Diner from "./Diner";
import Drinks from "./Drinks";
import Lunch from "./Lunch";

export default function Menus() {
  return (
    <div className="menus" id="menu">
      <h2>Découvrez nos menus</h2>
      <span>
        <img src={plate} alt="icone" />
      </span>
      <div className="navMenu">
        <NavLink
          to="/Lunch"
          className={(lunch) => (lunch.isActive ? "nav-active" : "")}
        >
          <button>Déjeuner</button>
        </NavLink>

        <NavLink
          to="/Diner"
          className={(diner) => (diner.isActive ? "nav-active" : "")}
        >
          <button>Dîner</button>
        </NavLink>

        <NavLink
          to="/Drinks"
          className={(drink) => (drink.isActive ? "nav-active" : "")}
        >
          <button>Drinks</button>
        </NavLink>
      </div>
      <div className="card">
        <div className="lunchMenu">
          <Lunch />
        </div>
        <div className="dinerMenu">
          <Diner />
        </div>
        <div className="drinkMenu">
          <Drinks />
        </div>
      </div>
    </div>
  );
}
