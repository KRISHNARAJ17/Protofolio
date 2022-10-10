import React from "react";
import { Link } from "react-router-dom";
import "./aboutme.css";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

function Aboutme() {
  return (
    <div className="body-full">
      <nav class="navbar navbar-expand-lg navbar-light sam">
        <div class="container-fluid">
          <h2 className="raj">I_am_Krishna</h2>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarRightAlignExample"
            aria-controls="navbarRightAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="fas fa-bars mt-3 text-dark"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarRightAlignExample">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link to="/">
                {" "}
                <li class="nav-item ">Home</li>{" "}
              </Link>
              <Link to="/Aboutme">
                {" "}
                <li class="nav-item">About me</li>{" "}
              </Link>

              <Link to="/Works">
                {" "}
                <li class="nav-item ">Works</li>
              </Link>
              <Link to="/Myresume">
                {" "}
                <li class="nav-item">My Resume</li>{" "}
              </Link>
              <Link to="/Contact">
                {" "}
                <li class="nav-item">Contact </li>{" "}
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div className="abme">
        <div className="col-lg-12 text-center  text-dark-about">
          <p>
            About Me
            <hr />
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-lg-8">
          <p className="para-1 ">
            I am a website designer from India, with a strong focus in UI/UX
            design. I love to get new experiences <br />{" "}
            <span className="para-line-2">
              and always learn from my surroundings. I've done some projects.
              You can check it through
            </span>
            <br />{" "}
            <span className="para-line-3">
              portfolio section on this website. I looking forward to any
              opportunities and challenges.
            </span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-1 ">
          <small className="fellow-me-2 ">
            Fellow me
            <AiFillGithub className="git" />
            <BsFacebook className="fb" />
            <BsInstagram className="instag" />
            <FaTwitter className="twit" />
          </small>
        </div>
        <div className="row text-center about-row">
          <div className="col-sm-3">
            {" "}
            <div class="ui-widgets">
              <div class="ui-values">85%</div>
              <div class="ui-labels">HTML5</div>
            </div>
          </div>
          <div className="col-sm-3">
            {" "}
            <div class="ui-widgets">
              <div class="ui-values">80%</div>
              <div class="ui-labels">CSS3</div>
            </div>
          </div>
          <div className="col-sm-3">
            {" "}
            <div class="ui-widgets">
              <div class="ui-values">65%</div>
              <div class="ui-labels">Javascript</div>
            </div>
          </div>
          <div className="col-sm-3">
            {" "}
            <div class="ui-widgets">
              <div class="ui-values">70%</div>
              <div class="ui-labels">React js</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
