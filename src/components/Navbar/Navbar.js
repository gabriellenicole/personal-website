import React from 'react'
import { useState } from 'react'
import './Navbar.scss'

export default function Navbar() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <nav className='navbar'>
        <div className='logo'>
          <a href='#home'>Gaby.</a>
        </div>
        <div className='link'>
          <ul className={clicked ? 'active' : ''}>
            <li>
              <a href='#home'>&lt;home&gt;</a>
            </li>
            <li>
              <a href='#education'>&lt;education&gt;</a>
            </li>
            <li>
              <a href='#project'>&lt;project&gt;</a>
            </li>
            {/* <li>
              <a href='#about'>&lt;about&gt;</a>
            </li> */}
          </ul>
        </div>
        <div id='mobile' onClick={handleClick}>
          <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
    </>
  )
}
