import { useRef } from "react"

function UseRefDemo(){
let pref=useRef()           //will return an object with one property 'current', pref is an object with a property
const handleClick=()=>{
pref.current.style.fontWeight='bold'
pref.current.style.color='blue'
}
return(<>
<p ref={pref}>This is a paragraph</p>
{/* similar to document.getElementById('pId') in javaScript DOM */}
{/* When the button is clicked, change the style of the paragraph */}
<button onClick={handleClick}>Click me</button>
</>)   
}
export default UseRefDemo