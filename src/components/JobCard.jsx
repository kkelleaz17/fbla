import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function JobCard({ job }) {
  const Nav = useNavigate(); // Getting the navigation function from react-router-dom

  const Click = () => {
    window.scrollTo(0, 0); // Scrolling to the top of the page
    Nav('/available-positions/' + job.title.toLowerCase().trim()); // Navigating to the detailed view of the job
  };

  return (
    <div className="job-card">
      <h2 className="job-title">{job.title}</h2> {/* Displaying the job title */}
      <p className="job-description">{job.description}</p> {/* Displaying the job description */}
      <button className="ViewMore" onClick={Click}>View More</button> {/* Button to view more details of the job */}
    </div>
  );
}