import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center', color: '#7e9278' }}>
      <h1>Let's Get in Touch</h1>
      <p>Shoot me a message through: <a href="mailto:yulu.jiang@mail.utoronto.ca" style={{ textDecoration: 'none' }}>yulu.jiang@mail.utoronto.ca</a></p>
      <p>Or my personal email: <a href="mailto:yulujiang00@gmail.com" style={{ textDecoration: 'none' }}>yulujiang00@gmail.com</a></p>

      <section style={{ marginTop: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '20px 0', color: '#7e9278'}}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: '10px' }} />
            <a href="https://github.com/yu1uuu?tab=overview&from=2024-06-01&to=2024-06-04" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>GitHub</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', color: '#7e9278' }}>
            <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '10px' }} />
            <a href="http://www.linkedin.com/in/yul-jiang" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' /*, color: '#7bc67b' */}}>LinkedIn</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
            <span>(647) 545-3521</span> {/* Replace with your phone number */}
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px' }} />
            <span>Toronto, Canada</span> {/* Replace with your location */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
