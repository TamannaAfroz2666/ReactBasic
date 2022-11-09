import React from 'react'
import { useState } from 'react'

const UseStateObject = () => {
    const [info, setInfo] = useState({
        name:"",
        id:''
    })
    // const nameHandle = (e) =>{
    //     setInfo(...info,name:e.target.value);

    // }
    // const idHandle =(e) =>{
    //     setInfo(...info,e.target.value);
    // }
  return (
    <div>
        <div className="object">
            <h1>object using and spread operator use </h1>
            <form action="">

            <input   value={info.name} onChange={(e) =>setInfo({...info, name: e.target.value})}/>
            <input type="number"  value={info.id} onChange={(e)=>setInfo({...info, id: e.target.value})}/>
            </form>
         </div>
         <p>The name is:{info.name} </p>
         <p>id is : {info.id} </p>
    </div>
  )
}

export default UseStateObject