import React from "react";

const experiences = [
  {
    id: 1,
    period: "Currently Pursuing",
    role: "BCA in AI & Machine Learning",
    company: "University",
    items: [
      "Specializing in Artificial Intelligence & Machine Learning",
      "Building projects with data analysis, NLP, and computer vision",
      "Active participant in coding competitions and hackathons",
    ],
  },
  {
    id: 2,
    period: "Project Experience",
    role: "Full-Stack Web Developer",
    company: "Self-Directed & Freelance",
    items: [
      "Designed and developed multiple web apps using React and Node.js",
      "Implemented RESTful APIs, database integration, and authentication",
      "Collaborated with peers on open-source projects via GitHub",
    ],
  },
  {
    id: 3,
    period: "Learning Journey",
    role: "AI/ML Explorer",
    company: "Self-Taught & Online Courses",
    items: [
      "Completed courses on machine learning and data science",
      "Built predictive models using TensorFlow and scikit-learn",
      "Explored computer vision and NLP projects",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="timeline-item"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="timeline-dot"></div>
              <span className="timeline-period">{exp.period}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <div className="timeline-company">{exp.company}</div>
              <div className="timeline-desc">
                <ul>
                  {exp.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
