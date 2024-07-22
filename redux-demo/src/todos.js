import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo, updateTodo } from "./todosreducer"

function Todos(){
    let [input,setInput]=useState('')
    let todos=useSelector((state)=>state.todos)
    let dispatch=useDispatch()
    
    return(<>
    <input type="text" value={input} 
    onChange={(event)=>setInput(event.target.value)} 
    placeholder="Enter the task"></input>
    <button onClick={()=>{dispatch(addTodo(input));setInput('')}}>Add Task</button>
    <ol>
        {todos && todos.map((todo)=><li key={todo.id}>{todo.task}&nbsp;&nbsp;{todo.completed?'completed':'Not completed'}&nbsp;&nbsp;
        <button onClick={()=>dispatch(updateTodo(todo.id))}>Update</button>
        <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button></li>)}
    </ol>
    </>)
}

export default Todos