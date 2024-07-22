import { useState } from "react";

function DropDown(){
    let [city,setCity]=useState('')
    return(<>
    <b>Select The City</b><br></br>
    <select onChange={(event)=>setCity(event.target.value)}>
  <option value='CHN'>Chennai</option>
  <option value='BNG'>Banglore</option>
  <option value='DEL'>Delhi</option>
  <option value='CBE'>Coimbatore</option>
    </select><br></br>
    {`You have Selcted ${city}`}
    </>)
}
export default DropDown