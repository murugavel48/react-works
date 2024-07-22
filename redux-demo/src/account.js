import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "./bankAccReducer";

function Account(){
    let [input,setInput]=useState(0)
    let balance=useSelector((state)=>state.bankAccount.balance)
    let error=useSelector((state)=>state.bankAccount.error)
    let dispatch=useDispatch()

    return(<>
        <b>Enter amount</b> <input type="text" value={input} onChange={(event)=>setInput(event.target.value)}></input>
        {balance}
        <button onClick={()=>dispatch(withdraw(Number(input)))}>Withdraw</button>
        <button onClick={()=>dispatch(deposit(Number(input)))}>Deposit</button>
        {error && <p style={{color:'red'}}>{error}</p>}
    </>)
}

export default Account