import React from "react";
import Header from "../components/Header";
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
    </div>
  );
};

export default Home;
