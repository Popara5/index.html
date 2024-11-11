// Sample data for projects and experience
const projects = [
  { title: "Project One", description: "Description of project one", link: "#" },
  { title: "Project Two", description: "Description of project two", link: "#" },
];

const experience = [
  { title: "Focus Management FMI", description: "Cloud engineer
01/2024 - Present Alexandria, United States
Architect scalable Azure environments, optimizing resources for client needs
Develop high-availability solutions using Azure tools ensuring service continuity
Deploy containerized applications with Docker and Azure, enhancing scalability
Automate resource deployments with ARM templates, streamlining cloud
operations
Enhance security with AD and Key Vault, mitigating cybersecurity threats
Design robust disaster recovery solutions using Availability Sets and Traffic
Manager, ensuring business continuity for critical systems
Lead containerization efforts with Docker and ACI for scalable application
deployment
Streamline cloud operations by developing ARM templates, fostering efficient
resource management and cross-team collaboration" },
  { title: "Another Job Title", description: "Details of responsibilities" },
];

// Dynamically load projects
const projectList = document.getElementById("project-list");
projects.forEach(project => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");
  projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p><a href="${project.link}">View Project</a>`;
  projectList.appendChild(projectDiv);
});

// Dynamically load experience
const experienceList = document.getElementById("experience-list");
experience.forEach(job => {
  const jobDiv = document.createElement("div");
  jobDiv.classList.add("experience");
  jobDiv.innerHTML = `<h3>${job.title}</h3><p>${job.description}</p>`;
  experienceList.appendChild(jobDiv);
});
