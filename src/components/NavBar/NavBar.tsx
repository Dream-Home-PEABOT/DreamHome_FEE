import React from 'react'
import './NavBar.css'
import '../../_variables.css';
import { ImMenu} from "react-icons/im";
import {Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className="inner-menu">
        <ImMenu className='icon'/>
        <ul>
          <Link to="/home">
          <li><a>Home</a></li>        
          </Link>
          <Link to="/journey">
          <li><a>Journey</a></li>        
          </Link>
        </ul>

        <h1 className='menu-title'>menu</h1>
      </div>
    </div>
  )
}

export default NavBar
