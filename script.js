let jobs = [
  {
    id: 1,
    companyName: "TechNova Ltd",
    position: "Frontend Developer",
    location: "Dhaka",
    type: "Full Time",
    salary: "৳50,000",
    description: "React developer with 2 years experience required.",
    status: "All"
  },
  {
    id: 2,
    companyName: "SoftEdge Solutions",
    position: "Backend Developer",
    location: "Chittagong",
    type: "Remote",
    salary: "৳60,000",
    description: "Node.js backend developer needed.",
    status: "All"
  },
   {
    id: 1,
    companyName: "TechNova Ltd",
    position: "Frontend Developer",
    location: "Dhaka",
    type: "Full Time",
    salary: "৳50,000",
    description: "React developer with 2 years experience required.",
    status: "All"
  },
  {
    id: 2,
    companyName: "SoftEdge Solutions",
    position: "Backend Developer",
    location: "Chittagong",
    type: "Remote",
    salary: "৳60,000",
    description: "Node.js backend developer needed.",
    status: "All"
  },
   {
    id: 1,
    companyName: "TechNova Ltd",
    position: "Frontend Developer",
    location: "Dhaka",
    type: "Full Time",
    salary: "৳50,000",
    description: "React developer with 2 years experience required.",
    status: "All"
  },
  {
    id: 2,
    companyName: "SoftEdge Solutions",
    position: "Backend Developer",
    location: "Chittagong",
    type: "Remote",
    salary: "৳60,000",
    description: "Node.js backend developer needed.",
    status: "All"
  }
];

const jobContainer = document.getElementById("jobContainer");

function renderJobs(filteredJobs) {
  jobContainer.innerHTML = "";

  if (filteredJobs.length === 0) {
    jobContainer.innerHTML = `
      <div class="col-span-full text-center py-10">
        <h3 class="text-xl font-semibold">No jobs Available</h3>
        <p class="text-gray-500">There are no jobs in this section yet.</p>
      </div>
    `;
    return;
  }

  filteredJobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "card bg-base-100 shadow-xl";

    card.innerHTML = `
      <div class="card-body">
        <h2 class="card-title">${job.position}</h2>
        <p><strong>${job.companyName}</strong></p>
        <p>${job.location} • ${job.type}</p>
        <p>Salary: ${job.salary}</p>
        <p>${job.description}</p>

        <div class="card-actions justify-end mt-4">
          <button class="btn btn-success interview-btn" data-id="${job.id}">Interview</button>
          <button class="btn btn-error rejected-btn" data-id="${job.id}">Rejected</button>
          <button class="btn btn-outline delete-btn" data-id="${job.id}">Delete</button>
        </div>
      </div>
    `;

    jobContainer.appendChild(card);
  });
}