import React, {useState} from 'react';
 
export const NavItem = (props: any) =>{

  return( 
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() =>props.setOpen(!props.open)}>
        {props.icon}
      </a>

      {props.open && props.children}
    </li>
  )
}

