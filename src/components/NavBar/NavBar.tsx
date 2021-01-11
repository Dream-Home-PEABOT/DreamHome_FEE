import React, { useState, useContext }from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { NavItem } from "../NavItem/NavItem";
import {ReportContext} from '../../types'

const NavBar:React.FC = () => {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className='nav-container'>
      <ul className="nav-bar" >
        <h1 className='menu-title'>menu</h1>
        <NavItem 
          open={open } 
          setOpen={setOpen} 
          icon={!open ? <FiMenu data-testid="dropdown" className='icon'/>
          : <IoIosCloseCircleOutline className='icon'/>} >
          <DropdownMenu/>
        </NavItem>
      </ul>
    </nav>
  )
}

const DropdownMenu = () => {
  let userReport = useContext(ReportContext)

  const DropdownItem = (props: any) => {
    
    return(

      <a href="#" className="menu-item" >

        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown" >

      <Link to="/home" >
        <DropdownItem >Home</DropdownItem>
      </Link>

      <Link to="/journey">
        <DropdownItem>Journey</DropdownItem>
      </Link>

      <DropdownItem>Login</DropdownItem>

      {userReport && <Link to="/report">
      <DropdownItem >Report</DropdownItem>
      </Link>}

    </div>
  )
}





export default NavBar
