import React, { Component } from "react"

class EventBind extends Component{
    constructor(props){
        super(props)

        this.state = {
            message: "Hello Event"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message: "GoodBye Event"
        })
        console.log("event Clicked",this)
    }
render(){
    return(
        <div>
            <h3>{this.state.message}</h3>
            {/* <button onClick={this.clickHandler.bind(this)}> EventClick </button>
            <button onClick={()=> this.clickHandler()}> EventClick </button> */}
            <button onClick={this.clickHandler}> EventClick </button>
        </div>
    )
}
}

export default EventBind