import { useEffect, useState } from "react";
import Greet from "./Greet";

function Login(){
    let [loggedIn,setLoggedIn]=useState(false)
    useEffect(()=> {
        setLoggedIn(false)
    }, [])

    const toggleLogin=()=>{
        if(loggedIn)
            setLoggedIn(false)
        else
            setLoggedIn(true)
    }
    return(<>
    {loggedIn && <Greet></Greet>}
    {!loggedIn && 'please login'}
    <button onClick={toggleLogin}>{loggedIn?'Logout':'Login'}</button>
    </>)
}
export default Login