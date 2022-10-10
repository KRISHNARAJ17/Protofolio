import React, { useState } from "react";
import image from './image/img1.png';
import image1 from './image/img2.jpg';
import css from './dumb.css'
import Arr from './arr'

function Dumb(){
    const [playicon,setplayicon]=useState(true);
    const [question,setQuestion]=useState(0);

    const CurrentQuestion = Arr[question];

    const Change=()=>{
        setQuestion(question + 1);
    }
    const Preious=()=>{
        setQuestion(question-1);
    }

    
    
    return(
        <div className="container">
        
             <div className="card ">
      

  <div class="card text-center ">
  <div class="card-header bg-dark text-info h2 mt-1"> <img src={image}  className=" logo"    alt="" />  DUMB CHARADES  </div>
  <div class="card-body bg-light">
      
    <h5 class="card-title"></h5>
    <p class="card-text text-dark h5"> <span></span>{CurrentQuestion.Q}</p>
    <img src={image1} className="img"    alt="" />
<div className={playicon?'answer':'answers'}>
    <h1 className="text-light">Hey inga paaru uthuhhh jooruhh comedy yaaru ada namma sir uhh..</h1>
    </div>

   

    <div><button type="button" class="btn btn-danger mt-5 h1  " id="ans" onClick={()=>{setplayicon(!playicon)}}>Answer</button></div>
  
  
    <div className="row mt-4 ">
    <div className="col-md-6"><button type="button" class="btn btn-dark mt-2  h1 " onClick={Preious}>Previous</button></div>
    <div className="col-md-6"><button type="button" class="btn btn-secondary mt-2  h6 " id="button2" onClick={Change}>Next</button></div>
    

    </div>

  


 
</div>
    
<div className="footer">1of18</div>
  </div>

      </div>
      </div>
        
    )
}
export default Dumb;