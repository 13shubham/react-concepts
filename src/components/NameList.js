import React from 'react'
import Person from './Person'

function NameList(){
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            heroName: 'Batman'
        },
        {
            id: 2,
            name: 'Clark',
            age: 30,
            heroName: 'SuperMan'
        },
        {
            id: 3,
            name: 'Diana',
            age: 30,
            heroName: 'WonderWoman'
        }
    ]

    const personList =  
    persons.map((person, index) => <div><Person key={index} person={person}/></div>)
return <div> {personList} </div>
}

export default NameList