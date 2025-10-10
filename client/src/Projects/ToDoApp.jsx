import React, { useState } from 'react'
import ToDoItem from './ToDoitem';


function ToDoApp() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    function Handleclick(e) {
        setTodo(e.target.value)
    }
    function Handlesubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo])
        setTodo("")

    }
    return (
        <>
            <form onSubmit={Handlesubmit}>
                <input type='text' placeholder='Enter the task' value={todo} onChange={Handleclick}></input>
                <button>Add</button>
            </form>
            {todos.map((item, index) => (
                <ToDoItem key={index} item={item} />
            ))}

        </>
    )
}

export default ToDoApp