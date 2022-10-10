import React from "react";
import {useRef,useEffect,useMemo} from  'react' 
import Css from './Nopage.css'

const box = {
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    height:'100vh',
    alignItems:'center'
}
function Nopage() {
    // const valivate = useRef();
    // const element = useRef();


    // useEffect(()=>{
    //     valivate.current.focus();
    //     const final = element.current;
    //    console.log(final)


    // },[])


    return( 
    <div>
        <div className="box" style={box}>
       
      {/* <label htmlFor="">username</label>
      <input type="text" ref={valivate}/>
      <label htmlFor="">password</label>
      <input type="text" />
      <h6 className="btn">submit</h6>
      <h2 ref={element}>Prakash</h2>
        */}
          <div className="box1 mx-2 h1">
           Hema
        </div>
       <div className="box2 mx-2 h1">
           Kutty
        </div>
        <div className="box3 h1">
            Kunjan
        </div>
       
       </div>

        

    </div>)
 
}
export default Nopage;