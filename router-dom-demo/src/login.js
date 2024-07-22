import { useNavigate } from "react-router-dom"

function Login(){
    let navigate=useNavigate()
    //How to navigate from one component to another component?
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate('/Home')      //navigate the user to home page localhost:3000/home
    }
    
    return(<>
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" ></input>

        <label htmlFor="pwd">Password</label>
        <input type="password" ></input><br/>
        <input type="submit" value="submit" ></input>
    </form>
    </>)
}

export default Login