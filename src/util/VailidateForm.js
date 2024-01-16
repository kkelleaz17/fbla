function VailidateForm(applicant) {
  try{
    const {
      fullName,
      address,
      phone,
      email,
      socialSecurityNumber,
      dob,
    } = applicant;
  
    // Regular expressions for validation
    const fullNameRegex = /^[A-Za-z\s]+$/; // Only alphabets and spaces
    const phoneRegex = /^\d{10}$/; // 10-digit phone number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email address format
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/; // Date of birth in YYYY-MM-DD format
  
    // Validation checks
    if (!fullNameRegex.test(fullName)) {
      // Check if fullName is invalid
      return 'Invalid fullName. Only alphabets and spaces are allowed.';
    }
  

    if (!phoneRegex.test(phone)) {
      // Check if phone is invalid
      return 'Invalid phone number. Enter a 10-digit number.';
    }
  
    if (!emailRegex.test(email)) {
      // Check if email is invalid
      return 'Invalid email address.';
    }
  

  
    if (!dobRegex.test(dob)) {
      // Check if dob is invalid
      return 'Invalid date of birth. Enter in YYYY-MM-DD format.';
    }
  }catch{
    return null
  }
    // Additional validation checks can be added for other fields if needed
  
    // If all validations pass, return null indicating no validation errors
    return null;
  }
  
  export default VailidateForm;