import React, { useState } from "react";





const Count =()=>{
    const [count, setCounter] = useState(0)
    return(
        <>
        <h2>The Count is : {count}</h2>
        <button id="inc" onClick={()=>setCounter(count+1)}>Increase</button>
        <button id="res" onClick={()=>setCounter(0)}>Reset</button>
        <button id ="dec" onClick={()=>setCounter(count-1)}>Decrease</button>


        
        </>
    )
}




export default Count;