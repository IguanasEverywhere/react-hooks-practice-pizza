import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzasToDisplay, setPizzasToDisplay] = useState([]);
  const [pizzaFormData, setPizzaFormData] = useState({
    topping: '',
    size: 'Small',
    vegetarian: false
  })

  function onEdit(pizzaDataToEdit) {
    setPizzaFormData({
      id: pizzaDataToEdit.id,
      topping: pizzaDataToEdit.topping,
      size: pizzaDataToEdit.size,
      vegetarian: pizzaDataToEdit.vegetarian
    })
  }

  function onFormSubmit(pizzaId) {
    fetch(`http://localhost:3001/pizzas/${pizzaId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({...pizzaFormData})
    })
    .then(r => r.json())
    .then(updatedPizza => {
      setPizzasToDisplay(pizzasToDisplay.map((pizza) => {
        if (pizza.id === pizzaId) {
          return pizzaFormData
        } else {
          return pizza
        }
      }))
    })

  }

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(r => r.json())
    .then(pizzaData => setPizzasToDisplay(pizzaData))
  }, [])

  return (
    <>
      <Header />
      <PizzaForm onEdit={onEdit} pizzaFormData={pizzaFormData} onFormSubmit={onFormSubmit} />
      <PizzaList pizzasToDisplay={pizzasToDisplay} onEdit={onEdit}/>
    </>
  );
}

export default App;
