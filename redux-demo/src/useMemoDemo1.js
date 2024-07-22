import { useMemo, useState } from "react"
function factorial(n){      //expensive calculation
    console.log('calculating factorial of ' + n)
if(n<=1) return 1;
return n*factorial(n-1);
}

function UseMemoDemo1(){
    let [number,setNumber]=useState(0)
    let [count,setCount]=useState(0)
    let result=useMemo(()=>factorial(number),[number])
    console.log('Component is re-rendering')
    
    return(<>
    <b>Factorial result is </b>{result}<br/>
    <b>Count is </b>{count}<br/>
    <button onClick={()=>setNumber(number+1)}>Increment Number{number}</button><br/>
    <button onClick={()=>setCount(count+1)}>Increment Count</button><br/>
    </>)
}

export default UseMemoDemo1