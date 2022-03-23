import React, { useState, useEffect } from 'react'
import list from '../list'
import Person from './Person'

const Container = () => {
    const [persons, setPersons] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(true)

    const clearList = ()=>{
        setPersons([])
        setDisabled(true)
    }
    const deletePerson = (id)=>{
        const tempArr = persons.filter(person=>person.id!==id)
        setPersons(tempArr)
    }

    const  fetchData = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>resolve([...list]), 2000)
        })
    }

    useEffect(() => {
        const data =fetchData()
            .then(data=>{
                setLoading(false)
                setPersons(data)
            })
    }, [])

    return (
        <div className="container">
            <h1>{persons.length} Birthdays Today</h1>
            {persons.length? persons.map((person) => <Person key={person.id} person={person} deletePerson={deletePerson} />): loading? <h3>Loading...</h3>: ""}
            <button disabled={disabled} onClick={clearList}>Clear All</button>
        </div>
    )
}

export default Container