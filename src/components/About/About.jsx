import React from "react";
import "./About.css";
import ME from "../../components/images/About.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get TO Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h5>Experience</h5>
              <small>2+ years Working</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
