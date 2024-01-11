import React from 'react'
import '../css/Home.css'
import video from '../assets/video.mp4'
export default function Home() {
  return (
    <div className='Home'>
      
      <h1>Join our fast, reliable AZ stores. Apply now!</h1>
      <div className='Header'>
      <video src={video} autoPlay muted loop />
      </div>
      
    </div>
  )
}
