import React, { useState, useContext }from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { NavItem } from "../NavItem/NavItem";
import {ReportContext} from '../../types'

const NavBar:React.FC = () => {

  const [open, setOpen] = useState<boolean>(false);
  
  const closeBar = () => {
    setOpen(false)
  }

  return (
    <nav className='nav-container'>
      <ul className="nav-bar" >
        <h1 className='menu-title'>menu</h1>
        <NavItem 
          open={open} 
          setOpen={setOpen} 
          icon={!open ? <FiMenu data-testid="dropdown" className='icon'/>
          : <IoIosCloseCircleOutline className='icon'/>} >
          <DropdownMenu open={open} setOpen={setOpen}/>
        </NavItem>
      </ul>
    </nav>
  )
}

const DropdownMenu = (props:any) => {
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

      <Link to="/home" data-testid='to-home' onClick={()=>props.setOpen(false)}>
        <DropdownItem 
        >Home</DropdownItem>
      </Link>

      <Link to="/journey" data-testid='to-journey' onClick={()=>props.setOpen(false)}>
        <DropdownItem onClick={props.setOpen}
        >Journey</DropdownItem>
      </Link>

      <DropdownItem data-testid='to-login'>Login</DropdownItem>

      {userReport && <Link to="/report"  data-testid='to-login' onClick={props.setOpen}>
        <DropdownItem 
      >Report</DropdownItem>
      </Link>}

    </div>
  )
}





export default NavBar
