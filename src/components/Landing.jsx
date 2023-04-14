import React from "react";
import "./Landing.css";
import vector from "../images/Vector.png";
import pizza from "../images/pizza.png";
import logo from "../images/Logo.png";
const Landing = () => {
  return (
    <div className=" container1">
        <header>
            <img src={logo} alt="logo" className="logo" />
            <button className="btnn" > Get in Touch</button>
        </header>
      <div className="smCon1">
        <img src={vector} className="vector" />
        <img src={pizza}  />
      </div>
      <div className="details">
        
        <p className="title">Discover the <span style={{color:"#E23744"}}>Best</span> Food and Drinks</p>
        <p className="subTitle">
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>
      <button className="btn6">Explore Now!</button>

      </div>
      
    </div>
    
  );
};

export default Landing;
