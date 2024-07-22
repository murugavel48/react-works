import GreatGrandChild from "./greatGrandChild"

function GrandChild({name}){
    return(<>
    <b>GrandChild Component</b><br/>
    <GreatGrandChild name={name}></GreatGrandChild>    
    </>)
}

export default GrandChild