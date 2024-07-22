import { useState } from "react";

function NameList(){
    let [names,setName]=useState([])
    let [inputName,setInputName]=useState('')

    const addName=()=>{
        names.push(inputName)           //push the entred name into on arry
        console.log(names)
        setName([...names])             //shallow copy - passing differnt reference to setNames function
        //setNames(names) - names=names - same reference (cannot detec the state change)
        //setNames([...names]) - names=[...names] - new reference (can detect the state change)
    }

    return(<>
    <b>ENter Name</b><br></br>
    <input type="text" value={inputName} onChange={(event)=>setInputName(event.target.value)}></input>
    <br></br>
    <button onClick={()=>addName()}>Add</button>
    <b> list of Names</b>
    <ul>
        {names?names.map((name)=><li>{name}</li>): ''}

    </ul>
    </>)
}
export default NameList