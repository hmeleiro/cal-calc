import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
// import { TaskCard } from "./Task";
// import { Button } from "./Button";
// import { Post } from "./Posts";
// import { Saludar } from "./Saludar.js";
// import { Greeting, UserCard } from "./Greeting";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(function () {
    console.log("render");
  }, [counter]);

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert("El mensaje es: " + mensaje);
        }}
      >
        Save
      </button>

      <hr />
      <h1>Counter: {counter} </h1>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
