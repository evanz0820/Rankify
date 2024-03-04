import React, { useState, useEffect } from "react";
import './App.css'
import Navbar from './Components/Navbar'
import fetchData from './constants/Api';



function App() {
  useEffect(() => {
    const fetchDataFromApi = async () => {
      const data = await fetchData();
      if (data) {
        console.log(data);
        // Handle your data here
      }
    };

    fetchDataFromApi();
  }, []); // Empty dependency array to run once on mount
  
  return (
    <div className='App'>
      <Navbar />

      {/* This is Irvin's Branch */}

      {/* Search Bar */}
      <div className='search-bar'>
        <input 
          class="input-bar"
          type='text'
          placeholder='Search...'
          // value={searchTerm}
          // onChange={handleInputChange}
        />
        {/* <img src={searchIcon} alt='Search' className='search-icon' /> */}

      </div>

      {/* Second half  */}
      <div class="content-login-container">

        <div class="inside-content-login">


          <div class="left-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, quos accusamus ea, dolorem provident, quia ducimus delectus beatae aliquam hic. Quis expedita culpa voluptates facilis amet dolorum possimus labore!</p>
          </div>

            {/* Mock create account bar */}
          <div class="right-content">
            <h1>Create an Account!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, eum? Illo, libero cumque consectetur sit nisi sapiente doloribus possimus blanditiis dolorem consequuntur sed odio iste, recusandae perspiciatis repellat nulla ipsa?</p>
            <input 
              class="input-bar"
              type='text'
              placeholder='Email Address'
              // value={searchTerm}
              // onChange={handleInputChange}
            />
            <input 
              class="input-bar"
              type='text'
              placeholder='Password'
              // value={searchTerm}
              // onChange={handleInputChange}
            />
          </div>
        
        </div>
      </div>

    {/* Ending div for root */}
    </div>
  )
}

export default App
