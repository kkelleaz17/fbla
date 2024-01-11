import React from 'react';
import '../css/Benefits.css';

const jobBenefits = [
  {
    title: 'Cashier',
    description:
      'Cashiers handle customer transactions, operate cash registers, and process payments. They also provide customer service, answer inquiries, and assist with locating products within the store.',
    wages: 'Competitive hourly wages',
    benefits: [
      'Flexible work schedules',
      'Opportunities for advancement',
      'Employee discounts',
      'Training and development programs',
    ],
  },
  {
    title: 'Store Clerk',
    description:
      'Store clerks perform a range of duties, including restocking shelves, organizing merchandise, and maintaining store cleanliness. They may also assist customers with finding products and provide recommendations.',
    wages: 'Hourly wages based on experience',
    benefits: [
      'Friendly and supportive work environment',
      'Opportunity to interact with customers',
      'Employee recognition programs',
      'Career growth potential',
      'Paid vacation and sick leave',
    ],
  },
  {
    title: 'Sales Associate',
    description:
      'Sales associates help customers with their purchases, suggest additional items, and provide product information. They may also handle customer complaints, process returns, and ensure that the store is well-stocked.',
    wages: 'Competitive commission-based pay structure',
    benefits: [
      'Product training and knowledge enhancement',
      'Team-oriented work culture',
      'Performance-based incentives',
      'Opportunities for cross-training',
    ],
  },
  {
    title: 'Shift Supervisor',
    description:
      'Shift supervisors oversee the daily operations of the convenience store. They manage employees, assign tasks, handle cash management, and ensure that the store is running smoothly. They may also handle more complex customer service issues.',
    wages: 'Competitive salary',
    benefits: [
      'Leadership and management experience',
      'Professional development opportunities',
      'Employee scheduling flexibility',
      'Health and wellness programs',
    ],
  },
  {
    title: 'Food Service Worker',
    description:
      'Food service workers in convenience stores prepare and serve food items, maintain cleanliness and hygiene standards, and manage inventory for food and beverage items such as coffee, snacks, and pre-packaged meals.',
    wages: 'Hourly wages with potential tips',
    benefits: [
      'Free or discounted meals during shifts',
      'Safe and clean working environment',
      'Teamwork and collaboration',
      'Opportunities to learn food preparation skills',
      'Potential for career advancement in the food service industry',
    ],
  },
  {
    title: 'Security Personnel',
    description:
      'Security personnel in larger convenience stores prevent theft, monitor surveillance systems, and ensure the safety of customers and employees. They may also respond to emergencies or disturbances within the store.',
    wages: 'Competitive pay rates',
    benefits: [
      'Opportunity to develop security and safety skills',
      'Work with a diverse team',
      'Health and retirement benefits',
      'Continuing education and training',
    ],
  },
  {
    title: 'Maintenance Staff',
    description:
      'Maintenance staff members are responsible for general upkeep and cleanliness of the store. They perform tasks such as cleaning floors, restrooms, and common areas, as well as maintaining equipment and addressing minor repairs.',
    wages: 'Competitive compensation package',
    benefits: [
      'Stable and reliable work environment',
      'Opportunity to work independently',
      'Learning opportunities in maintenance and repair',
      'Recognition for a job well done',
    ],
  },
];

const JobBenefits = () => {
  return (
    <div className="job-benefits-container">
      <h1 className="job-benefits-heading">Job Benefits</h1>
      {jobBenefits.map((job) => (
        <div key={job.title} className="job-card">
          <h2 className="job-title">{job.title}</h2>
          <p className="job-description">{job.description}</p>
          <h3 className="wages-heading">Wages:</h3>
          <p className="wages">{job.wages}</p>
          <h3 className="benefits-heading">Benefits:</h3>
          <ul className="benefits-list">
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default JobBenefits;