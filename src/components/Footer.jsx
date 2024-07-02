import React from "react";
import twitter from "../assets/Twitter Icon.png";
import { SiMedium } from "react-icons/si";
import instagram from "../assets/Instagram Icon.png";
import github from "../assets/GitHub Icon.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <a href="https://x.com/gathoni_zarah">
          <img src={twitter} alt="X" />
        </a>
        <a href="https://medium.com/@zarahgathoni76">
          <SiMedium />
        </a>

        <a href="https://www.instagram.com/gqthoni/">
          <img src={instagram} alt="" />
        </a>

        <a href="https://github.com/Zeegaths">
          <img src={github} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
