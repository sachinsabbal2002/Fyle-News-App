import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarSty.css";
import logo from './images/newre.png'

const NavBar = () => {
  const [title, setTitle] = useState("Home");
  const [disStatus,setdis]=useState('flex')
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 520) {
        setTitle('NewReader');
        setdis('none')
      } else {
        setTitle('Home');
        setdis('flex')
         // Set a default title for larger screens (optional)
      }
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function: Remove the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
    <div style={{display:`${disStatus}`, justifyContent:'center',backgroundColor:'black'}}>
    <span style={{color:"white",fontSize:'30px', letterSpacing:'2px',fontStretch:"ultra-condensed" , fontWeight:'600'}}>NewsReader<span style={{marginTop:'1px',letterSpacing:'2px', fontStyle:'revert'}}>-WorldWide</span></span>
      </div>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            className="nav-link"
            style={{
              color: "rgb(255, 255, 255)",
              fontSize: "20px",
              marginBottom: "4px",
            }}
            to="/"
          >
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginLeft: "60px" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   
    </>
  );
};

export default NavBar;
