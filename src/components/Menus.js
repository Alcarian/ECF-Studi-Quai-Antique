import { useState } from "react";
import plate from "../img/ic-plate.png";
import Diner from "./Diner";
import Drinks from "./Drinks";
import Lunch from "./Lunch";

export default function Menus() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="menus" id="menu">
      <h2>Découvrez nos menus</h2>
      <span>
        <img src={plate} alt="icone" />
      </span>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Déjeuner
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Dîner
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Boissons
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div>
              <Lunch />
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div>
              <Diner />
            </div>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <div>
              <Drinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
