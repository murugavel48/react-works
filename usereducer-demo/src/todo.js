import {useReducer, useState} from 'react'

let initialState=[]
const reducer=(state, action) => {
  switch(action.type){
    case 'add':
      return [...state, {task:action.payload, completed:false}]//add new object with task property into an array
    case 'toggle':
      return state.map((todo)=>todo.task===action.payload.task?{...todo, completed: true}: todo)
    default:
      return state
  }
}
function Todo(){
    let [state, dispatch]=useReducer (reducer, initialState)
    let [input, setInput]=useState('')
    return(<>
      <b>Enter the task </b><input type="text" value={input} onChange={(event)=>setInput(event.target.value)}></input>
      <button onClick={()=>dispatch({type: 'add', payload: input})}>Add</button><br></br>
      <ol>
        {state && state.map((todo)=><li>{todo.task} {todo.completed? 'Completed': 'Not Completed'}
          <button onClick={()=>{dispatch({type: 'toggle', payload: todo})}}>Toggle</button>
          <button onClick={()=>{dispatch({type: 'delete', payload:todo})}}>delete</button>
        </li>)}
      </ol>
    </>)  
}

export default Todo