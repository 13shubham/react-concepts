import React, { Component } from "react";
import "./Refresh.css"
import Refresh from './Refresh.js'
//Class Component
class Counter extends Component{ //initialize state in the constructor.
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    increment = () =>{
        /* this.setState({
            count: this.state.count+1
        }, ()=> {
            console.log('Count is :',this.state.count);
        }) */
        this.setState((prevStat)=> ({
            count: prevStat.count+1
        }))
    }
    incrementFive(){
        this.increment();
        this.increment();
    }
    decrement(){
        this.setState({
            count: this.state.count-1
        })
    }
    restart(){
        this.setState({
            count: 0
        })
    }
    render(){
        return(<div>            
            <h5> Count : {this.state.count} </h5>
            
            <div className="refresh__icons"
            onClick={()=> this.restart()}>
                <Refresh/>
            </div>
            <button onClick={() => this.incrementFive()}> increment </button>
            <button onClick= {()=> this.decrement()}> decrement </button>
        </div>)
    }
}

export default Counter;