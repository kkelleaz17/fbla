import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function JobCard({job}) {
  const Nav = useNavigate()
  const Click =()=>{
    window.scrollTo(0,0)
    Nav('/available-positions/'+job.title.toLowerCase().trim())
  }
  return (
    <div className="job-card">
        <h2 className="job-title">{job.title}</h2>
        <p className="job-description">{job.description}</p>
        <button className='ViewMore' onClick={Click}>View More</button>
    </div>
  )
}
