import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    let validationErrors = {};

    if (!name) {
      validationErrors.name = "Name is required.";
    } else if (name.length < 3) {
      validationErrors.name = "Minimum 3 characters required.";
    }

    if (!email) {
      validationErrors.email = "Email is required.";
    } else {
      const hasAt = email.includes("@");
      const endsWithCom = email.endsWith(".com");
      const endsWithIn = email.endsWith(".in");
      if (!hasAt || (!endsWithCom && !endsWithIn)) {
        validationErrors.email = "Must contain @ and end with .com or .in";
      }
    }

    if (!message) {
      validationErrors.message = "Message is required.";
    } else if (message.length < 10) {
      validationErrors.message = "Minimum 10 characters required.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <h2 className="contact-heading">Let's Connect</h2>
          <p className="contact-text">
            Looking for a passionate developer to collaborate on exciting
            projects? Whether it's web development, AI/ML, or something
            completely new — I'd love to hear from you!
          </p>

          {submitted && (
            <p className="contact-success">
              ✅ Message sent! I'll get back to you soon.
            </p>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="contact-input"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <span className="contact-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <input
                type="text"
                className="contact-input"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="contact-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <textarea
                className="contact-textarea"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && <span className="contact-error">{errors.message}</span>}
            </div>

            <button type="submit" className="contact-submit">
              Send Message 🚀
            </button>
          </form>

          <div className="contact-socials">
            <a href="mailto:satvik@email.com" className="social-link">📧</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">💼</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">💻</a>
          </div>

          <div className="footer">
            © 2026 <span className="footer-highlight">Satvik Rathee</span>. Built with React ⚛️
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
