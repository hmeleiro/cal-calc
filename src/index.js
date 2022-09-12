import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
// import Product, {NavBar} from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.2, 1212.2]}
      address={{ street: "123 Main street", city: "New York" }}
      greet={function () {
        alert("Hello");
      }}
    />

<UserCard
      name="Héctor Meleiro"
      amount={200}
      married={false}
      points={[99, 44.3, 4.2]}
      address={{ street: "Calle María Benítez, 61", city: "Pozuelo de Alarcón" }}
      greet={function () {
        alert("Hello");
      }}
    />
  </>
);
