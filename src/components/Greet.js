import React from 'react'

/* function Greet() {
    return <h1>Hello Shubham</h1>
} */
//Function Component
const Greet = ({name}) => {

    return (
        <div>
    <h1>Hello {name}</h1>
        </div>)
}

export default Greet;