import React from 'react'
import './Header.css'
import CTA from './CTA';
import ME from '../../components/images/header.jpg';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      {/* header__container this style of classes is called
      bim  */}
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Bishnu Dhakal</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
         <CTA/>
         <HeaderSocial/>


         <div className="me">
           <img src={ME} alt="me" />
         </div>
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </header>
  )
}

export default Header