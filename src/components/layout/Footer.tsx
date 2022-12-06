import React from 'react'
import Logo from '../misc/Logo';
import fb from './../../assets/images/icon-facebook.svg'
import tw from './../../assets/images/icon-twitter.svg'
import pn from './../../assets/images/icon-pinterest.svg'
import inst from './../../assets/images/icon-instagram.svg'

import './Footer.css';

const Footer:React.FC=()=>{
  return (
    <footer className='footer'>
        <Logo color='#fff'/>
        <ul className='list'>
          <li>Features</li>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <ul className='list'>
          <li>Resources</li>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul className='list'>
          <li>Company</li>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <div className='icon-container'>
          <img src={fb} className='social-media-icon'/>
          <img src={tw} className='social-media-icon'/>
          <img src={pn} className='social-media-icon'/>
          <img src={inst} className='social-media-icon'/>


        </div>
    </footer>
  )
}

export default Footer;