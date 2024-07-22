import { useState } from "react"

function Todo(){
    let initialValue={'task':'','completed':false}
    let [todo,setTodo]=useState(initialValue)
    let [todos,setTodos]=useState([])
    const handleChange=(event)=>{
        const {name,value}=event.target
        setTodo({...todo,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        todos.push(todo)
        setTodos([...todos])
        setTodo(initialValue)
    }
    const handleDelete=(t)=>{ //t is the todo object that has to be removed from the array
        //1. Task1
        //2. Task2  ->t
        //3. Task3
        //4. Task4 
       const updatedTodos=todos.filter((todo)=>todo.task!=t.task) 
       //filter all the tasks except the one which has to be removed
       setTodos(updatedTodos)
    }
    const toggleCompleted=(td)=>{
       const updatedTodos= todos.map((t)=>t.task===td.task?{...t,completed:true}:t)
       console.log(updatedTodos)
       setTodos(updatedTodos)
    }
    
    return(<>
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Enter the task</label>
            <input type="text" name="task" value={todo.task} onChange={(e)=>handleChange(e)}></input>
            <input type="submit" value="submit"></input>
            <ol>
                {todos && todos.map((t)=><li>{t.task}&nbsp;&nbsp;{t.completed ? 'Completed':'Not Completed'}
                    <button onClick={()=>handleDelete(t)}>Delete</button>
                    <button onClick={()=>toggleCompleted(t)}>Toggle completed</button>
                    </li>)}
                    </ol>
    </form>
    </>)
}
export default Todo