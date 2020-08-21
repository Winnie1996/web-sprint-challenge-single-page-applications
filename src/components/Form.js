import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

function Pizza() {
  const initialFormValues = {
    name: "",
    instructions: "",
    toppings: {
      pepperoni: false,
      sausage: false,
      meatballs: false,
      cheese: false,
    },
    sizes: "",
  };

  const initialPizzaOrder = {
    name: "Winnie",
    instructions: "Add Sauce",
  };

  const [pizzaForm, setPizzaForm] = useState(initialFormValues);
  const [pizzaOrder, setPizzaOrder] = useState([]);
  const [sizes, setSizes] = useState(initialFormValues);

  const handleChanges = (event) => {
    // const value =
    //   event.target.type === "checkbox"
    //     ? event.target.checked
    //     : event.target.name;
    const value = event.target.value;
    const name = event.target.name;
    const isChecked = event.target.checked;

    setSizes({
      ...pizzaForm,
      [name]: value,
    });

    setPizzaForm({
      ...pizzaForm,
      toppings: {
        ...pizzaForm.toppings,
        [name]: isChecked,
      },
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // const changeCheckBox = (event => {

  // })

  // const formSchema = yup.object().shape({
  //     pepperoni: yup
  //     .string()
  //     .
  // })

  // onChange={changeCheckBox}

  return (
    <form onSubmit={handleSubmit}>
      <h3> Your Name:</h3>
      <label htlmFor="nameInput"> Name </label>
      <input
        placeholder="Insert Name"
        id="nameInput"
        type="text"
        name="name"
        onChange={handleChanges}
        value={pizzaForm.name}
      />

      <h3> Add Instructions Below:</h3>
      <label htlmFor="instructionsInput"> Name </label>
      <input
        placeholder="Add Instructions"
        id="instructionsInput"
        type="text"
        name="instructions"
        onChange={handleChanges}
      />

      <h3> Choose Toppings Below:</h3>
      <label htlmFor="toppingsInput"> pepperoni </label>
      <input
        placeholder="Choose Toppings "
        id="toppingsInput"
        type="checkbox"
        name="pepperoni"
        onChange={handleChanges}
      />

      <label htlmFor="toppingsInput"> meatball </label>
      <input
        placeholder="Choose Toppings "
        id="meatballs"
        type="checkbox"
        name="meatballs"
        onChange={handleChanges}
      />
      <label htlmFor="toppingsInput"> sausage </label>
      <input
        placeholder="Choose Toppings "
        id="sausage"
        type="checkbox"
        name="sausage"
        onChange={handleChanges}
      />

      <label htlmFor="toppingsInput"> cheese </label>
      <input
        placeholder="Choose Toppings "
        id="cheese"
        type="checkbox"
        name="cheese"
        onChange={handleChanges}
      />
      <br></br>
      <label>
        <h2>Choose Your Size Pizza Below:</h2>
        <select name="sizes" onChange={handleChanges}>
          <option value="Small>">Small</option>
          <option value="Medium>">Medium</option>
          <option value="Large>">Large</option>
        </select>
      </label>
    </form>
  );
}

export default Pizza;
