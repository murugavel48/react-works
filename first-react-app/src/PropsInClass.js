import React from "react";

class GreetUser extends React.Component{
constructor(props){                         //props is used for data sharing from parent to child
    super(props)
}

render(){
    return(<div>{this.props.name}</div>)
     }
}
export default GreetUser

// Function component
// function GreetUser(props){
// return(<div>{props.name}</div>)
// }

// function GreetUser({name}){
//     return(<>{name}</>)
// }