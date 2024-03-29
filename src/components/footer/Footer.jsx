import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        BISHNU
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/">
          {" "}
          <BsFacebook />{" "}
        </a>
        <a href="https://www.instagram.com/">
          {" "}
          <BsInstagram />{" "}
        </a>
        <a href="https://www.twitter.com/">
          {" "}
          <BsTwitter />{" "}
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;2022 Bishnu Dhakal .All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
