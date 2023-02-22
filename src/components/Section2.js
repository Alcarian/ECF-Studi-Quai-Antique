import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import table1 from "../img/table1.jpg";
import table2 from "../img/table2.jpg";
import table3 from "../img/table3.jpg";
import charcuterie4 from "../img/charcuterie4.jpg";
import poulet5 from "../img/poulet5.jpg";

const images = [
  { id: 1, URL: JSON.parse(JSON.stringify(table1)) },
  { id: 2, URL: JSON.parse(JSON.stringify(table2)) },
  { id: 3, URL: JSON.parse(JSON.stringify(table3)) },
  { id: 4, URL: JSON.parse(JSON.stringify(charcuterie4)) },
  { id: 5, URL: JSON.parse(JSON.stringify(poulet5)) },
];

export default function Section2() {
  return (
    <div className="slide-container" id="diapo">
      <Slide>
        {images.map((image) => (
          <div key={image.id}>
            <img
              className="imgStyle"
              src={image.URL}
              alt={`images ${image.id}`}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
}
