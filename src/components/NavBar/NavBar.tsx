import React from 'react'
import './NavBar.css'
import '../../_variables.css';
import { ImMenu} from "react-icons/im";


const NavBar = () => {

  return (
    <div className='nav-container'>
      <div className="inner-menu">
        <ImMenu className='icon'/>
        <ul>
          <li><a href="#">Something1</a></li>        
        </ul>

        <h1 className='menu-title'>menu</h1>
      </div>
    </div>
  )
}

export default NavBar
