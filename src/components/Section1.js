import React from "react";
import plate from "../img/ic-plate.png";
import avatar1 from "../img/avatar-01.jpg";

const Section1 = () => {
  return (
    <div className="section-1">
      <h2>Le mot du Chef</h2>
      <span>
        <img src={plate} alt="icone" />
      </span>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolore.
        Molestiae dolor praesentium illum aliquid iusto error eos facere
        excepturi, id atque earum, amet modi. Libero aperiam ducimus sapiente
        dolorum et consectetur dolorem quasi accusamus ea doloremque suscipit
        modi officia corrupti necessitatibus corporis nostrum dolores, laborum
        voluptate nam recusandae sint.
      </p>
      <img src={avatar1} alt="chef" />
      <h3>Jaimes Lafondue</h3>
    </div>
  );
};

export default Section1;
