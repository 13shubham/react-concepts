import { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponentChild extends Component{
    constructor(){
        super()
        this.state = {
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent({child, Message}){  
        this.setState({
            parentName: alert(`Hello ${this.state.parentName} from ${child} and ${Message}`)
        })
           // alert(`Hello ${this.state.parentName} from ${child} and ${Message}`)
    }
    render(){
        return(
            <div> 
                <h1>{this.state.parentName}</h1>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponentChild