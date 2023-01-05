import React from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
// from emailjs.com
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_p21oh1c",
      "template_i3mzv7q",
      form.current,
      "BYV8Fkmt4mdyj9bzQ"
    )
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dhkbishnu123@gmail.com</h5>
            <a href="mailto:dhkbishnu123@gmail.com" target={"_blank"}>
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Bishnu Dhakal</h5>
            <a href="https://m.me/bishnu.dhk/" target={"_blank"}>
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>What's app</h4>
            <h5>+977 9817170857</h5>
            <a
              href="https://api.whatsapp.com/send?phone+9779817170857"
              target={"_blank"}
            >
              Send a message
            </a>
          </article>
        </div>
        {/* end of contact option */}
        <form useRef="form" onSubmit={sendEmail} autoComplete="off">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id="comment"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
