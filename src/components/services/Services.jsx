import React from "react";
import "./Services.css";
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Graphics Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                business cards, corporate literature, press kits, exhibition
                graphics, packaging, annual reports and promotional materials.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                business cards, corporate literature, press kits, exhibition
                graphics, packaging, annual reports and promotional materials.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                business cards, corporate literature, press kits, exhibition
                graphics, packaging, annual reports and promotional materials.
              </p>
            </li>
          </ul>
        </article>

        {/* web development */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                current scenario in the world of business has become so
                intensely competitive that is has become more important to have
                own web application. So, Develop your web application with us.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                intensely competitive that is has become more important to have
                own web application. So, Develop your web application with us.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                business cards, corporate literature, press kits, exhibition
                graphics, packaging, annual reports and promotional materials.
              </p>
            </li>
          </ul>
        </article>

        {/* content creation  */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                XDezo Technologies provides enhanced CMS support with web
                integration of multiple CMS platforms including transactional,
                e-commerce, content-based CMS.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                XDezo Technologies provides enhanced CMS support with web
                integration of multiple CMS platforms including transactional,
                e-commerce, content-based CMS.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                XDezo Technologies provides enhanced CMS support with web
                integration of multiple CMS platforms including transactional,
                e-commerce, content-based CMS.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
