import { useEffect, useRef, useState } from "react"



function UseRefDemo3(){
    let fnameRef = useRef();
    let initialValue = { firstname: "", lastname: "", age: 0 };
    let [user, setUser] = useState(initialValue);
    useEffect(() => {
        fnameRef.current.focus();
  }, []);
  const handleChange=(event)=>{
    console.log(event.target)
     const {name,value}=event.target //name = firstname|lastname | age
     //{'firstname:'james','lastname':'S','age':0}
     //updating age (entering some value in age field)
     //keep the values of firstname , lastname and only age property will get updated
     setUser({...user,[name]:value}) //update user with particular property
    }
    const handleSubmit = (event) => {
        event.preventDefault(); //prevent default form submit
        console.log(user);
        setUser(initialValue)
      };
      return (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">FirstName</label>
            <input
              ref={fnameRef}
              type="text"
              placeholder="Enter your firstname"
              id="fname"
              name="firstname"
              value={user.firstname}
              onChange={(event) => handleChange(event)}
            ></input>
            <br></br>
            <label htmlFor="lname">Lastname</label>
            <input
              type="text"
              placeholder="Enter your lastname"
              id="lname"
              name="lastname"
              value={user.lastname}
              onChange={(event) => handleChange(event)}
            ></input>
            <br></br>
        <label htmlFor="age">Age</label>
        <input
          type="text"
          placeholder="Enter your age"
          id="age"
          name="age"
          value={user.age}
          onChange={(event) => handleChange(event)}
        ></input>
        <br></br>
        <input type="submit" value="submit"></input>
      </form>
      {JSON.stringify(user)}
    </>
  );

}
export default UseRefDemo3