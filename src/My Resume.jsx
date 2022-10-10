import React from "react";
import { Link } from "react-router-dom";

function MyResume() {
  return (
    <div>
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
    </div>
  );
}

export default MyResume;
