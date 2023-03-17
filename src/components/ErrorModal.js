import React from "react";

export default function ErrorModal(props) {
  return (
    <div className="errorModal">
      <header>
        <h2>{props.title}</h2>
      </header>
      <div className="errorContent">
        <p>{props.message}</p>
      </div>
      <footer>
        <button onClick={props.onConfirm}>OK</button>
      </footer>
    </div>
  );
}
