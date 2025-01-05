import React from "react";
import "./FooterStyle.css";

const Foote = () => {
    
  return (
    <>
    <div style={{height:"50px"}}><p>{}</p></div>
    <br></br>
       <div className="container footer-bottom clearfix" style={{backgroundColor:'rgb(45, 47, 48)',maxWidth:"100vw", padding:'2px',left:'0',bottom:"0", marginTop:'70px',color:'rgba(250, 247, 247, 0.997)'}}>
        <div className="copyright" style={{textAlign:'center'}}>
          © Copyright{" "}
          <strong>
            <span>NewsReader</span>
          </strong>
          . All Rights Reserved
        </div>
        <div >
            <p style={{textAlign:"center"}}>Agree to the term and Privacy</p>
        </div>
      </div>
    </>
  );
};

export default Foote;
