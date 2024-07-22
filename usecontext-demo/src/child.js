import GrandChild from "./grandChild"

function Child({name}){
    return(<>
    <b>Child Component</b><br/>
    <GrandChild name={name}></GrandChild>
    </>)
}

export default Child