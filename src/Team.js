import React from "react";
import Teacher1 from "./Teacher";

const Team1 =(props) =>{
 
 const handlemanage = () =>{
  console.log("this is called event");

  }
    return(
      <div>
        <h1> This is our Team Page</h1>
        <Teacher1 name1="tom"/>
        <Teacher1 />
        <div>

          <button onClick ={handlemanage}>Click me</button>
        </div>
       
      </div>
    );
};
// object declearation start


// let user = {
//     name: "tamanna",
//     age: 44,
//     color: "black",
// }
// const Team2 = () =>{
//     return(
//         <div>
//             <h1>This is user part</h1>
//             <h2>the user is: {user.name} </h2>
//             <h2>the user is: {user.age} </h2>
//             <h2>the user is: {user.color} </h2>
//         </div>
//     )
// }
// object declearation end 

export default Team1;
