import React from "react";
import './App.css'
import Navbar from './Components/Navbar'
import Search from  "./Components/Search";
import Login from "./Components/Login";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='search-bar'>
        <input 
          className="input-bar"
          type='text'
          placeholder='Search...'
        />
        <Link to="/search"><button>Search!</button></Link>
      </div>
      <div className="content-login-container">
        <div className="inside-content-login">
          <div className="left-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, quos accusamus ea, dolorem provident, quia ducimus delectus beatae aliquam hic. Quis expedita culpa voluptates facilis amet dolorum possimus labore!
            </p>
          </div>
          <Login />
        </div>
      </div>
      
    </div>
  )
}

export default App;
