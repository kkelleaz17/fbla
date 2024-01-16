// Importing necessary dependencies and assets
import React from 'react';
import item1 from '../assets/item1.jpg';
import item2 from '../assets/item2.jpg';
import item3 from '../assets/item3.jpg';
import item4 from '../assets/item4.jpg';
import item5 from '../assets/item5.jpg';
import item6 from '../assets/item6.jpg';
import item7 from '../assets/item7.jpg';
import item8 from '../assets/item8.jpg';

// Functional component for the Header
export default function Header() {
  return (
    // Container for the header images
    <div className='Header'>
      {/* Individual image elements with source set to corresponding assets */}
      <img src={item8} alt="Item 8" />
      <img src={item2} alt="Item 2" />
      <img src={item3} alt="Item 3" />
      <img src={item4} alt="Item 4" />
      <img src={item5} alt="Item 5" />
      <img src={item6} alt="Item 6" />
      <img src={item7} alt="Item 7" />
      <img src={item1} alt="Item 1" />
    </div>
  );
}
