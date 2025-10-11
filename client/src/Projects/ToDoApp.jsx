import React, { useState } from 'react'
import Form from './Form'
import ToDoList from './ToDoList'
import Footer from './Footer'
function ToDoApp() {
    const [todos, setTodos] = useState([])
    const completedToDos = todos.filter((item)=>item.done).length
    const totalTodos = todos.length
  return (
    <>
    <Form todos ={todos} setTodos = {setTodos}/>
    <ToDoList todos = {todos} setTodos = {setTodos}/>
    <Footer completedToDos = {completedToDos} totalTodos = {totalTodos}/>
    </>
  )
}

export default ToDoApp