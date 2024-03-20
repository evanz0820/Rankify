import React, { useState, useEffect, useRef } from "react";
import './App.css'
import Navbar from './Components/Navbar'
import fetchData from './constants/Api';
import Search from  "./Components/Search"
import { Link } from 'react-router-dom';
import Searchbar from "./Components/Searchbar";
import places from "./Components/places";
import MapView from './Components/Map'

function App() {
  const inputRef = useRef()
  const inputStyle= {
    boxShadow: 'inset 0 0 10px #eee !important',
    border: '2px solid #eee',
    width: '456px',
    height: '40px',
    marginLeft: '16px',
    borderRadius: '20px',
    fontWeight: '300 !important',
    outline: 'none',
    padding: '10px 20px',
    marginBottom: '10px',
  }

  const autoComplete = new window.google.maps.places.Autocomplete(
    inputRef.current,
  )

  autoComplete.addListener('place_changed', () => {
    const place = autoComplete.getPlace()
    if (!place.geometry || !place.geometry.location) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
        alert("this location not available")
    }
    if (place.geometry.viewport || place.geometry.location) {
        // do something
        console.log(place.geometry.location)
    }
  })
  return (
    <div className='App'>
      
      <Navbar />

      <Searchbar />

      {/* Second half  */}
      <div className="content-login-container">

        <div className="inside-content-login">


          <div className="left-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, quos accusamus ea, dolorem provident, quia ducimus delectus beatae aliquam hic. Quis expedita culpa voluptates facilis amet dolorum possimus labore!</p>
          </div>

            {/* Mock create account bar */}
          <div className="right-content">
            <h1>Create an Account!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, eum? Illo, libero cumque consectetur sit nisi sapiente doloribus possimus blanditiis dolorem consequuntur sed odio iste, recusandae perspiciatis repellat nulla ipsa?</p>
             <input
               className="input-bar"
              type='text'
              placeholder='Email Address'
              // value={searchTerm}
              // onChange={handleInputChange}
            />
             <input
               className="input-bar"
              type='text'
              placeholder='Password'
              // value={searchTerm}
              // onChange={handleInputChange}
            />
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default App
