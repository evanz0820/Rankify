import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login.jsx"
import Search from  "./Components/Search.jsx"
import About from './Components/About.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} /> {/* Route to the Login component */}
        <Route path="/search" element={<Search />} /> 
        <Route path="/about" element={<About />} />

        

      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
)
