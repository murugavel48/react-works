import { useState } from "react";

function ChangeColor(){
    let [color,setcolor]=useState('')
    return(<>
    <b>Select the color</b>
    <select onChange={(event)=>setcolor(event.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="violet">Violet</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
    </select>
    <p style={{color:color}}>THis text will be displayed in {color} color</p>
    {/* color is the state variable */}

    </>)
}
export default ChangeColor