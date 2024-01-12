import React, { useState } from 'react';
import '../css/Positions.css';
import JobCard from '../components/JobCard';
import Openings from '../util/JobOpenings.json'



export default function Jobs() {

  
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredJobs = selectedCategory === 'All' ? Openings : Openings.filter((job) => job.category === selectedCategory);

  return (
    <div>
      <h1 className="jobs-heading">Job Listings</h1>
      <div className="filter-btns">
        <button className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`} onClick={() => handleCategoryChange('All')}>
          All
        </button>
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
      <div className="jobs-container">
        {filteredJobs.map((job,i) => (
          <JobCard job={job} key={i}/>
        ))}
      </div>
    </div>
  );
}
