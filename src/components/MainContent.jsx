import React from "react";
import image from "../assets/linked.jpeg";
import linkedin from "../assets/linkedin.png";
import emaill from "../assets/email.png";

const MainContent = () => {
  return (
    <div>
      <div className="main-div">
        <img src={image} alt="" />
        <h2>Mary Wangui</h2>
        <p>Blockchain Developer</p>
        <a href="https://github.com/Zeegaths">Github</a>

        <div className="button-flex">
          <a href="mailto:zarahgathoni76@email.com">
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
    </div>
  );
};

export default MainContent;
