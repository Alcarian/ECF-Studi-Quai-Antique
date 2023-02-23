import React from "react";

export default function Drinks() {
  return (
    <div className="drinksCard">
      <h1>Nos Apéritifs</h1>
      <h2>Softs</h2>
      <div className="order-boissons">
        <div className="boissons">
          <p>Verre d'eau</p>
          <h3>1€</h3>
        </div>
        <div className="boissons">
          <p>Coca Cola</p>
          <h3>2€</h3>
        </div>
        <div className="boissons">
          <p>Orangina</p>
          <h3>2€</h3>
        </div>
        <div className="boissons">
          <p>Ice Tea</p>
          <h3>2€</h3>
        </div>
      </div>
      <h2>Alcools</h2>
      <div className="order-boissons">
        <div className="boissons">
          <p>Bières</p>
          <h3>2€</h3>
        </div>
        <div className="boissons">
          <p>Whisky</p>
          <h3>3€</h3>
        </div>
        <div className="boissons">
          <p>Ricard</p>
          <h3>2€</h3>
        </div>
        <div className="boissons">
          <p>Martini</p>
          <h3>2€</h3>
        </div>
      </div>
      <h1>Nos Vins</h1>
      <h2>Nos vins Blanc</h2>
      <div className="order-boissons">
        <div className="boissons">
          <p>Roussette de Savoie (2018)</p>
          <h3>4€</h3>
        </div>
        <div className="boissons">
          <p>Savoie Chignin (2018)</p>
          <h3>5€</h3>
        </div>
        <div className="boissons">
          <p>Savoie (chardonnay 2018)</p>
          <h3>4€</h3>
        </div>
      </div>
      <h2>Nos vins Rouge</h2>
      <div className="order-boissons">
        <div className="boissons">
          <p>Mondeuse La rouge (2010)</p>
          <h3>6€</h3>
        </div>
        <div className="boissons">
          <p>Pinot noir (2020)</p>
          <h3>5€</h3>
        </div>
        <div className="boissons">
          <p>Gamay (2018)</p>
          <h3>4€</h3>
        </div>
      </div>
      <h1>Nos Digestifs</h1>
      <div className="order-boissons">
        <div className="boissons">
          <p>Génépi</p>
          <h3>8€</h3>
        </div>
        <div className="boissons">
          <p>Chartreuse verte</p>
          <h3>8€</h3>
        </div>
        <div className="boissons">
          <p>Chartreuse jaune</p>
          <h3>8€</h3>
        </div>
        <div className="boissons">
          <p>Chivas</p>
          <h3>9€</h3>
        </div>
      </div>
      <h1>A votre santé !</h1>
      <h4>Ouvrez la carte pour plus de précisions :</h4>
      <button>La carte</button>
    </div>
  );
}
