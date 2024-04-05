// Importing necessary dependencies and assets
import React, { useState,useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/Nav.css';
import Tolleson from '../assets/icons/tolles.png';
import RouteName from '../util/RouteName.js'
// Functional component for the Navbar
export default function Navbar() {
  // Initializing navigation using useNavigate and obtaining current location with useLocation
  const Nav = useNavigate();
  const NavName = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);

  // Setting document title based on the current location
  
    document.title = 'Tolleson Market - '+RouteName(NavName);
  // State for managing the open/close state of the navigation links
  const click = ()=>{
    setIsOpen(false)
  }
  return (
    // Navigation container
    <nav className='Navbar'>
      {/* Logo linking to the home page */}
      <Link className='Logo' to={'/'} onClick={click}>
        <img src={Tolleson} alt="Tolleson Logo" />
      </Link>

      {/* Container for navigation links with conditional classes based on isOpen state */}
      <div className={(isOpen ? 'OPEN' : 'CLOSE') + ' Links'}>
        <Link to={'/Benefits'} className='Delay1' onClick={click}>Benefits</Link>
        <Link to={'/available-positions'} className='Delay2' onClick={click}>Job Positions</Link>
        <Link to={'/application/new'} className='SpecialButton Delay3' onClick={click}>Apply Today</Link>
      </div>

      {/* Hamburger menu icon with onClick event to toggle isOpen state */}
      <div className={'HAM' + (isOpen ? ' HAMOPEN' : '')} onClick={() => { setIsOpen((prev) => !prev) }}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
