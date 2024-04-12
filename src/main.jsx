import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login.jsx"
import Search from  "./Components/Search.jsx"
import Profile from './Components/Profile.jsx';
import AboutUs from './Components/AboutUs.jsx';
import Signup from './Components/Signup.jsx';
import Review from './Components/Review.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} /> {/* Route to the Login component */}
        <Route path="/search" element={<Search />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/search/:placeID" element={<Search />} /> {/* Pass placeID as URL parameter */}
        {/* 4/4/24 RYAN'S NOTE: I had to comment these out to make stuff work, fix/include these later */}
        
        {/* <Route path="/homelogin" element={<HomeLogin/>} />  */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/review" element={<Review />} />


        

      </Routes>
    </BrowserRouter>
  
    {/* <App /> */}
  </React.StrictMode>,
)
