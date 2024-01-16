import React from 'react';
import '../css/Home.css'; // Importing the CSS file for the Home component
import Header from '../components/Header'; // Importing the Header component
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook from react-router-dom

export default function Home() {
  const Nav = useNavigate(); // Initializing the useNavigate hook and assigning it to the Nav variable

  return (
    <div className='home-container'>
      <div className='Home'>

        <h1 className='hero'>Join our fast, reliable AZ stores. Apply now!</h1> {/* Displaying a heading */}
        <Header /> {/* Rendering the Header component */}
        <div className='herounder'>
          <h1 className='hero'>Looking for Job opportunities?</h1> {/* Displaying a heading */}
          <div className='contactsarea'>
            <button className={'findjobs'} onClick={() => { Nav('/available-positions') }}>Find Jobs</button> {/* Rendering a button with an onClick event handler */}
            <h2>or</h2> {/* Displaying a heading */}
            <h1 className='contact'>Contact us at (623)-936-3737</h1> {/* Displaying a heading */}
          </div>
        </div>
      </div>
    </div>
  );
}