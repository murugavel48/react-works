import { useEffect, useState } from "react"

function SideEffectComp(){
    let [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('Callback function in useEffect')
    },[count])

    //[] - empty dependency - the callback function in useEffect will get executed only once

    return(<>
    <button onClick={()=>setCount(++count)}>+</button>{count}
    <button onClick={()=>setCount(--count)}>-</button>
    </>)
}
export default SideEffectComp