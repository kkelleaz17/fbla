import React from 'react';
import '../css/Home.css'; // Importing the CSS file for the Home component
import Header from '../components/Header'; // Importing the Header component
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook from react-router-dom
import isMobile from '../util/isMobile';
export default function Home() {
  const Nav = useNavigate(); // Initializing the useNavigate hook and assigning it to the Nav variable
  const UserisMobile = isMobile()
  return (
    <div className='home-container'>
      <div className='Home'>

        <h1 className='hero'>Join our fast, reliable AZ stores. Apply now!</h1> {/* Displaying a heading */}
        <Header /> {/* Rendering the Header component */}
        <div className='herounder'>
          <h1 className='hero'>Looking for Job opportunities?</h1> {/* Displaying a heading */}
          <div className='contactsarea'>
            <button className={'findjobs'} onClick={() => { Nav('/available-positions');window.scrollTo(0,0) }}>Find Available Positions</button> {/* Rendering a button with an onClick event handler */}
            <h2>or</h2> {/* Displaying a heading */}
            {/* Displaying a heading */}
            {
              UserisMobile 
              ? <h1 className='contact'><a href='tel:+6239363737'>Contact Us Now</a></h1> 
              : <h1 className='contact'><a href = "https://mail.google.com/mail/?view=cm&fs=1&to=TollesonMarkets@gmail.com&su=Subject&body=Body" target="_blank">Contact Us Now</a></h1>

            }
            
          </div>
        </div>
      </div>
    </div>
  );
}