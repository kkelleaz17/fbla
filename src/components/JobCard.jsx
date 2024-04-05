import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function JobCard({ job,Availablity }) {
  const Nav = useNavigate(); // Getting the navigation function from react-router-dom
  const Click = () => {
    window.scrollTo(0, 0); // Scrolling to the top of the page
    Nav('/available-positions/' + job.title.toLowerCase().trim()); // Navigating to the detailed view of the job
  };
  const isAvailable = ()=>{
    if(!Availablity) return '( Loading )';
    
    for(let i of Availablity){
      if(i.Position === job.title){
        return (i?.available != 0)  ? ' ( Available )' : ' ( Not Available )';
      }
    }

  }
  ///(Availablity?.available != 0)  ? ' ( Available )' : ' ( Not Available )';
  return (
    <div className="job-card">
      <h2 className="job-title">{job.title} <b className='Available'>{isAvailable()}</b></h2> {/* Displaying the job title */}
      <p className="job-description">{job.description}</p> {/* Displaying the job description */}
      <button className="ViewMore" onClick={Click}>View More</button> {/* Button to view more details of the job */}
    </div>
  );
}