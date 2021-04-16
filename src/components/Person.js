import React from 'react'

function Person({person}){
    return(
        <h5>
            I am {person.name}. I am {person.age} years old. My heroName is {person.heroName}.
        </h5>
    )
}

export default Person