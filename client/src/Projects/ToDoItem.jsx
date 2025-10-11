import React from 'react'
import styles from './ToDoItem.module.css'
function ToDoItem({ item,todos,setTodos }) {
    function handleDelete(item){
       setTodos( todos.filter((todo) => todo !== item))
    }
    function handleClick(name){
        setTodos(todos.map((todo)=>todo.name === name?{...todo,done:!todo.done}:todo));
    }
    const classNames = item.done?styles.completed:"";
    return (
        <>
        <div className={styles.list}>
        <div className={styles.item}><span className = {classNames}onClick={()=>handleClick(item.name)}>{item.name}</span><span><button className={styles.deletebutton} onClick={()=>handleDelete(item)}>x</button></span></div>
        <hr className={styles.hr}></hr>
        </div>
        </>
    )
}

export default ToDoItem