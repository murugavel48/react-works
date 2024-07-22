import { useRef } from "react";

function UseRefDemo2(){
    let inputRef=useRef()
    const handleChange = () => {
        console.log(inputRef.current);
        console.log(inputRef.current.value);
      }
      return (<>
          <b>Enter your name</b>
          <input ref={inputRef} onChange={handleChange}></input>           
        </>)
}
export default UseRefDemo2