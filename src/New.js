import React from "react";
import { BrowserRouter, Router,Route,Routes} from "react-router-dom";
import First from"./First"
import Aboutme from "./About me";
import Works from "./Works";
import MyResume from "./My Resume";
import Contact from "./Contact";


function New(){
    return(
        <Routes>
        <Route exact path='/' element={<First/>}></Route>
        
          <Route exact path="/Aboutme" element={<Aboutme />}></Route> 
          <Route exact path="/Works" element={<Works />}></Route> 
          <Route exact path="/Myresume" element={<MyResume/>}></Route>  
          <Route exact path="/Contact" element={<Contact/>}></Route>  
   
 
         
 
        
         
         
      
     </Routes> 
   

    )
}
export default New;