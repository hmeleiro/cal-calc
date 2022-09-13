import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import { TaskCard } from "./Task";
// import { Button } from "./Button";
// import { Post } from "./Posts";
// import { Saludar } from "./Saludar.js";
// import { Greeting, UserCard } from "./Greeting";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [ mensaje, setMensaje] = useState('');

  return (
    <div>
    <input onChange={e => setMensaje(e.target.value)}/>
    <button onClick={() => {
      alert("El mensaje es: " + mensaje)
    }}>
      Save
    </button>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
