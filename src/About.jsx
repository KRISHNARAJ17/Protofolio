import React from "react";
import logo1 from "./image/logo.png";
import "./abo.css";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import image7 from "./image/avatar1.png";
import code1 from "./image/webimg.png";

function About() {
  return (
    <div className="body">
      <div className="body-inner">
        <div className="header ">
          <div className="row">
            <div className="col-sm-4">
              <img src={logo1} className="imeg" alt="" />{" "}
              <a className="myname">krishna</a>
            </div>
            <div className="col-sm-4">
              <p className="mobile">
                {" "}
                <BsTelephoneInbound className="mobile-icon mx-1 h4 mt-1" /> +91
                7695893520 <span className="backslash">/</span>{" "}
                <span className="mail">
                  {" "}
                  <HiMail className="mail-icon mx-1 h3 mt-1" />
                  Krishna_fed@gmail.com
                </span>
              </p>
            </div>
            <div className="col-sm-4">
              <img src={image7} className="ime" alt="" />
            </div>
          </div>
        </div>
        <div className="line-top-1">
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-2">d</div>
            <div className="col-md-4 text-1 ">
              <h1 className="">
                {" "}
                <span className="my">My</span> Specialization
              </h1>
              <img src={code1} className="code" alt="" />
              <div className="con mt-3 h3 text-light">
                Frontend webdeveloper
                <p className="p1 mt-4">
                  {" "}
                  i am well known frontend developer <br /> responsve webpages
                  and atractive web desgins
                </p>
              </div>
            </div>
            <div className="col-md-4 skil">
              <h1>My Skills</h1>
              <p className="mt-4">HTML5</p>

              <p>CSS3</p>

              <p>JAVASCRIPT</p>
              <p>BOOTSTARP</p>
              <p>REACT JS</p>
              <p>PHP</p>
            </div>
            <div className="col-sm-1">s</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
