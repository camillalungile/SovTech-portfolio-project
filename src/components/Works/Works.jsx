import React, { useContext } from "react";
import "./Works.css";
import cisco from "../../img/cisco.png";
import javascript from "../../img/javascript.png";
import Python from "../../img/Python.png";
import sql from "../../img/sql.png";
import c from "../../img/c.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
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
            Why I Want to work for:
          </span>
          <span>SovTech</span>
          <spane>
            
            <br />
            Upon my research I learnt that the company supports it's customers and provides<br/> good
             excellent software products to    clients.Furthermore I learnt that the company<br/> 
             supports it's employees to strive towards their full potential and evolve themselves<br/>
              withi the organization conjuicively and that is definitely in line with my career<br/> 
              aspirations. For the past 11 years you have grown persistent and strived towards<br/> 
              improving your good quality sevices and bettering your craft into becoming <br/> giant
               you are today and most successful attractive company you have become.
            <br />
           
            <br />
            As a computer science graduate  and a current honours student with software <br/> engineering  as one of my majors, I believe that I am a perfect fit for your <br/>software engineering vacancy  opening.
            I possess problem solving skills <br/> such as analysis, parallel thinking  and abstraction that I have acquired <br/> throughout my years in varsity. I believe that those are skills that could  be used to <br/> design and build mobile and web applications
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
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
        >
          <div className="w-secCircle">
            <img src={cisco} alt="" className="programming" />
          </div>
          <div className="w-secCircle">"
            <img src={javascript} className="programming" alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Python} alt=""  className="programming"/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={sql} alt="" className="programming" />
          </div>
          <div className="w-secCircle">
            <img src={c} alt="" className="programming" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
