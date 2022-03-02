import React from 'react'
import Tab from './Tab'

const Navbar = () => {
    const tabs = ["Home", "About", "Features"]
  return (
    <div className="navBar">
        {tabs.map(tab=><Tab title={tab} />)}
    </div>
  )
}

export default Navbar