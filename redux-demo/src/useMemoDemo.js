const { useState, useMemo } = require("react");

function expensiveCalculation(a,b){
    console.log('Computing expensive calculation....')
    return Number(a)+Number(b);
}

function UseMemoDemo({a,b}){

    let expensiveResult=useMemo(()=>expensiveCalculation(a,b),[a,b])
    let [count,setCount]=useState(0)
    console.log('Component is re-rendering')
    return(<>
    <b>Result</b>{expensiveResult}<br/>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <b>Count:</b>{count}<br/>
    </>)
}

export default UseMemoDemo