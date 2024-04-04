import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login.jsx"
import Search from  "./Components/Search.jsx"
<<<<<<< HEAD

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} /> {/* Route to the Login component */}
        <Route path="/search" element={<Search />} /> 
        

      </Routes>
    </BrowserRouter>
=======
import Signup from "./Components/Signup.jsx"
import HomeLogin from "./Components/HomeLogin.jsx"
import About from "./Components/About.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            {/* <Route path="/search" element={<Search />} />  */}
            <Route path="/search/:placeID" element={<Search />} /> {/* Pass placeID as URL parameter */}
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/homelogin" element={<HomeLogin/>}></Route>
            <Route path="/login" element={<Login />} /> {/* Add a Route for Login */}
            <Route path="/about" element={<About />}></Route>
          </Routes>
    </BrowserRouter>
  
>>>>>>> parent of 0a3437a (moved the entire frontend folder out)
    {/* <App /> */}
  </React.StrictMode>,
)
