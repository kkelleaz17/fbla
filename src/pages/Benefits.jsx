// Importing necessary dependencies and assets
import React from 'react';
import '../css/Benefits.css';
import BenefitCard from '../components/BenefitCard';
import jobBenefits from '../util/JobBenefits.json';

// Functional component for displaying job benefits
const JobBenefits = () => {
  return (
    // Container for job benefits section
    <div className={'job-benefits'}>
      <div className="job-benefits-container">
        {/* Heading for the job benefits section */}
        <h1 className="jobs-benefits-heading">Job Benefits</h1>
        {/* Mapping through jobBenefits array and rendering BenefitCard component for each job */}
        {jobBenefits.map((job, i) => (
          <BenefitCard job={job} key={job.title + i} last={i === jobBenefits.length - 1} />
        ))}
      </div>
    </div>
  );
};

// Exporting the JobBenefits component for use in other parts of the application
export default JobBenefits;
