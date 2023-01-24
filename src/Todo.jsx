import React from "react";

import { useParams } from "react-router-dom";


const Todo = ()=>{
    const {id} = useParams();
    return(
        <p>{`This is the Todo component and the todo id is : ${id}`}</p>
    )
};


export default Todo;

