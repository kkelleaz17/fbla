// Importing necessary React hooks and components
import React, { useState, useEffect } from 'react';
import '../css/Form.css';
import '../css/Application.css';
import { useParams } from 'react-router-dom';
import sendEmail from '../util/sendEmail';
import VailidateForm from '../util/VailidateForm'; // Typo: Should be 'ValidateForm'

// Functional component for the job application form
export default function ApplicationForm() {
  // State to manage form input values
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
    city: '',
    fulltime: false,
  });

  // Handling form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validating form data
    var Result = VailidateForm({ ...applicant }); // Typo: Should be 'ValidateForm'
    if (Result !== null) {
      window.alert(Result);
      return;
    }
    // Sending email with form data
    sendEmail({ ...applicant });
    // Resetting form fields after submission
    setApplicant({
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
      city: '',
      fulltime: false,
    });
  };

  // Options for job selection, education level, and city
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
    'No Education',
    'High School',
    'Associate Degree',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'Ph.D.',
  ];

  const cityOptions = [
    'Phoenix',
    'Tucson',
    'Mesa',
    'Chandler',
    'Scottsdale',
    'Gilbert',
    'Tempe',
    'Peoria',
    'Surprise',
    'Yuma',
  ];

  // Extracting position from URL parameters
  const Location = useParams().position;

  useEffect(() => {
    // Setting selected job based on the URL parameter
    jobOptions.forEach((e) => {
      if (Location === e.toLowerCase().trim()) {
        setApplicant((prev) => {
          return { ...prev, selectedJob: e };
        });
      }
    });
  }, []);

  // Handling input change events
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setApplicant((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handling checkbox change events
  const handleCheckChange = (event, value) => {
    const { name } = event.target;
    setApplicant((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Rendering the form
  return (
    <div className="Application-Around">
      <h1 className='Application-heading'>Job Application</h1>
      <form onSubmit={handleSubmit} className='application-form-container'>
        <div>
          <div>
            {/* Input fields for personal information */}
            <div className='inputArea'>
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={applicant.fullName}
                onChange={handleChange}
                pattern='^[A-Za-z\s]+$'
                required
              />
            </div>
            {/* Additional input fields for contact information */}
            <div className='inputArea'>
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={applicant.phone}
                onChange={handleChange}
                pattern='^\d{10}$'
                required
              />
            </div>
            <div className='inputArea'>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={applicant.email}
                onChange={handleChange}
                pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
                required
              />
            </div>
            <div className='inputArea'>
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
            {/* Dropdown for selecting a job */}
            <div className='inputArea'>
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
            {/* Checkbox for selecting full or part-time work */}
            <div className='checkbox'>
              <label htmlFor="workTime">Do you want to work part or full time?</label>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="fulltime"
                    checked={applicant.fulltime}
                    onChange={(e) => { handleCheckChange(e, true) }}
                  />
                  Full Time
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="fulltime"
                    checked={!applicant.fulltime}
                    onChange={(e) => { handleCheckChange(e, false) }}
                  />
                  Part Time
                </label>
              </div>
            </div>
          </div>
          <div>
            {/* Dropdown for selecting education level */}
            <div className='inputArea'>
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
            {/* Dropdown for selecting city */}
            <div className='inputArea'>
              <label htmlFor="cityOption">Your City:</label>
              <select
                id="cityOption"
                name="city"
                value={applicant.city}
                onChange={handleChange}
                required
              >
                <option value="">-- Select A City --</option>
                {cityOptions.map((cityOption) => (
                  <option key={cityOption} value={cityOption}>
                    {cityOption}
                  </option>
                ))}
              </select>
            </div>
            {/* Checkbox for confirming legal citizenship */}
            <div className='checkbox'>
              <label htmlFor="isCitizen">Are you a legal citizen?</label>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="isCitizen"
                    value="Yes"
                    checked={applicant.isCitizen}
                    onChange={(e) => { handleCheckChange(e, true) }}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="isCitizen"
                    value="No"
                    checked={!applicant.isCitizen}
                    onChange={(e) => { handleCheckChange(e, false) }}
                  />
                  No
                </label>
              </div>
            </div>
            {/* Checkbox for confirming armed forces service */}
            <div className='checkbox'>
              <label htmlFor="isArmedForces">Are you in the armed forces?</label>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="isArmedForces"
                    value="Yes"
                    checked={applicant.isArmedForces}
                    onChange={(e) => { handleCheckChange(e, true) }}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="isArmedForces"
                    value="No"
                    checked={!applicant.isArmedForces}
                    onChange={(e) => { handleCheckChange(e, false) }}
                  />
                  No
                </label>
              </div>
            </div>
            {/* Checkbox for confirming work experience */}
            <div className='checkbox'>
              <label htmlFor="hasWorkExperience">Do you have any work experience?</label>
              <div className='checkbox'>
                <label>
                  <input
                    type="checkbox"
                    name="hasWorkExperience"
                    checked={applicant.hasWorkExperience}
                    onChange={(e) => { handleCheckChange(e, true) }}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="hasWorkExperience"
                    checked={!applicant.hasWorkExperience}
                    onChange={(e) => { handleCheckChange(e, false) }}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Submit button for the form */}
        <button type="submit" className='submit'>Apply</button>
      </form>
    </div>
  );
}
