
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import React,  { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";


const ContactPage = () => {
    const form = useRef();
    const [sendStatus, setSendStatus] = useState("");

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_lnwaomb",
          "template_on6d9nr",
          form.current,
          "FBwAl7ILekTXyrpGm"
        )
        .then(
            (result) => {
                console.log(result.text);
                setSendStatus("Message sent successfully!");
            },
            (error) => {
                console.log(error.text);
                setSendStatus("Failed to send message.");
            }
        );
    };
  
  
  return (
    //<StyledContactPage>
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center', color: '#7e9278' }}>
      <h1>Let's Get in Touch</h1>
      <p>Shoot me a message through: <a href="mailto:yulu.jiang@mail.utoronto.ca" style={{ textDecoration: 'none' }}>yulu.jiang@mail.utoronto.ca</a></p>
      <p>Or my personal email: <a href="mailto:yulujiang00@gmail.com" style={{ textDecoration: 'none' }}>yulujiang00@gmail.com</a></p>

    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      {sendStatus && <p>{sendStatus}</p>}
    </StyledContactForm>


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
    //</StyledContactPage>
  );
};

export default ContactPage;

// change background color
const StyledContactPage = styled.main`
  background-color: #101c10; // Light green
`;


const StyledContactForm = styled.div`
  width: 400px;
  margin: auto;  // Centers the form horizontally

  form {
    display: flex;
    align-items: center;  // Aligns form items to the center vertically
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #7e9278;
      color: white;
      border: none;
      transition: background 0.3s; // Smooth transition for background change

      &:hover {
        background: #5a6f64;  // Changes background color on hover
      }
    }
  }
`;
