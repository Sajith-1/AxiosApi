import React from "react";
import { useNavigate } from "react-router-dom";


const TodoCard =(props)=>{

    const {todo} = props;
    const {id, title, completed} = todo;
    const click = useNavigate();

    return(
        <div style={{
         backgroundColor: "grey",
         margin: "10px", 
         padding: '13px', 
         width: "150px" 
         }} 
         onClick ={()=> click(`/todo/${id}`)}>

            <h3>{title}</h3>
            <h5>{`Completed: ${completed}`}</h5>
        </div>
    );
}


export default TodoCard;