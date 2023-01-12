import React, { useState } from "react";



const Count = ()=>{
    const [counter, setCounter] = useState(0);

    return(
        <div>
            <p>The count is : {counter} </p>
            <button onClick={()=>setCounter(counter+1)}>Increase</button>
            <button onClick={()=>setCounter(0)}>Reset</button>
            <button onClick={()=>setCounter(counter-1)}>Decrease</button>

        </div>
    )
}

export default Count;