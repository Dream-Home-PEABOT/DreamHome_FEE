import React  from 'react';
 
export const NavItem = (props: any) =>{

  return( 
    <li className="nav-item" >
      <a href="#" 
        data-testid='menu-button'
        className="icon-button" onClick={() =>props.setOpen(!props.open)}>
        {props.icon}
      </a>

      {props.open && props.children}
    </li>
  )
}

