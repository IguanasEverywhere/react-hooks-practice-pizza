import React from "react";

function Pizza({pizzaData, onEdit}) {

  const {topping, size, vegetarian} = pizzaData;

  function handleEditClick() {
    onEdit(pizzaData)
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'Yes' : 'No'}</td>
      <td>
        <button onClick={handleEditClick} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
