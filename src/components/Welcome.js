import React, { Component } from 'react'

class Welcome extends Component {
    //first step create state object and intialize it and we initiaize it within constructor
    constructor(){
        super()//call super() method because we extend React's Component class and call has to be ////made to the baseClass constructor.
        this.state = {
            message: 'Welcome visitor'
        }
    }
    changeMessage () {
        const args = ['hello'];
        this.setState({
            message: `${args[0]}, Thank you for subscribing`
        })
    }
        render(){
           const {message} = this.state;
            return (
                <div>
                    <h1>{message}</h1>
                    <button onClick={()=> this.changeMessage()}>Subscribed</button>
                </div>
            )//add event to button which handles the request. To the event we assigned a handler and handler called the function as above
            
        }
}

export default Welcome;