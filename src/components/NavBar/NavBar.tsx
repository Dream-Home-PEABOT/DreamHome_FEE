import React, { useState, useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { NavItem } from "../NavItem/NavItem";
import { ReportContext } from "../../helpers/context";
import { logOut } from "../../helpers/firebase";


const NavBar: React.FC<any> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  const closeBar = () => {
    // window.scrollTo(0, 1000)
    setOpen(false);
  };

  return (
    <nav className="nav-container">
      <ul className="nav-bar">
        <h1 className="menu-title">menu</h1>
        <NavItem
          open={open}
          setOpen={setOpen}
          icon={
            !open ? (
              <FiMenu data-testid="dropdown" className="icon" />
            ) : (
              <IoIosCloseCircleOutline className="icon" />
            )
          }
        >
          <DropdownMenu open={open} setOpen={setOpen} />
        </NavItem>
      </ul>
    </nav>
  );
};

const DropdownMenu = (props: any) => {
  let userReport = useContext(ReportContext);

  const DropdownItem = (props: any) => {
    return (
      <a href="#" className="menu-item">
        {props.children}
      </a>
    );
  };

  return (
    <div className="dropdown">
      <Link
        to="/home"
        data-testid="to-home"
        onClick={() => props.setOpen(false)}
      >
        <DropdownItem>Home</DropdownItem>
      </Link>

      {!userReport &&
      <Link
        to="/journey"
        data-testid="to-journey"
        onClick={() => props.setOpen(false)}
      >
        <DropdownItem onClick={props.setOpen}>Journey</DropdownItem>
      </Link>
      }
      {firebase.auth().currentUser &&  
      userReport &&
      <Link
        to="/profile"
        data-testid="to-profile"
        onClick={() => props.setOpen(false)}
      >
        <DropdownItem onClick={props.setOpen}>Profile</DropdownItem>
      </Link>
      }

      {userReport && (
        <Link
          to="/report"
          data-testid="to-login"
          onClick={() => props.setOpen(false)}
        >
          <DropdownItem>Report</DropdownItem>
        </Link>
      )}

      <Link
        to={firebase.auth().currentUser ? "/logout" : "/login"}
        data-testid="to-login"
        onClick={() => {props.setOpen(false); firebase.auth().currentUser && logOut();}}
      >
        <DropdownItem onClick={props.setOpen}>{firebase.auth().currentUser ? "Logout": "Login"}</DropdownItem>

      </Link>

    </div>
  );
};

export default NavBar;
