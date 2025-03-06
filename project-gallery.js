// Project data
const projects = [
  {
    title: "My YouTube Video",
    category: "video",
    embed: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/6ZLJTTmJ2_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "My YouTube Video",
    category: "video",
    embed: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Rg9kbZoacsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "My YouTube Video",
    category: "video",
    embed: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/cxGo8fi0o9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    title: "My YouTube Video",
    category: "video",
    embed: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/y_p2L5za8pM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },

  {
    title: "My Local Image Project",
    category: "graphics",
    image: "videos\sudip_photo.png", // Correct path to your local image
  },
  {
    title: "Gamming Thumbnail",
    category: "graphics",
    image: "Gamming Video thumbnail.jpg", // Correct path to your local image
  },
  {
    title: "My Local Image Project",
    category: "graphics",
    image: "images/my-image.jpg", // Correct path to your local image
  },
  {
    title: "My Local Image Project",
    category: "graphics",
    image: "images/my-image.jpg", // Correct path to your local image
  },
  {
    title: "YouTube",
    category: "web",
    link: "https://www.youtube.com",
  },
  {
    title: "GitHub",
    category: "web",
    link: "https://github.com",
  },
  {
    title: "Google",
    category: "web",
    link: "https://www.google.com",
  },
  {
    title: "Netflix",
    category: "web",
    link: "https://www.netflix.com",
  },
  
];

function displayProjects(filter = 'all') {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = ''; // Clear the gallery

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  filteredProjects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';
    if (project.image) {
      projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
      `;
    } else if (project.embed) {
      projectElement.innerHTML = `
        ${project.embed}
        <h3>${project.title}</h3>
      `;
    } else if (project.link) {
      projectElement.innerHTML = `
        <a href="${project.link}" target="_blank">
          <div class="project-link">
            <h3>${project.title}</h3>
            <p>Click to visit website</p>
          </div>
        </a>
      `;
    }
    gallery.appendChild(projectElement);
  });
}
// Function to filter projects
function filterProjects(category) {
  displayProjects(category);
}

// Display all projects by default when the page loads
displayProjects();