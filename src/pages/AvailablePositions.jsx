import React, { useState } from 'react';
import '../css/Positions.css'; // Importing the CSS file for the Positions component
import JobCard from '../components/JobCard'; // Importing the JobCard component
import Openings from '../util/JobOpenings.json'; // Importing the Openings data from a JSON file

export default function Jobs() {
  const [selectedCategory, setSelectedCategory] = useState('All'); // Initializing selectedCategory state

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Updating selectedCategory state when a category is selected
  };

  const filteredJobs = selectedCategory === 'All' ? Openings : Openings.filter((job) => job.category === selectedCategory);
  // Filtering the jobs based on the selected category

  return (
    <div>
      <h1 className="jobs-heading">Job Listings</h1> {/* Displaying a heading */}
      <div className="filter-btns">
        <button className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`} onClick={() => handleCategoryChange('All')}>
          All
        </button>
        {/* Rendering a button for each category and highlighting the active category */}
        <button className={`filter-btn ${selectedCategory === 'Store Operations' ? 'active' : ''}`} onClick={() => handleCategoryChange('Store Operations')}>
          Store Operations
        </button>
        <button className={`filter-btn ${selectedCategory === 'Sales' ? 'active' : ''}`} onClick={() => handleCategoryChange('Sales')}>
          Sales
        </button>
        <button className={`filter-btn ${selectedCategory === 'Management' ? 'active' : ''}`} onClick={() => handleCategoryChange('Management')}>
          Management
        </button>
        <button className={`filter-btn ${selectedCategory === 'Food Service' ? 'active' : ''}`} onClick={() => handleCategoryChange('Food Service')}>
          Food Service
        </button>
        <button className={`filter-btn ${selectedCategory === 'Security' ? 'active' : ''}`} onClick={() => handleCategoryChange('Security')}>
          Security
        </button>
      </div>
      <div className='categories'>
        <div className="jobs-container">
          {filteredJobs.map((job, i) => (
            <JobCard job={job} key={i} />
          ))}
          {/* Rendering JobCard component for each job */}
        </div>
      </div>
    </div>
  );
}