import { useState } from "react";

function EvenorOdd(){
    let [num,setNum]=useState(0)
    let [result,setResult]=useState('')

    const isEven=()=>{
        if(num%2==0)
            setResult(`The Given ${num} is Even`)
        else
        setResult(`The Given Number ${num} is odd`)
    }

    return(<>
    <b>Enter The Number</b>
    <input type="text" value={num} onChange={(event)=>setNum(event.target.value)}></input><br></br>
    <button onClick={()=>isEven()}>Submit</button><br></br>
    {result}

    {/* {isEven()?'Entered number is even':'Entered number is odd'} */}
    </>)

}
export default EvenorOdd