import React from 'react'
import styles from './ToDoList.module.css'
import ToDoItem from './ToDoItem'
function ToDoList({todos,setTodos}) {
 const sortedTodos = [...todos].sort((a, b) => Number(a.done) - Number(b.done))
  return (
    <>
    <div className={styles.list}>
    {sortedTodos.map((item, index) => (
    <ToDoItem key={index} item={item} todos={todos} setTodos = {setTodos}/>
 ))}
 </div>
    </>
  )
}

export default ToDoList