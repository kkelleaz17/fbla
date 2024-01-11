import React from 'react';
import '../css/Foot.css';

import x from '../assets/x.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';

export default function Footer() {
  return (
    <nav className='Footer'>
      <div className="line"></div>
      <div className="links">
        <a href="#">USA</a>
        <a href="#">PRIVACY POLICY</a>
        <a href="#">CONTACT US</a>
        <a href="#">FAQS</a>
        <a href="#">CAREERS</a>
      </div>
      <div className="line"></div>
      <img src={x} alt="X" />
      <img src={facebook} alt="Facebook" />
      <img src={instagram} alt="Instagram" />
      <img src={youtube} alt="YouTube" />
      {/* <div className="line"></div> */}
      <div className="footer-text">
        <p>© 2024 Tolleson Market. All rights reserved.</p>
        <p>9312 W Van Buren St, Tolleson, AZ 85353 | 9102 W Taylor St, Tolleson, AZ 85353.</p>
      </div>
    </nav>
  );
}