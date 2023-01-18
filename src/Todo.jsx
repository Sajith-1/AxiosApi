import React, { useEffect, useState } from "react";
import axios from "axios";

const Todo =()=>{

    const [todos, setTodos] = useState();

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
            const something = res.data
            setTodos(something);
        })
    },[]);

    return(
        <div>
            <h2>Todos</h2>
            {todos &&todos.map((todo)=>{
                const {userId, id, title, completed} = todo;
                return(
                    <div key={id}>
                        <h5>{title}</h5>
                        {id}
                        {userId}
                         
                    </div>
                )
            })}

            


        </div>

    )
}

export default Todo