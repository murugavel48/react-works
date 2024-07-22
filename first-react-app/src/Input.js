import { useState } from "react";

function Input(){
    let [name,setName]=useState('')
    let [age,setAge]=useState(0)

    const handleChange=(event)=>{
        console.log(event.target)
        setName(event.target.value)
    }

    return (<>
    <b>Enter Your name</b>
    {/* event .target.value is the value entereted in the field. the target is getting from setName(funciton) */}
    {/* event is here parameter name, you so use that parameter name .target(event.target) */}
    {/* when ever we use the onChange its attomaticlly create the event object, */}
    
    <input type="text" value={name} onChange={(event)=>setName(event.target.value)}></input>{name}<br/><br/>
    <input type="text" value={name} onChange={handleChange}></input>{name}<br/>
    
    <input type="text" value={age} onChange={(event)=>setAge(event.target.value)}></input>{age}<br/>
    </>)
}
export default Input