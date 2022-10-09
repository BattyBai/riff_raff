import React from 'react'
import './topbar.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>pure.</a> 
          <div className="itemsContainer">
             <PersonIcon className='icon'/>
             <span>111 222 3333</span>
          </div>
          <div className="itemsContainer">
             <EmailIcon className='icon'/>
             <span>isaacpure@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
      
    </div>
  )
}
