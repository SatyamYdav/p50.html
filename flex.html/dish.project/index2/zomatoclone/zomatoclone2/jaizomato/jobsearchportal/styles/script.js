
// Simulating job data
const jobData = [
    { title: "Software Developer", company: "TechCorp", location: "San Francisco" },
    { title: "Data Analyst", company: "DataLab", location: "New York" },
    { title: "UI/UX Designer", company: "Designify", location: "Los Angeles" },
    { title: "Marketing Specialist", company: "MarketPro", location: "Chicago" },
    { title: "Product Manager", company: "InnoTech", location: "Seattle" }
  ];
  
  // Display job listings dynamically
  function displayJobs() {
    const jobContainer = document.getElementById('jobContainer');
    jobContainer.innerHTML = '';  // Clear existing jobs
  
    jobData.forEach(job => {
      const jobCard = document.createElement('div');
      jobCard.classList.add('job');
      jobCard.innerHTML = `
        <h4>${job.title}</h4>
        <p>${job.company}</p>
        <p>${job.location}</p>
        <button>Apply Now</button>
      `;
      jobContainer.appendChild(jobCard);
    });
  }
  
  // Search for jobs
  function searchJobs() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredJobs = jobData.filter(job => 
      job.title.toLowerCase().includes(searchTerm) || 
      job.company.toLowerCase().includes(searchTerm)
    );
    
    const jobContainer = document.getElementById('jobContainer');
    jobContainer.innerHTML = '';  // Clear existing jobs
  
    filteredJobs.forEach(job => {
      const jobCard = document.createElement('div');
      jobCard.classList.add('job');
      jobCard.innerHTML = `
        <h4>${job.title}</h4>
        <p>${job.company}</p>
        <p>${job.location}</p>
        <button>Apply Now</button>
      `;
      jobContainer.appendChild(jobCard);
    });
  }
  
  // Initialize page with job listings
  window.onload = displayJobs;
  