import { useRef } from "react"

function UseRefDemo1(){
    let imgRef=useRef()
    const handleClick=()=>{
    console.log(imgRef.current)
    console.log(imgRef.current.height)
    console.log(imgRef.current.width)
    console.log(imgRef.current.src)
    imgRef.current.height=400
    imgRef.current.width=400
    }
    return(<>
    <img src='howgarts.jpg' ref={imgRef} onClick={handleClick}></img>
    </>)    
}
export default UseRefDemo1