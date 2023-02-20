import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import table1 from "../img/table1.jpg";
import table2 from "../img/table2.jpg";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const slideImages = [
  {
    url: { table1 },
    caption: "Slide1",
  },

  {
    url: { table2 },
    caption: "Slide2",
  },

  {
    url: "frontend-resto/src/img/img3.jpg",
    caption: "Slide3",
  },

  {
    url: "frontend-resto/src/img/img4.jpg",
    caption: "Slide4",
  },

  {
    url: "frontend-resto/src/img/img5.jpg",
    caption: "Slide5",
  },
];

const Section2 = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Section2;
