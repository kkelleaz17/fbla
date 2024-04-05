import React, { useState,useEffect } from 'react';
import '../css/Positions.css'; // Importing the CSS file for the Positions component
import JobCard from '../components/JobCard'; // Importing the JobCard component
import Openings from '../util/JobOpenings.json'; // Importing the Openings data from a JSON file
import getPositions from '../util/fetchAvailable';
export default function Jobs() {
// State variables to manage selected category and filtered availability
const [selectedCategory, setSelectedCategory] = useState('All'); // Initializing selectedCategory state
const [AvailablePosition, setavailability] = useState([]); // State variable to store filtered availability

// Fetch availability data when component mounts
useEffect(() => {
    const getAvailablity = async () => {
        const data = await getPositions();
        setavailability(data);
    };
    getAvailablity();
}, []);

// Function to update selected category
const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Updating selectedCategory state when a category is selected
};

// Function to filter job openings based on selected category
const filterjobs = () => {
    if (selectedCategory === 'All') {
        return Openings; // Return all openings if 'All' is selected
    } else if (selectedCategory === 'Available') {
        // Return openings with non-zero availability
        return Openings.filter((_, i) => {
            return AvailablePosition[i].available != 0;
        });
    } else {
        // Return openings matching the selected category
        return Openings.filter((job) => job.category === selectedCategory);
    }
};

// Filter job openings based on selected category
const filteredJobs = filterjobs();


  return (
    <div>
      <h1 className="jobs-heading">Job Listings</h1> {/* Displaying a heading */}
      <div className="filter-btns">
        <button className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`} onClick={() => handleCategoryChange('All')}>
          All
        </button>
        {/* Rendering a button for each category and highlighting the active category */}
        {
        AvailablePosition.length !== 0 &&  
        <button className={`filter-btn ${selectedCategory === 'Available' ? 'active' : ''}`} onClick={() => handleCategoryChange('Available')}>
          Available
        </button>
        }
       
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
            <JobCard job={job} key={i} Availablity={AvailablePosition}/>
          ))}
          {/* Rendering JobCard component for each job */}
        </div>
      </div>
    </div>
  );
}