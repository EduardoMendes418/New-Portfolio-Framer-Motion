import React, { useContext} from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import { FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
      <a href="https://github.com/EduardoMendes418" >
          <FaGithub className="App-logo" style={{ color: darkMode ? "white" : "" }}/>
          </a>
          <a href="https://www.linkedin.com/in/eduardo-mendes-967375101/">
          <FaLinkedin className="App-logo" style={{ color: darkMode ? "white" : "" }}/>
          </a>
          <a href="https://www.instagram.com/eduardomendes87/">
          <FaInstagram className="App-logo" style={{ color: darkMode ? "white" : "" }}/>
          </a>
      </div>
    </div>
  );
};

export default Contact;
