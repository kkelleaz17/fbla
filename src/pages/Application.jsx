import React, { useState } from 'react';
import '../css/Form.css';

export default function ApplicationForm() {
  const [applicant, setApplicant] = useState({
    fullName: '',
    address: '',
    phone: '',
    email: '',
    socialSecurityNumber: '',
    selectedJob: '',
    dob: '',
    isCitizen: false,
    isArmedForces: false,
    hasWorkExperience: false,
    educationLevel: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement form submission logic
  };

  const jobOptions = [
    'Cashier',
    'Store Clerk',
    'Sales Associate',
    'Shift Supervisor',
    'Food Service Worker',
    'Security Personnel',
    'Maintenance Staff',
  ];

  const educationOptions = [
    'High School',
    'Associate Degree',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'Ph.D.',
  ];

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setApplicant((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="application-form-container">
      <h1>Job Application</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={applicant.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={applicant.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={applicant.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={applicant.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="socialSecurityNumber">Social Security Number:</label>
          <input
            type="text"
            id="socialSecurityNumber"
            name="socialSecurityNumber"
            value={applicant.socialSecurityNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="selectedJob">Select Job:</label>
          <select
            id="selectedJob"
            name="selectedJob"
            value={applicant.selectedJob}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Job --</option>
            {jobOptions.map((job) => (
              <option key={job} value={job}>
                {job}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={applicant.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="isCitizen">Are you a legal citizen?</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="isCitizen"
                value="Yes"
                checked={applicant.isCitizen}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="checkbox"
                name="isCitizen"
                value="No"
                checked={!applicant.isCitizen}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="isArmedForces">Are you in the armed forces?</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="isArmedForces"
                value="Yes"
                checked={applicant.isArmedForces}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="checkbox"
                name="isArmedForces"
                value="No"
                checked={!applicant.isArmedForces}
                onChange={handleChange}
            />
              No
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="hasWorkExperience">Do you have any work experience?</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="hasWorkExperience"
                checked={applicant.hasWorkExperience}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="checkbox"
                name="hasWorkExperience"
                checked={!applicant.hasWorkExperience}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="educationLevel">Education Level:</label>
          <select
            id="educationLevel"
            name="educationLevel"
            value={applicant.educationLevel}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Education Level --</option>
            {educationOptions.map((education) => (
              <option key={education} value={education}>
                {education}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}