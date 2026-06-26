import React from "react";

const stats = [
  { id: 1, number: "10+", label: "Projects Built" },
  { id: 2, number: "AI/ML", label: "Specialization" },
  { id: 3, number: "BCA", label: "Current Degree" },
  { id: 4, number: "∞", label: "Curiosity Level" },
];

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <h2 className="about-heading">About Me</h2>
            <p className="about-text">
              I'm a BCA student specializing in Artificial Intelligence &
              Machine Learning, driven by a deep curiosity for how technology
              can reshape the world. From building full-stack web applications
              to experimenting with ML models, I love turning ideas into
              reality through code. I'm constantly learning, building, and
              pushing the boundaries of what's possible.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className="stat-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
