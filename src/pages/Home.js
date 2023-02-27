import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Menus from "../components/Menus";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import TimeOpen from "../components/TimeOpen";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="sections">
        <Section1 />
        <Section2 />
      </div>
      <main>
        <Menus />
      </main>
      <div className="timeMenus">
        <TimeOpen />
        <Form />
      </div>
      <Footer />
      <div className="top">
        <a href="#accueil">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
