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
