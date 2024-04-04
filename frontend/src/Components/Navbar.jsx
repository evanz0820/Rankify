<<<<<<< HEAD
import react from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';


function Navbar(){


    return(
        <div className="Navbar">

            <h1 className="R-logo">Rankify</h1>

            <div className="nav-container">
                <Link to="/" className="navbar-item">Home</Link>
                <h1 className="navbar-item">About</h1>
                <Link to="/login" className="navbar-item">Login</Link>

            </div>
            
            
        </div>
    )
}

export default Navbar
=======
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <div className="bg-red-400 p-4 flex justify-between items-center">
//       <h1 className="text-black text-2xl">Rankify</h1>
//       <div className="flex">
//         <Link to="/" className="text-black mr-4">Home</Link>
//         <Link to="/about" className="text-black">About</Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar'; // Import the Searchbar component

function Navbar({ onPlaceIDChange }) { // Pass onPlaceIDChange as prop

  const [placeID, setPlaceID] = useState(null);

  const handlePlaceIDChange = (newPlaceID) => {
    setPlaceID(newPlaceID);
  }
  return (
    <div className="bg-red-400 p-4 flex justify-between items-center">
      <h1 className="text-black text-2xl">Rankify</h1>
      <div className='flex w-3/5 '>
        <Searchbar onPlaceIDChange={handlePlaceIDChange} />

        {/* Centering the button */}
        <Link className="border-2 border-black rounded w-1/5 flex justify-center items-center" to={`/search/${placeID}`}>
          <button className="">Search!</button>
        </Link> 
      </div>
      <div className="flex justify-center"> {/* Center align the content */}
        <Link to="/" className="text-black mr-4">Home</Link>
        <Link to="/about" className="text-black mr-4">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
>>>>>>> parent of 0a3437a (moved the entire frontend folder out)
