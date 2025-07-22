// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer(){
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} JTF noteSnap</p>
      <p>
        Développé par Joseph Tancrède Fils Charles —
        <a href="mailto:charlesjosephtancredefils2001@gmail.com"> charlesjosephtancredefils@gmail.com</a>
      </p>
      <div className="footer-icons">
        <a href="https://github.com/jtf-charles" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.facebook.com/share/1HWowUmQiD/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.linkedin.com/in/joseph-tancrede-fils-charles-aaa112262" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/josephtancredefils?igsh=enNod2o3MjhuM24=" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
