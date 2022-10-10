import React from "react";
import "./first.css";
import mann from "./image/man.png";
import { GoThreeBars } from "react-icons/go";
import back from "./image/b1.jpg";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

function First() {
  return (
    <div>
      {/* body section */}
      {/* 
      <nav class="navbar navbar-expand-lg sam ">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div class="d-flex align-items-center">
            <a class="text-reset me-3" href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>

            <div class="dropdown">
              <a
                class="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false">
                <i class="fas fa-bell"></i>
                <span class="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a class="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar">
                <li>
                  <a class="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> */}

      <div className="container-fulid body">
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
                  <li class="nav-item ">Home</li>
                </Link>
                <Link to="/Aboutme">
                  {" "}
                  <li class="nav-item">About me</li>
                </Link>

                <Link to="/Works">
                  {" "}
                  <li class="nav-item  ">Works</li>
                </Link>
                <Link to="/Myresume">
                  {" "}
                  <li class="nav-item">My Resume</li>
                </Link>
                <Link to="/Contact">
                  {" "}
                  <li class="nav-item">Contact </li>{" "}
                </Link>
              </ul>
            </div>
          </div>
        </nav>
        {/* <div className="row">
          <div className="col-4 text-center h1  raj">I_am_Krishna</div>
          <div className="col-8 text-center">
            <p className="menu h3 mx-3 text-end mt-4 ">
              <GoThreeBars />
            </p>

            <ul className="home h6">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Resume</li>
              <li>Page</li>
            </ul>
          </div>
        </div> */}
        <div className="row">
          <div className="col-md-6">
            <p className="well">WELCOME TO MY WEBSITE</p>
            <h1 className="hi">
              Hi, I'm Krishnaraj <br /> a <span id="spin"></span>
            </h1>

            <div className="vl"></div>
            <div className="ind h5 ">
              INDIA,
              <br /> <br />{" "}
              <a className="  text-dark-tamil">Tamilnadu,Cuddalore 607 302</a>
            </div>

            <button type="button" class="btn btn-dark">
              My Resume
            </button>
            <p className="vertical">
              fellow me
              <AiFillGithub className="git" />
              <BsFacebook className="fb" />
              <BsInstagram className="instag" />
              <FaTwitter className="twit" />
            </p>
          </div>

          <div className="col-md-6">
            <img src={mann} className="img-man" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
