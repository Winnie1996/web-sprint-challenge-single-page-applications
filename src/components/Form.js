import React from 'react'





function Pizza() {

const handler = (e) => {
 e.preventDefault()
 const name = document.getElementById("name")
 console.log(name.value)
}

    return (
        <form onSubmit={(e) => handler(e)}>
        <label for="name">Name
        <input type="text" id="name">
            
            </input>    
            
        </label>
        </form>
    )
}

export default Pizza;
