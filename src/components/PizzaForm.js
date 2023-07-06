import React from "react";

function PizzaForm({pizzaFormData, onEdit, onFormSubmit}) {

  const { topping, size, vegetarian } = pizzaFormData


  console.log(pizzaFormData)

  function handleFormChange(e) {

    let name = e.target.name;
    let val = e.target.value;

    if (name === 'vegetarian') {
      if (val === 'Vegetarian') {
        val = true;
      } else {
        val = false;
      }
    }

    onEdit({
      ...pizzaFormData,
      [name]: val
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    onFormSubmit(pizzaFormData.id)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleFormChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={handleFormChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian ? true : false}
              onChange={handleFormChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={vegetarian ? false : true}
              onChange={handleFormChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
