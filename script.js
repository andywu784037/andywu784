// You can easily edit this list to add or remove projects
const projects = [
  {
    title: "Science Fair Project",
    description: "A simulation of bacterial growth using JavaScript and data visualization.",
    image: "images/project1.png",
    link: "" // optional: add a link if you want to open a project page or repo
  },
  {
    title: "Math Problem Solver",
    description: "A web app that calculates areas, perimeters, and more from user inputs.",
    image: "images/project2.png",
    link: ""
  },
  {
    title: "Game Design Project",
    description: "A mini-platformer built using HTML canvas and basic game loops.",
    image: "images/project3.png",
    link: ""
  }
];

// Display projects dynamically
const container = document.getElementById("project-container");

projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img src="${p.image}" alt="${p.title}">
    <div class="content">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      ${p.link ? `<a href="${p.link}" target="_blank">View Project</a>` : ""}
    </div>
  `;

  container.appendChild(card);
});
