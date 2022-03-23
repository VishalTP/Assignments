import React from 'react'
import { useState, useEffect } from 'react'

const Card = ({state}) => {
 
  const [readMore, setReadMore] = useState(false)
  
  const func = ()=>{
    setReadMore(!readMore)
  }
  return (
    <>
    {state && <div className="card">
      <h1>{state.title}</h1>
      <div>
        <p>
          {readMore?state.content:`${state.content.substring(0, 100)}...`} 
          
          <button onClick={func}>{readMore?"Read less":"Read more"}</button>
        </p>
        
      </div>
    </div>}
    </>
  )
}

export default Card