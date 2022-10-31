import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Camilla</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
           
          </ul>
        </div>
        
<a href="tel: +27 76 611 3812" target="_target"><button className="button n-button">Contact</button></a>
        
      </div>
    </div>
  );
};

export default navbar;
