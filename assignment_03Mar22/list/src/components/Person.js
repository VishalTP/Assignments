import React from 'react'

const Person = ({ person, deletePerson }) => {
    return (
        <div className="person">
            <div className="image">
                <img src={person.img} alt={person.name} />
            </div>
            <div className="details">
                <p className="name">{person.name}</p>
                <p className="age">{person.age} years</p>
            </div>
            <div onClick={()=>deletePerson(person.id)} className="delete">X</div>
        </div>
    )
}

export default Person