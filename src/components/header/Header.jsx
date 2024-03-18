import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../components/images/header.jpg";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      {/* header__container this style of classes is called
      bim  */}
      <div className="container header__container">
        <h2>Hello I'am</h2>
        <h1>Bishnu Dhakal</h1>
        <h2 className="text-light">Fullstack Developer</h2>
        <CTA />
        <HeaderSocial />

        {/* <div className="me">
           <img src={ME} alt="me" />
         </div> */}
      </div>
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
