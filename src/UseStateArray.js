import React from 'react'
import { useState } from 'react'

const UseStateArray = () => {
    const [list, setList] = useState([]);
    const buttonHandle = () =>{
        setList([
            ...list,{id: list.length,
            value: Math.random()
            
        
    }])
    }

  return (
    <div>
        {/* <h1>UseStateArray</h1> */}
        <button type='button' onClick={buttonHandle}>ShowTheArry</button>
        <div>
           <ul>
           {
                list.map((item) =>{
                    return(
                        <li key={item.id}> {item.value} </li>
                    )
                }

                )

            }
           </ul>
        </div>




    </div>
  )
}

export default UseStateArray