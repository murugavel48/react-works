import { useState } from "react";

function Counter(){
    let [count,setCount]=useState(0)        //count=0
    return(<>
    <button onClick={()=>setCount(++count)}>+</button>{count}<button onClick={()=>setCount(--count)}>-</button>
    </>)
}
export default Counter