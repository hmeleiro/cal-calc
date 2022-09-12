import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  return (
    <div>
      <h1>Este es un componente</h1>
      <p>Esto es un párrafo</p>
    </div>
  );
}

root.render(
  <div>
    <Greeting />
  </div>
);