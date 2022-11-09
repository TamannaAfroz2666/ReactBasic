import React, { useEffect, useState }  from "react";
import axios from "axios";
import UseStateObject from "./UseStateObject";
const ApiFetch =() =>{
    const [post1, setPost] = useState([]);

    useEffect(() =>{
        axios.get("https://api.ambor.com.bd/ambor/product/nospecification_products/?page=1&size=2").then((response) =>{
            setPost(response.data.results) 
        })
    },[] )

    // console.log(post1);


    return (
        <div>
         {
            post1.slice(0, 1).map((item,i) =>{
                // console.log(i)
                return (

                     <div key={i}>
                    
                            <p>{item.brand}</p>
                            <p>{item.category}</p>
                   
                     </div>
                )
            })
         }
         <div>
         {/* <h1>Brand name is : {post1[0].brand} </h1> */}

         </div>
         
         <div>
            <UseStateObject/>
         </div>
        </div>
    )
}
export default ApiFetch;