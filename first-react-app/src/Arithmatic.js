import { useState } from "react";

function Arithmatic(){
    let [num1,setNum1]=useState('')
    let [num2,setNum2]=useState('')
    let [result,setResult]=useState('')

    const isSum=()=>{
        setResult(num1+num2);
    
    }
    const sub=()=>{
        setResult(num1-num2);
    }
    const mult=()=>{
        setResult(num1*num2);
    }
    const div=()=>{
        setResult(num1/num2);
    }

    return (<>
    <b>Enter The First Number</b><br></br>
    <input type="text" value={num1} onChange={(event)=>setNum1(Number(event.target.value))}></input>
    <br></br>
    <b>Enter the Second Number</b><br></br>
    <input type="text" value={num2} onChange={(event)=>setNum2(Number(event.target.value))}></input>
    <br></br>
    <button onClick={()=>isSum()}>Add</button>
    <button onClick={()=>sub()}>Sub</button>
    <button onClick={()=>mult()}>Mult</button>
    <button onClick={()=>div()}>div</button>
    {result}

    </>)

    
}

export default Arithmatic