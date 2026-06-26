import React from "react";

const skillCategories = [
  {
    id: 1,
    icon: "⚛️",
    title: "Frontend Development",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Vite", "Responsive Design"],
  },
  {
    id: 2,
    icon: "🔧",
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "SQL"],
  },
  {
    id: 3,
    icon: "🧠",
    title: "AI & Machine Learning",
    skills: ["Python", "TensorFlow", "scikit-learn", "Pandas", "NumPy"],
  },
  {
    id: 4,
    icon: "🛠️",
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Linux"],
  },
  {
    id: 5,
    icon: "📚",
    title: "Currently Learning",
    skills: ["Deep Learning", "Computer Vision", "NLP", "TypeScript", "Docker"],
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className="skill-category"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="skill-category-icon">{category.icon}</span>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
