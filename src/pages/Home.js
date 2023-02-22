import React from "react";
import Header from "../components/Header";
import Menus from "../components/Menus";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <Section1 />
        <Section2 />
      </div>
      <main>
        <Menus />
      </main>
      <div className="top">
        <a href="#accueil">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
