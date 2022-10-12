import React from 'react'
import './menu.scss'

const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div>
      
      <div className={'menu '+(menuOpen && "active")}>
        <ul>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#intro">Home</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#about">About</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#portfolio">Projects</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#contact">Contact</a>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Menu
