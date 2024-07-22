import React, { Component } from "react";

class ConditionalRendering extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogedIn: false
        };
    }
    toggleLogin = () => {
        this.setState({isLogedIn: !this.state.isLogedIn});
    };
    render(){
        return(
            <div>
                {this.state.isLogedIn ? (
                    <h1>Welcome back!</h1>
                ) : (
                    <h1>Please Log in.</h1>
                )}
                <button onClick={this.toggleLogin}>
                    {this.state.isLogedIn ? 'Logout' : 'Login'}
                </button>
            </div>
        );
    }
}
export default ConditionalRendering