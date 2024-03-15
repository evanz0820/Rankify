import React, { useState, useEffect } from "react";
import './App.css'
import Navbar from './Components/Navbar'
import fetchData from './constants/Api';
import Search from  "./Components/Search";
import Login from "./Components/Login";
import { Link } from 'react-router-dom';

function App() {
  const [burgers, setBurgers] = useState([]);

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
          class="input-bar"
          type='text'
          placeholder='Search...'
          // value={searchTerm}
          // onChange={handleInputChange}
        />
        {/* <img src={searchIcon} alt='Search' className='search-icon' /> */}
        <Link to="/search"><button>Search!</button></Link>
      </div>

      {/* Second half  */}
      <div class="content-login-container">

        <div class="inside-content-login">


          <div class="left-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, quos accusamus ea, dolorem provident, quia ducimus delectus beatae aliquam hic. Quis expedita culpa voluptates facilis amet dolorum possimus labore!</p>
          </div>

          {/* Mock create account bar */}
          <Login/>
          
        
        </div>
      </div>


      {/* Content for burgers */}
      {/* <h1>Burgers</h1> */}
      {/* Render fetched data */}
      {/* <div className="burgers-container">
        {burgers.map(burger => (
          <div key={burger.id} className="burger-item">
            <h2>{burger.name}</h2>
            <p>{burger.desc}</p>
            <p>Price: ${burger.price}</p>
            <p>{burger.veg ? 'Vegetarian' : 'Non-vegetarian'}</p>
            <h3>Ingredients:</h3>
            <ul>
              {burger.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}


    </div>
  )
}

export default App
