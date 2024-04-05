import React from 'react'
import Picture1 from '../assets/store/Picture1.jpg' // Importing an image
import '../css/ThankYou.css' // Importing CSS styles for the component

export default function ThankYou() {
  return (
    <div className='thank-you-container'> {/* Div container for the Thank You page */}
        <h1 className='hero'>Thank you from The Tolleson Market team!</h1> {/* Displaying a heading */}
        <img src={Picture1} className='Thank-You-Image'/> {/* Adding an image to the page */}
        <h1>We will be with you shortly, and we appreciate your patience.</h1> {/* Displaying a message */}
    </div>
  )
}
