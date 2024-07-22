import {useReducer,useState} from 'react'
let initialState={name:'John',accno:'Ac123',balance:10000,error:null}

const reducer=(state,action)=>{
    switch(action.type){
        case 'withdraw':
            if((state.balance - action.payload)<500)
                return {...state,error:'Insufficient balance'}
            else
            return {...state,balance:state.balance - action.payload,error:null}     //action.payload is input            
        case 'deposit':
            return {...state,balance:state.balance + action.payload,error:null}
        case 'checkbalance':
            return {...state,balance:state.balance,error:null}
    }
}

function BankAccount(){
    let [state,dispatch]=useReducer(reducer,initialState)
    let [amount,setAmount]=useState(0)
    let [showBalance,setShowBalance]=useState(false)

    return(<>
    <b>Name:</b>{state.name}<br/>
    <b>Name:</b>{state.accno}<br/>
    <b>Enter the amount</b> <input type="text" value={amount} onChange={(event)=>setAmount(event.target.value)}></input>
    <br/>
    <button onClick={()=>dispatch({'type':'withdraw','payload':Number(amount)})}>Withdraw</button><br/>
    <button onClick={()=>dispatch({'type':'deposit','payload':Number(amount)})}>Deposit</button><br/>
    <button onClick={()=>{setShowBalance(true);dispatch({'type':'checkbalance'})}}>Checkbalance</button><br/>
    {showBalance && <b>Balance is {state.balance}</b> }
    {state.error && <p style={{color:'red'}}>{state.error}</p>}
    </>)
}

export default BankAccount