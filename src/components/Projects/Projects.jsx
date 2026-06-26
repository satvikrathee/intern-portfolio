import React from "react";

const projects = [
  {
    id: 1,
    emoji: "🛒",
    title: "E-Commerce Store",
    description:
      "Shopping app with product listing, cart, search filtering, and quantity controls.",
    tags: ["React", "CSS", "JavaScript"],
    link: "",
  },
  {
    id: 2,
    emoji: "📝",
    title: "Smart Form Validator",
    description:
      "Form with 12+ validation rules — password strength, email, phone, and real-time errors.",
    tags: ["React", "useState", "Validation"],
    link: "",
  },
  {
    id: 3,
    emoji: "🌐",
    title: "My Portfolio",
    description:
      "This portfolio website with dark theme, smooth animations, and modern design.",
    tags: ["React", "Vite", "CSS3"],
    link: "https://satvikratheeportfolio.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span>{project.emoji}</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    View Live ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
