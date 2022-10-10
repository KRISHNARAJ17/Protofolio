import React from "react";
import Blogs from "./Blogs";
import {Link} from 'react-router-dom'
import css from './App.css';
function Raj(){
    return( <div>


       

       <div className="container-fulid">
       
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  
  <div class="container-fluid">
    
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
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
          <a class="nav-link" href="#">Dashboard</a>
          <Link to="/Nopage">Dashboard</Link>
        </li>
        <li class="nav-item ">
          <Link to="/Blogs"> <a href="team"></a></Link>
                 </li>
                
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
      </ul>
    
    </div>
    </div>

    
    <div class="d-flex align-items-center">
      
      <a class="text-reset me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
      </a>

      
     
   
  </div>
 
</nav>
</div>
    </div>)
    
}
export default Raj;