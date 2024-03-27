
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar'; // Import the Searchbar component
import axios from "axios"


function Navbar({ onPlaceIDChange }) { // Pass onPlaceIDChange as prop

  const [placeID, setPlaceID] = useState(null);

  const handlePlaceIDChange = (newPlaceID) => {
    setPlaceID(newPlaceID);
  }


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8081/homelogin')
      .then(res => {
        setIsLoggedIn(res.data.valid);
      })
      .catch(err => console.log(err));
  }, []);

  const handleLogout = () => {
    axios.post('http://localhost:8081/logout')
      .then(res => {
        if (res.data.success) {
          setIsLoggedIn(false);
        } else {
          console.log("Logout failed");
        }
      })
      .catch(err => console.log(err));
  };


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


      <div className="tab-container flex justify-center">
        <Link to="/" className="">Home</Link>
        {isLoggedIn ? (
          <>
            {/* <Link to="/write-review" className="">Write a Review</Link> */}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup" className="">Signup</Link>
            <Link to="/login" className="">Login</Link>
          </>
        )}
      </div>
      
      {/* <div className="flex justify-center"> 
        <Link to="/" className="text-black mr-4">Home</Link>
        <Link to="/about" className="text-black mr-4">About</Link>
      </div> */}
    </div>
  );
}

export default Navbar;
