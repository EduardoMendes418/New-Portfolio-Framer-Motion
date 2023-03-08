import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { FaBootstrap, FaNode, FaAws, FaReact, FaCss3Alt} from 'react-icons/fa';

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            My Skill
          </span>
          <span>Brands & Tools</span>
          <div
            className="blur s-blur1"
            style={{ background: "#fff" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
          style={{ color: darkMode ? "#8b008b" : "#8b008b" }}
        >
          <div className="w-secCircle">
          <FaCss3Alt className="App-logo" />
          </div>
          <div className="w-secCircle">
          <FaBootstrap className="App-logo" />
          </div>
          <div className="w-secCircle">
          <FaReact className="App-logo" />
          </div>
          <div className="w-secCircle">
          <FaNode className="App-logo" />
          </div>
          <div className="w-secCircle">
          <FaAws className="App-logo" />
          </div>
        </motion.div>
    
      </div>
    </div>
  );
};

export default Works;
