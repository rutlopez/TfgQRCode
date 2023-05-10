import React from 'react';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialInstagram, TiSocialGithub } from 'react-icons/ti';
import { RiSendPlaneFill } from 'react-icons/ri';

function Footer() {
  return (
    <div style={{marginTop:100}} className='footer'>
      <div className='footer-box'>
        <div className='footer-box-social'>
          <p style={{color:'white', marginTop:30 , marginLeft:30}}>© 2023 Rut Yela QR Code Business Card</p>
          <div className='footer-social'>
            <a href='/'>
              <TiSocialFacebook />
            </a>
            <a href='/'>
              <TiSocialLinkedin />
            </a>
            <a href='/'>
              <TiSocialTwitter />
            </a>
            <a href='/'>
              <TiSocialInstagram />
            </a>
            <a href='/'>
              <TiSocialGithub />
            </a>
          </div>
        </div>
        <div className='footer-box-links'>
        </div>
        <div className='subscribe-box'>
          <p style={{fontFamily:'Poppins-light', color:'white'}}>If you have doubts about it send me an e-mail</p>
          <input type='email' placeholder='Enter your email *'></input>
          <div className='subscribe-box-send'>
            <RiSendPlaneFill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
