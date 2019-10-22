import React from "react";
import Page from "./page";

export default function contact() {
  return (
    <div className='contact'>
      <Page pageData={{ currentPage: 3 }} />

      <h2 className='work-title'>Contact</h2>

      <div className='contact-info'>
        <p>
          <i className='far fa-envelope'></i> tsubasa.y1231@gmail.com
        </p>
        <p>
          <i className='fas fa-phone'></i> 080-1014-7509
        </p>
        <p>
          <i className='fab fa-slack'></i> Same as email
        </p>
        <p>
          <i className='fab fa-skype'></i> cap.l.mj
        </p>
      </div>

      <div className='person-info'>
        <div className='profile-pic'>
          <img src='img/profile.png' alt='profile' />
        </div>
        <div className='contact-name'>山口 翼 / Web developer</div>
      </div>
    </div>
  );
}
