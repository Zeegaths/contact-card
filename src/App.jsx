import React from "react";
import "./App.css";
import image from "../public/linked.jpeg";
import linkedin from "./assets/linkedin.png";
import emaill from "./assets/email.png";
import twitter from "./assets/Twitter Icon.png";
import { SiMedium } from "react-icons/si";
import instagram from "./assets/Instagram Icon.png";
import github from "./assets/GitHub Icon.png";
function App() {
  return (
    <>
      <div className="main-div">
        <img src={image} alt="" />
        <h2>Mary Wangui</h2>
        <p>Blockchain Developer</p>
        <a href="https://github.com/Zeegaths">Github</a>

        <div className="button-flex">
          <a href="mailto:zarahgathoni76@email.com?subject=Contact%20from%20Portfolio&body=Hello,%0A%0AI%20would%20like%20to%20discuss...">
            <div className="email">
              <img src={emaill} alt="Email Icon" />
              <p>Email</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/mary-wangui--/">
            <div className="linkedIn">
              <img src={linkedin} alt="" />
              <p>LinkedIn</p>
            </div>
          </a>
        </div>
      </div>
      <div>
        <div className="text-1">
          <h3>About</h3>
          <p>
            I'm a smart contract developer.I write solidity, cairo, rust and
            currently learning react. I build dapps and create blockchain
            solutions to solve real-world problems.
          </p>
        </div>
        <div className="text-1">
          <h3>Interests</h3>
          <p>Building, nature, art, climate action</p>
        </div>
      </div>
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
    </>
  );
}

export default App;
