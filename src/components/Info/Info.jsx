import React from "react";
import profileImg from "../../../img.jpeg";

const Info = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-greeting">Hello, I'm</span>
          <h1 className="hero-name">Satvik Rathee</h1>
          <h2 className="hero-role">Software Developer • AI/ML Enthusiast</h2>
          <p className="hero-desc">
            Aspiring developer passionate about building the future with code.
            Currently pursuing BCA with a specialization in Artificial
            Intelligence & Machine Learning.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-ring">
            <img src={profileImg} alt="Satvik Rathee" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
