import React, {useState} from "react";

const UseStateFunc = () =>{
    const [name, setName] = useState("Losion");
    const [price, setPrice] = useState (1000);

  const  eventClick =() =>{
        setName("Baby Crim")
        setPrice(1200)
    }

    return (
        <>
        <div>
            <h1>This is the product name: <span style={{color: "red"}} > {name}</span> and price is <span style={{color: "#2766F7"}} >{price}</span> tk </h1>
            <button type="button" onClick={eventClick}> Click Me</button>
        </div>
        </>
    )

}
export default UseStateFunc;

