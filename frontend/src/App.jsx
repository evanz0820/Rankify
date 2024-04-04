<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import './App.css'
import Navbar from './Components/Navbar'
import fetchData from './constants/Api';
import Search from  "./Components/Search"
import { Link } from 'react-router-dom';

function App() {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await fetchData();
        console.log("Fetched data:", data); // Log fetched data
        if (data && Array.isArray(data)) {
          setBurgers(data); // Update state with fetched data if it's an array
        } else {
          console.error("Data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
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
        <Link to="/search"><button>Search!</button></Link>
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


      {/* Content for burgers */}
      <h1>Burgers</h1>
      {/* Render fetched data */}
      <div className="burgers-container">
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
      </div>


    </div>
  );
}

export default App
=======
import React from "react";
import { useState } from "react";
import './App.css'
import Navbar from './Components/Navbar'
import Search from  "./Components/Search";
import Login from "./Components/Login";
import { Link } from 'react-router-dom';
import Searchbar from "./Components/Searchbar";


function App() {

  const [placeID, setPlaceID] = useState(null);

  const handlePlaceIDChange = (newPlaceID) => {
    setPlaceID(newPlaceID);
  }


  return (
    <div className='App flex-col'>
      {/* <Navbar /> */}
      <Navbar onPlaceIDChange={handlePlaceIDChange} /> {/* Pass handlePlaceIDChange as prop */}

      {/* <div className='search-bar bg-green-300 flex justify-center my-2 py-2'>
        <Searchbar onPlaceIDChange={handlePlaceIDChange} />
        <Link className=" border-2 border-black rounded" to={`/search/${placeID}`}><button>Search!</button></Link> 
      </div> */}

      <div className="content-login-container bg-yellow-300">
        <div className="inside-content-login flex">
          <div className="left-content w-1/2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, quos accusamus ea, dolorem provident, quia ducimus delectus beatae aliquam hic. Quis expedita culpa voluptates facilis amet dolorum possimus labore!
            </p>
          </div>
          <div className="w-1/2 ">
            <Login />
          </div>
          
        </div>
        
      </div>
      
    </div>
  )
}

export default App;
>>>>>>> parent of 0a3437a (moved the entire frontend folder out)
