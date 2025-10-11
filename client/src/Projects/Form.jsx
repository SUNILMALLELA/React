
import React, { useState } from 'react'
import styles from './Form.module.css'
function Form({todos,setTodos}) {
     const [todo, setTodo] = useState({name:"",done:false})
    function Handleclick(e) {
        setTodo({name:e.target.value})
    }
    function Handlesubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo])
        setTodo({name:"",done:false})

    }
  return (
    <>
    <form onSubmit={Handlesubmit} className={styles.form}>
    <div className={styles.moderncontainer}>
                <input type='text' placeholder='Enter todo item...' value={todo.name} onChange={Handleclick} className={styles.moderninput}></input>
                <button className={styles.modernbutton} type='submit'>Add</button>
           
            </div>
             </form>
    </>
  )
}

export default Form