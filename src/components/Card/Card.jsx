import React, { useContext } from "react";
import "./Card.css";
import { themeContext } from "../../Context";

const Card = ({emoji, heading, detail, color}) => {

    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  

  return (
    <div className="card" style={{ color: darkMode ? "white" : "black" }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button" style={{ color: darkMode ? "black" : "black"  }}>LEARN MORE</button>
    </div>
  );
};

export default Card;
