import React from "react";
import './Teacher.css'
const Teacher1 = (props) => {
    return(
        <div>
            <div>
                <h1 className="ta">Hello {props.name1}</h1>
            </div>
            <div>
                <button className="btn-primary" type="submit">submit</button>
            </div>
            
           
        </div>

    );
};
export default Teacher1;