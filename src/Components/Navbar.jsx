import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar"; // Import the Searchbar component
import ProfileDropdown from "./ProfileDropdown";

function Navbar({ isTransparent = false }, { onPlaceIDChange }) {
  const [navBackground, setNavBackground] = useState(false);
  const [placeID, setPlaceID] = useState(null);

  const handlePlaceIDChange = (newPlaceID) => {
    setPlaceID(newPlaceID);
  };

  const changeBackground = () => {
    if (window.scrollY >= 800) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

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

      <div className="flex min-w-[150px] w-1/3 p-2 bg-white rounded-full shadow-md border-2 absolute">
        <div className="flex grow items-center rounded-full">
          <input
            className="w-full px-4 py-2 focus:outline-none text-black"
            type="text"
            placeholder="Search..."
            // value={searchTerm}
            // onChange={handleInputChange}
          />
          {/* <img src={searchIcon} alt='Search' className='search-icon' /> */}
          <Link to="/search">
            <button className="flex-shrink-0 px-2 py-2 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-400 transition-colors duration-300 ease-in focus:outline-none">
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
      </div>

      <div className="flex items-center justify-center font-semibold mr-1">
        {/* placeholder nav items; change later */}
        {isTransparent ? (
          <Link
            to="/AboutUs"
            className={`rounded-full px-4 py-2 text-md hidden md:inline truncate ${
              navBackground
                ? "text-black transition ease-in duration-200"
                : "text-white transition ease-out duration-200"
            }`}
          >
            Write a Review
          </Link>
        ) : (
          <Link
            to="/AboutUs"
            className={`rounded-full px-4 py-2 text-md hidden md:inline truncate text-black`}
          >
            Write a Review
          </Link>
        )}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.7"
            stroke="currentColor"
            className={`w-6 h-6 text-black md:hidden mr-4`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>

        {/* TODO: Login will turn into profile icon when logged in, will route to their profile page
        <Link
          to="/login"
          className="bg-black hover:bg-neutral-800 transition-colors duration-100 ease-in rounded-full px-5 py-2 text-lg text-white tracking-wide"
        >
          Login
        </Link> */}
        <ProfileDropdown />
      </div>

      {/* 4/4/2024 RYAN'S NOTE: Commented this out cuz it overlapped with my static navbar navbar */}
      {/*<div className="bg-red-400 p-4 flex justify-between items-center">
      <h1 className="text-black text-2xl">Rankify</h1>
      <div className='flex w-3/5 '>
        <Searchbar onPlaceIDChange={handlePlaceIDChange} />

        {/* Centering the button 
        <Link className="border-2 border-black rounded w-1/5 flex justify-center items-center" to={`/search/${placeID}`}>
          <button className="">Search!</button>
        </Link> 
      </div>
      <div className="flex justify-center"> {/* Center align the content 
        <Link to="/" className="text-black mr-4">Home</Link>
        <Link to="/about" className="text-black mr-4">About</Link>
      </div>
    </div>*/}
    </nav>
  );
}

export default Navbar;
