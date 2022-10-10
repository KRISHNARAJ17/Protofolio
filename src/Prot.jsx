import React from "react";
import css from './prot.css'
import image from './image/raj.png';
import {BsYoutube} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {FaTwitter} from 'react-icons/fa';

import {MdMarkEmailRead} from 'react-icons/md';
import image1 from'./image/front.png';


function Prot(){

  return(
     <div className="container-fulid">
     
<h3>I_am_Krishna_17</h3>
       
       <div className="container">
         <div className="row">
           <div className="col-md-8">
           <h1>
             HEllO I'm <img src={image} alt="" /> raj <br/><br/>Please enter password<br/> <br/>to view my protfolio
           </h1>

           <input type="password" placeholder="Enter password" ></input>
           <button type="button" class="btn btn-dark h1">Let's go</button>

           <div className="text">

             <span>You Want Password?</span>
             <span className="h6">Request Password</span>


             <ul className="social media icon  ">
               <li className="text-danger h4  "> <BsYoutube/> </li>
               <li className="text-info h4 "><FaTwitter/> </li>
               <li className="text-primary h4 "><BsFacebook/></li>
               <li className="text-success h4  "><MdMarkEmailRead/></li>

               </ul>
             
             
            
             
             
             </div>
           
             
             
             </div>
           <div className="col-md-4">
             
              
            

          
             
             
             
             </div>
           
           
           
           
           </div>
         
         
         
         
         </div>
       
       </div>
       

      
     
    
    
    
    
    
    

        
  )



}
export default Prot;