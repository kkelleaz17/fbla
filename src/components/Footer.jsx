// Importing necessary dependencies and assets
import React from 'react';
import '../css/Foot.css';

import x from '../assets/x.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';

// Functional component for the Footer
export default function Footer() {
  return (
    // Navigation container with links and social media icons
    <nav className='Footer'>
      <div className="links">
        {/* Navigation links with placeholder href values */}
        <a href="#">USA</a>
        <a href="#">PRIVACY POLICY</a>
        <a href="#">CONTACT US</a>
        <a href="#">FAQS</a>
        <a href="#">CAREERS</a>
      </div>
      {/* Social media icons */}
      <img src={x} alt="X" />
      <img src={facebook} alt="Facebook" />
      <img src={instagram} alt="Instagram" />
      <img src={youtube} alt="YouTube" />
      <div className="line"></div> {/* Horizontal line for separation */}
      {/* Footer text with copyright information and addresses */}
      <div className="footer-text">
        <p>© 2024 Tolleson Market. All rights reserved.</p>
        <p>9312 W Van Buren St, Tolleson, AZ 85353 | 9102 W Taylor St, Tolleson, AZ 85353.</p>
      </div>
    </nav>
  );
}
