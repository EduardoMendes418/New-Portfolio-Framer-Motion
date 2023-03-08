import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";

import boy from "../../img/tt.png";
import glassesimoji from "../../img/sorriso-roxo.png";
// import thumbup from "../../img/thumbup.png";
// import crown from "../../img/crown.png";
// import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin} from 'react-icons/fa';


const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Eduardo Mendes</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the quality work.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/EduardoMendes418" >
          <FaGithub className="App-logo" style={{ color: darkMode ? "white" : "" }}/>
          </a>
          <a href="https://www.linkedin.com/in/eduardo-mendes-967375101/">
          <FaLinkedin className="App-logo" style={{ color: darkMode ? "white" : "" }}/>
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
      <span  style={{ display: darkMode ? "none" : "none" }} >
        <img src={Vector1} alt="" />
        </span>
        <span  style={{ display: darkMode ? "none" : "" }} >
          <img alt="" />
        </span>
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-42%", top: "200px"}}
          transition={transition}
          src={glassesimoji}
          alt=""
          className="boneco"
        />

        <motion.div
          initial={{ top: "-5%", left: "74%" }}
          whileInView={{ left: "70%" }}
          transition={transition}
          className="floating-div"
        >
          {/* <FloatinDiv img={crown} text1="Front-end" text2="Developer" /> */}
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={thumbup} text1="UX/UI" text2={"Design"}/> */}
        </motion.div>

        <div className="blur" ></div>
        <div
          className="blur"
          style={{
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
