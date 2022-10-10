import React from "react";
import { BrowserRouter, Router,Route,Routes} from "react-router-dom";


import About from './About';
import Work from './Work';
import Contact from "./Contact";
import Dumb from "./Dumb";
import Prot from "./Prot";
import  Quiz from "./quiz"
import Dumps from './Dumps'

function App(){
    return(
     
   <Routes>
    
      <Route exact path="/About" element={<About/>}></Route>
        <Route exact path="/Work" element={<Work />}></Route> 
        <Route exact path="/aiv" element={<Dumps/>}></Route> 


        

       
        
        
     
    </Routes> 
  

    )
}

export default App