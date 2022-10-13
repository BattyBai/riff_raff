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
        <div className='footer'>
          <ul className='bottom-list'>
            <li className='item'>
              <a href="mailto:isaacpure@gmail.com">
                <img src="assets/001-gmail.png" target='_blank' alt="" />
              </a>
            </li>
            <li className='item'>
              <a href="">
                <img src="assets/003-linkedin.png" alt="" />
              </a>
            </li>
            <li className='item'>
              <a href="">
                <img src="assets/002-github.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu
