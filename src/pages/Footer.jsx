// Importing necessary dependencies and assets
import React from 'react';
import '../css/Foot.css';

import x from '../assets/x.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';
import { useNavigate } from 'react-router-dom';

// Functional component for the Footer
export default function Footer() {
  // Initializing navigation using useNavigate hook
  const Navigate = useNavigate();

  return (
    // Navigation container with links and social media icons
    <nav className='Footer'>
      <div className="line"></div> {/* Horizontal line for separation */}
      <div className="links">
        {/* Navigation links with onClick event handlers */}
        <a onClick={() => { Navigate('/') }}>HOME</a>
        <a onClick={() => { Navigate('/privacy') }}>PRIVACY POLICY</a>
        <a onClick={() => { Navigate('/application/new') }}>APPLY</a>
        <a onClick={() => { Navigate('/faq') }}>FAQS</a>
        <a onClick={() => { Navigate('/available-positions') }}>CAREERS</a>
      </div>
      <div className="line"></div> {/* Another horizontal line */}
      {/* Social media icons */}
      <img src={x} alt="X" />
      <img src={facebook} alt="Facebook" />
      <img src={instagram} alt="Instagram" />
      <img src={youtube} alt="YouTube" />
      {/* Footer text with copyright information and addresses */}
      <div className="footer-text">
        <p>© 2024 Tolleson Market. All rights reserved.</p>
        <p>9312 W Van Buren St, Tolleson, AZ 85353 | 9102 W Taylor St, Tolleson, AZ 85353.</p>
      </div>
    </nav>
  );
}
