import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>I am {person.name} and My Age : {person.age}, my Skill is :{person.skill}</h2>
    </div>
  )
}

export default Person