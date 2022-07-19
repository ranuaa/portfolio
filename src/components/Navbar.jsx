import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="Navbar">
        <div className='menu'>
            <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Projects</a></li>
            </ul>
        </div>
    </div>
  )
}
