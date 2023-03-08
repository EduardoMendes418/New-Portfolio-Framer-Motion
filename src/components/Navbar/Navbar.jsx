/* eslint-disable react-hooks/rules-of-hooks */
import React, {useContext}from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import {  FaWhatsapp , FaInstagram, FaFacebookF} from 'react-icons/fa';
import { themeContext } from "../../Context";
import ReactWhatsapp from 'react-whatsapp';


const navbar = () => {

  // context
  // eslint-disable-next-line no-undef
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">EM</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
               Experience
              </Link>
            </li>
            {/* <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfólio
              </Link>
            </li> */}
          </ul>
        </div>
        <div to="contact" spy={true} smooth={true}>
          <span className="i-icons">
            <ReactWhatsapp number="55-19-99483-3381" message="Welcome Friend!!!">
              <FaWhatsapp className="App-logo-nav" style={{ color: darkMode ? "white" : "" }}/> 
            </ReactWhatsapp>
            <a href="/">
            <FaFacebookF className="App-logo-nav" style={{ color: darkMode ? "white" : "" }}/>
            </a>
            <a href="https://www.instagram.com/eduardomendes87/">
            <FaInstagram className="App-logo-nav" style={{ color: darkMode ? "white" : "" }}/>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default navbar;
