import React, { useState } from 'react';
import '../css/Positions.css';

export default function Jobs() {
  const jobPositions = [
    {
      id: 1,
      title: 'Cashier',
      description: 'Cashiers handle customer transactions, operate cash registers, and process payments. They also provide customer service, answer inquiries, and assist with locating products within the store.',
      category: 'Store Operations',
    },
    {
      id: 2,
      title: 'Store Clerk',
      description: 'Store clerks perform a range of duties, including restocking shelves, organizing merchandise, and maintaining store cleanliness. They may also assist customers with finding products and provide recommendations.',
      category: 'Store Operations',
    },
    {
      id: 3,
      title: 'Sales Associate',
      description: 'Sales associates help customers with their purchases, suggest additional items, and provide product information. They may also handle customer complaints, process returns, and ensure that the store is well-stocked.',
      category: 'Sales',
    },
    {
      id: 4,
      title: 'Shift Supervisor',
      description: 'Shift supervisors oversee the daily operations of the convenience store. They manage employees, assign tasks, handle cash management, and ensure that the store is running smoothly. They may also handle more complex customer service issues.',
      category: 'Management',
    },
    {
      id: 5,
      title: 'Food Service Worker',
      description: 'Food service workers in convenience stores prepare and serve food items, maintain cleanliness and hygiene standards, and manage inventory for food and beverage items such as coffee, snacks, and pre-packaged meals.',
      category: 'Food Service',
    },
    {
      id: 6,
      title: 'Security Personnel',
      description: 'Security personnel in larger convenience stores prevent theft, monitor surveillance systems, and ensure the safety of customers and employees. They may also respond to emergencies or disturbances within the store.',
      category: 'Security',
    },
    {
      id: 7,
      title: 'Maintenance Staff',
      description: 'Maintenance staff members are responsible for general upkeep and cleanliness of the store. They perform tasks such as cleaning floors, restrooms, and common areas, as well as maintaining equipment and addressing minor repairs.',
      category: 'Store Operations',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredJobs = selectedCategory === 'All' ? jobPositions : jobPositions.filter((job) => job.category === selectedCategory);

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
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2 className="job-title">{job.title}</h2>
            <p className="job-description">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}