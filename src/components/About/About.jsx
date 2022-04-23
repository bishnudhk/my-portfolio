import React from "react";
import "./About.css";
import ME from "../../components/images/About.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { ImFolderOpen } from "react-icons/im";

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
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Client</h5>
              <small>2+ Client</small>
            </article>
            <article className="about__card">
              <ImFolderOpen className="about__icon" />
              <h5>Projected</h5>
              <small>5+ project work</small>
            </article>
          </div>
          <p>I am a Bishnu Dhakal.I am a front end developer .I read in Nepal college of Information Technology affilated to Pokhara university.</p>
         <a href="#content " className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
