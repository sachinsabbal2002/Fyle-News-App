// import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import {BrowserRouter ,Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  // local run fine : problem identify beacase calling api problem 
  // const apiKey = process.env.REACT_APP_NEWS_API
  const { user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
  console.log("Current User", user);
  const [progress, setProgress] = useState(3)
  const [refreshKey, setRefreshKey] = useState(0);
  const [page,setcurrentpage]=useState();
  return (
    <BrowserRouter key={refreshKey}>
      {isAuthenticated && <h6>Hello {user.name}</h6>}
       {isAuthenticated ? (
        <button onClick={(e) =>logout()}>Logout</button>) : (<button onClick={(e) => loginWithRedirect()}>
        Login or Signup
        </button>
        )}
     
      <NavBar />
      <LoadingBar height={1} color='#f11946' progress={progress} />
      <div style={{height:'10px'}}></div>
      <Routes>
       <Route path="/" element={<News category="general" setProgress={setProgress} pageno={3} setcurrentpage={setcurrentpage} />} /> 
       <Route path="/general" element={<News category="general" setProgress={setProgress} pageno={3} setcurrentpage={setcurrentpage} />} /> 
       <Route path="/entertainment" element={<News category="entertainment" setProgress={setProgress} pageno={2} setcurrentpage={setcurrentpage} />} /> 
       <Route path="/business" element={<News category="business" setProgress={setProgress} pageno={1} setcurrentpage={setcurrentpage} />} /> 
       <Route path="/health" element={<News category="health" setProgress={setProgress} pageno={4} setcurrentpage={setcurrentpage} />} /> 
       <Route path="/technology" element={<News category="technology" setProgress={setProgress} pageno={7} setcurrentpage={setcurrentpage} />} /> 
       <Route path="/science" element={<News category="science" setProgress={setProgress} />} pageno={5} setcurrentpage={setcurrentpage} /> 
       <Route path="/sports" element={<News category="sport" setProgress={setProgress} pageno={6} setcurrentpage={setcurrentpage} />} /> 
    </Routes>
    </BrowserRouter >

  )

}

export default App;

