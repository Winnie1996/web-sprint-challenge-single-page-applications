import React, { useState } from 'react'





function Pizza() {
const [name, setName] = useState("")
const [special, setSpecial] = useState("")
const [sizes, setSizes] = useState([])
const [cheese, setCheese] = useState(false)
const [pepperoni, setPepperoni] = useState(false)
const [meatball, setMeatball] = useState(false)
const [pineapple, setPineapple] = useState(false)



const handler = (e) => {
 e.preventDefault()
 const formName = document.getElementById("name")
 setName(formName.value)
 const formSpecial = document.getElementById("special")
 setSpecial(formSpecial.value)

 //DropDown
 const formSizes = document.getElementById("sizes");
//  console.log(formSizes.options[formSizes.selectedIndex].value);
 setSizes(formSizes.options[formSizes.selectedIndex].value)
//  setSizes(formSizes.value)

 //CheckBoxes
 const formCheese = document.getElementById("cheese")
 setCheese(formCheese.checked)

 const formPepperoni = document.getElementById("pepperoni")
 setPepperoni(formPepperoni.checked)

 const formMeatball = document.getElementById("meatball")
 setMeatball(formMeatball.checked)

 const formPineapple = document.getElementById("pineapple")
 setPineapple(formPineapple.checked)
 console.log()
 console.log(sizes)

if (formName.value.length < 2){
    // console.log(name.value.length) 
    window.alert("name requires 2 or more characters")
    
}

}

    return (
        <form onSubmit={(e) => handler(e)}>
        <label for="name">Name
        <input type="text" id="name">
        </input>     
        </label>
        <br></br>

        <label for="special">Add Special Instructions
        <input type="text" id="special">
        </input>
        </label>
        <br></br>

        <select id="sizes">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        </select>
        <br></br>

        <label for="cheese"> Cheese 
        <input type="checkbox" id="cheese" name="cheese" value="cheese"></input>
        </label>
        <br></br>
        <label for="pepperoni"> Pepperoni 
        <input type="checkbox" id="pepperoni" name="pepperoni" value="pepperoni"></input>
        </label>
        <br></br>
        <label for="meatball"> Meatball 
        <input type="checkbox" id="meatball" name="meatball" value="meatball"></input>
        </label>
        <br></br>
        <label for="pineapple"> Pineapple 
        <input type="checkbox" id="pineapple" name="pineapple" value="pineapple"></input>
        </label>
        <br></br>
        <button onClick={(e) => handler(e)} >Place Order</button>
        <div>
            <h2>Here is your order</h2>
            <ol>
                Name:{name}
                <br></br>
                Sizes:{sizes}
                <br></br>
                Toppings: {cheese ? "cheese" : ""} {pineapple ? "pineapple": ""} {meatball ? "meatball": ""} {pepperoni ? "pepperoni": ""}
                <br></br>
                Special Instructions:{special}
            </ol>
        </div>
        </form>

       
    )
}

export default Pizza;
