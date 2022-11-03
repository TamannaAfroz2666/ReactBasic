
import React,{ useState, useEffect} from "react";
// import Bootstrap from  'react-bootstrap/Bootstrap';

const EffectStateFunc = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(50);
    const countHandleIecrese =() =>{
        setCount(count +1);
    }
    const countHandleInecrese = () =>{
        setCount1(count1 -1);
    }

    useEffect(() =>{
        console.log("The event is mounted");
    }, [count]

    )

    return (
        <>
            <div >
               <h1>Countable: {count} </h1> 
               <button type="button" onClick={countHandleIecrese}>Count</button>
            </div>
            <div >
               <h1>CountableDecrease: {count1} </h1> 
               <button type="button" onClick={countHandleInecrese}>Counthere</button>
            </div>
        </>
    )

}
export default EffectStateFunc;