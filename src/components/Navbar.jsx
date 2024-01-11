import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/Nav.css'
import Tolleson from '../assets/Tolleson.png'

export default function Navbar() {
  const Nav = useNavigate();
  const NavName = useLocation().pathname;
  document.title = NavName
  return (
    <nav className='Navbar'>
      <Link className='Logo' to={'/'}>
        <img src={Tolleson} />
      </Link>

      <div className='Links'>
        <Link to={'/Benefits'}>Benefits</Link>
        <Link to={'/available-positions'}>Job Positions</Link>
        <Link to={'/application'} className='SpecialButton'>Apply Today</Link>
      </div>
      
    </nav>
  );
}
