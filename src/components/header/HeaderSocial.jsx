import React from 'react';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import { AiFillFacebook} from 'react-icons/ai';

function HeaderSocial() {
  return (
    <div className="header__social">
        <a href="https://www.linkedin.com/" target="_balnk"><AiFillLinkedin/> </a>
        <a href="https://www.github.com/" target="_balnk"><AiFillGithub/> </a>
        <a href="https://www.facebook.com/" target="_balnk"><AiFillFacebook/> </a>
    </div>
  )
}

export default HeaderSocial