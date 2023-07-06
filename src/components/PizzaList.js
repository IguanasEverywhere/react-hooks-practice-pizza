import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzasToDisplay, onEdit}) {

  const pizzaItems = pizzasToDisplay.map((pizza) => <Pizza key={pizza.id} pizzaData={pizza} onEdit={onEdit}/>)
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzaItems
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
