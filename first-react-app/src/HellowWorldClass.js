import React, { Component } from "react"

class HelloWorld extends React.Component{
    componentDidMount(){        //useEffect() hook in functional component
        console.log('Component is mounting')
    }

    render(){
        return(<div>Hellow World!</div>)
    }
}
export default HelloWorld