import React from "react";
import CV from "../../components/images/Bishnu-Dhakal-CV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        DOwnload CV
      </a>
      <a href="#contact" className="btn btn-primary">
        let's Talk
      </a>
    </div>
  );
};

export default CTA;
