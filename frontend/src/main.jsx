import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login.jsx"
import Search from  "./Components/Search.jsx"
import Signup from "./Components/Signup.jsx"
import HomeLogin from "./Components/HomeLogin.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search" element={<Search />} /> 
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/homelogin" element={<HomeLogin/>}></Route>
        

      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
)
