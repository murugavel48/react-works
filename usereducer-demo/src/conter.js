import {useReducer} from 'react'
import {useState} from 'react'

let initialState={count:0}
const reducer=(state,action)=>{             //action is an  object with a property 'type'
    switch(action.type){
        case 'increment':
            return {count:state.count+1}    //decrement the state count
        case 'decrement':
            return {count:state.count-1}    //decrement the state count
        case 'incrementByInput':
            return {count:state.count + action.payload}
        case 'decrementByInput':
                return {count:state.count - action.payload}
        default:
            return {count:state.count}
    }
}
function Counter(){
    let [state,dispatch]=useReducer(reducer,initialState)   //state={count:0}
    let [input,setInput]=useState()

    return(<>
    <b>Enter value</b><input type="text" value={input} onChange={(event)=>setInput(event.target.value)}></input><br/>
    <button onClick={()=>dispatch({'type':'increment'})}>Increment</button>
    <b>Count:{state.count}</b>
    <button onClick={()=>dispatch({'type':'decrement'})}>Decrement</button><br/>
    <button onClick={()=>dispatch({'type':'incrementByInput','payload':Number(input)})}>Increement By Input</button>
    <button onClick={()=>dispatch({'type':'decrementByInput','payload':Number(input)})}>Decreement By Input</button>
    </>)
}

export default Counter