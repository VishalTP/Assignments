import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react'

const Container = () => {
    const [state, setState] = useState('')

    useEffect(() => {
        setState({
          id: "hyqwjheg123",
          title: "Lorem ipsum dolor sit amet consectetur",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut nam mollitia optio quo, repellendus velit labore quidem aperiam reprehenderit vitae blanditiis, consectetur, molestias eos reiciendis voluptatum. Doloremque, nemo ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut nam mollitia optio quo, repellendus velit labore quidem aperiam reprehenderit vitae blanditiis, consectetur, molestias eos reiciendis voluptatum. Doloremque, nemo ex."
        })
    
      }, [])

  return (
    <div className="container">
        <Card state={state}/>
    </div>
  )
}

export default Container