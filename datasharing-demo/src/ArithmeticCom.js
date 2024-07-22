import { useState } from "react"

function ArithmeticCom(){
    let[one,setOne]=useState(0)
    let[two,setTwo]=useState(0)
    let [result,setResult]=useState(0)

    const add=()=>{
        setResult(one+two);
    }

    return(<>
    <b>Enter number one</b>
    <input type="text" value={one} onChange={(event)=>setOne(Number(event.target.value))}></input>{one}<br/>
    <b>Enter nummber tw</b>
    <input type="text" value={two} onChange={(event)=>setTwo(Number(event.target.value))}></input>{two}<br/>
    <button onClick={()=>add()}>Add</button><br/><br/>
    Sum:{result}
    </>)
}
export default ArithmeticCom