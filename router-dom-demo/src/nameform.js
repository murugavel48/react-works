import { useState } from "react"
import { useNavigate } from "react-router-dom"

function NameForm(){
    let [name,setName]=useState()
    let navigate=useNavigate()
    const hadleClick=()=>{
        //navigate to the path '/greet/:name
        //to pass data in the url
        navigate(`/Greet/${name}`)      //greet/john or /greet/james or /greet/adam
                                        //greet/:name
    }

    return(<>
    <b>Enter your name</b>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
    <button onClick={hadleClick}>Submit</button>
    </>)
}

export default NameForm