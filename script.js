// Sample data for projects and experience
const projects = [
  { title: "Project One", description: "Description of project one", link: "#" },
  { title: "Project Two", description: "Description of project two", link: "#" },
];

const experience = [
  { title: "Job Title at Company", description: "Details of your responsibilities" },
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
