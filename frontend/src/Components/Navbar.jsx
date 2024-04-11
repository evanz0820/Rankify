
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar'; // Import the Searchbar component
import axios from "axios";
import ProfileDropdown from "./ProfileDropdown";


function Navbar({ isTransparent = false },{ onPlaceIDChange }) { // Pass onPlaceIDChange as prop

  const [navBackground, setNavBackground] = useState(false);
  const [placeID, setPlaceID] = useState(null);

  const handlePlaceIDChange = (newPlaceID) => {
    setPlaceID(newPlaceID);
  }

  const changeBackground = () => {
    if (window.scrollY >= 700) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

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
    <nav
      className={`flex container-full items-center fixed justify-around top-0 h-20 w-full z-10 ${
        navBackground && isTransparent
          ? "bg-white border-b-2 border-opacity-25 border-b-gray-400 transition ease-in duration-200"
          : "bg-transparent transition ease-out duration-200"
      }
      ${isTransparent === false && "bg-white"}`}
    >
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center text-emerald-500 mr-52 sm:mr-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
          <span className="font-semibold text-2xl tracking-tight">Rankify</span>
        </div>
      </Link>


      <div className='flex w-full '>
        <Searchbar onPlaceIDChange={handlePlaceIDChange} />

        {/* Centering the button */}
        <Link to={`/search/${placeID}`}>
          <button className="flex-shrink-0 px-2 py-2 bg-emerald-500 text-white ml-6 font-semibold rounded-full hover:bg-emerald-400 transition-colors duration-300 ease-in focus:outline-none">
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
          </button>
          
        </Link> 
      </div>

      
      <div className="tab-container flex justify-center">
        <Link to="/" className="pr-2 text-white">Home</Link>
        {isLoggedIn ? (
          <>
            {/* <Link to="/write-review" className="">Write a Review</Link> */}
            <Link to="/create" className="pr-2">Write a Review</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            
            <Link to="/login" className="text-white">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
