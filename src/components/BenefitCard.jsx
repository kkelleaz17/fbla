// Importing necessary dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Functional component for rendering individual job benefit cards
export default function BenefitCard({ job, last }) {
  // Initializing navigation using useNavigate hook
  const Navigate = useNavigate();

  // Function to handle click event and navigate to detailed job view
  const Click = () => {
    // Scrolling to the top of the page before navigating
    window.scrollTo(0, 0);
    // Constructing the URL and navigating to the detailed job view
    Navigate('/available-positions/' + job.title.toLowerCase().trim());
  };

  return (
    // Container for the benefit card with conditional class for last card
    <div key={job.title} className={last ? 'benefit-card last' : 'benefit-card'}>
      {/* Job title */}
      <h2 className="job-title">{job.title}</h2>
      {/* Job description */}
      <p className="job-description">{job.description}</p>
      {/* Wages section */}
      <h3 className="wages-heading">Wages:</h3>
      <p className="wages">{job.wages}</p>
      {/* Benefits section with a list */}
      <h3 className="benefits-heading">Benefits:</h3>
      <ul className="benefits-list">
        {/* Mapping through benefits array and rendering list items */}
        {job.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      {/* Button to view more details and navigate to the detailed job view */}
      <button className='ViewMoreBenefits' onClick={Click}>View More</button>
      {/* Divider line if it's not the last card */}
      {!last && <div className='brline'></div>}
    </div>
  );
}
