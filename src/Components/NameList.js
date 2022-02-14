import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 40,
            skill: 'Java'
        },
        {
            id: 3,
            name: 'Daina',
            age: 20,
            skill: 'Node'
        }
    ]
    const personsList = persons.map(person => 
        <Person key={person.id} person = {person} />
    )

    return (
        <>
            <div>{personsList}</div>
        </>
    )
}

//That Methode For initial Documents
// function NameList() {
//     const names = ["Bruce", "Clark", "Diana"]
//     const namelist = names.map(name => <h2>{name}</h2>)
            
//   return (
//     <div>
        
//             {namelist}
        

//         {/* This basic method */}
//          {/* <h2>{names[0]}</h2>
//          <h2>{names[1]}</h2>
//          <h2>{names[2]}</h2> */}
//     </div>
//   )
// }

export default NameList