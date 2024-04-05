// Assigning environment variables for service, template, and user IDs
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const userId = import.meta.env.VITE_USER_ID;

// Importing the 'emailjs' library for email functionality
import emailjs from 'emailjs-com';

// Function to send an email with applicant details
const sendEmail = async(applicant) => {
  // Destructuring applicant object for easier access to properties
  const {
    fullName,
    email,
    phone,
    selectedJob,
    dob,
    isCitizen,
    isArmedForces,
    hasWorkExperience,
    educationLevel,
    city,
    fulltime
  } = applicant;
  // Constructing email parameters
  const emailParams = {
    ToPerson: 'kristopheraz@live.com',
    reply_to: fullName,
    fullName: fullName,
    phone: phone,
    email: email,
    selectedJob: selectedJob,
    dob: dob,
    isCitizen: isCitizen ? 'Yes' : 'No',
    isArmedForces: isArmedForces ? 'Yes' : 'No',
    hasWorkExperience: hasWorkExperience ? 'Yes' : 'No',
    educationLevel: educationLevel,
    city: city,
    fulltime: fulltime ? 'Yes' : 'No',
  };



  // Sending the email using the emailjs library
  return await emailjs
    .send(serviceId, templateId, emailParams, userId)
    .then((response) => {
      // Displaying success message on successful submission
      alert('Application Submitted Successfully');
      return  true;
    })
    .catch((error) => {
      // Handling and logging any errors that occur during email submission
      console.log(error);
      alert('Message failed to send:', error.message);
      return  false;
      // Preventing the default behavior of the event (e.g., form submission)
      //  event.preventDefault();
    });
};

// Exporting the sendEmail function for use in other parts of the application
export default sendEmail;
