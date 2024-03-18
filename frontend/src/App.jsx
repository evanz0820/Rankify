import React, { useState, useEffect } from "react";
import './App.css'
import Navbar from './Components/Navbar'
import fetchData from './constants/Api';
import Search from  "./Components/Search";
import Login from "./Components/Login";
import { Link } from 'react-router-dom';

function App() {
  // const [burgers, setBurgers] = useState([]);

  // API Call to show up example of API
  // useEffect(() => {
  //   const fetchDataFromApi = async () => {
  //     try {
  //       const data = await fetchData();
  //       console.log("Fetched data:", data); // Log fetched data
  //       if (data && Array.isArray(data)) {
  //         setBurgers(data); // Update state with fetched data if it's an array
  //       } else {
  //         console.error("Data is not an array:", data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchDataFromApi();
  // }, []); // Empty dependency array to run once on mount

  return (
    <div className='App'>
      <Navbar />

      {/* This is Irvin's Branch */}

      {/* Search Bar */}
      <div className='search-bar'>
        <input 
          className="input-bar"
          type='text'
          placeholder='Search...'
          // value={searchTerm}
          // onChange={handleInputChange}
        />
        {/* <img src={searchIcon} alt='Search' className='search-icon' /> */}
        <Link to="/search"><button>Search!</button></Link>
      </div>

      {/* Second half  */}
      <div className="content-login-container">

        <div className="inside-content-login">


          <div className="left-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, quos accusamus ea, dolorem provident, quia ducimus delectus beatae aliquam hic. Quis expedita culpa voluptates facilis amet dolorum possimus labore!</p>
          </div>

          {/* Mock create account bar */}
          <Login/>
          
        
        </div>
      </div>


    </div>
  )
}

export default App
