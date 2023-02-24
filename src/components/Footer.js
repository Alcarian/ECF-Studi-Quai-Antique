import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <h2>Quai Antique</h2>
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat esse
          rerum in minus odit itaque voluptas provident aliquam vel est,
          consequuntur porro laboriosam, iste quos. Nemo cupiditate ipsa iusto
          omnis!
        </p>
      </div>
      <h2>Nous suivre :</h2>
      <div className="social">
        <a href="https://fr-fr.facebook.com/">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/?hl=fr">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://twitter.com/">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://fr.linkedin.com/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <h3>Développé par Florian Alcaraz / Alcarian</h3>
    </div>
  );
}
