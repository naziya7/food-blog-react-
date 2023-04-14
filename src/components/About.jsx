import React from "react";
import "./About.css";
import Spoon from "../images/spoon.png";
import { Button } from "@chakra-ui/react";
const About = () => {
  return (
    <div className="bg2">
      <img src={Spoon} alt="spoon" className="img2" />
      <div className="container">
        <p className="headingB">About Us</p>
        <p className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        {/* <button className="btn3">Read More</button> */}
        <Button colorScheme="red" style={{ borderRadius: '27px', width:'132px' , height:'42px' }} >Read More</Button>
    
      </div>
    </div>
  );
};

export default About;
