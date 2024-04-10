import React from "react";
import { useState } from "react";
import './App.css'
import Navbar from './Components/Navbar'
import { Link } from 'react-router-dom';


function App() {

  const [placeID, setPlaceID] = useState(null);

  const handlePlaceIDChange = (newPlaceID) => {
    setPlaceID(newPlaceID);
  }


  return (
    <div className='App flex-col'>
      {/* <Navbar /> */}
      <Navbar onPlaceIDChange={handlePlaceIDChange} /> {/* Pass handlePlaceIDChange as prop */}

      <section className="relative flex flex-col text-white bg-[url('/src/assets/homepage-hero-image.jpg')] bg-center bg-cover bg-blend-overlay bg-fixed bg-black/45">
        {/* Hero Content  */}
        <div className="container-full h-screen flex flex-col items-center justify-center px-6 pt-6">
          <div className="flex flex-col mb-10">
            <h1 className="max-w-lg text-center mx-auto text-[2.9rem] leading-none font-extrabold md:text-[4rem] md:leading-tight mb-5">
              Your <span className="text-orange-100">Voice,</span> Your{" "}
              <span className="text-emerald-500">Reviews.</span>
            </h1>
            <p className="max-w-xl text-center text-gray-200 leading-relaxed text-lg">
              Unlock the power of informed decision-making with Rankify. We're
              here to guide you through the maze of choices by providing
              authentic, unbiased reviews on a wide range of products and
              services.
            </p>
            <Link to="/" className="self-center">
              <button className="max-w-48 mt-5 bg-blend-overlay bg-fixed bg-black/70 hover:bg-black transition-colors duration-100 ease-in rounded-xl px-8 py-2 text-lg text-white tracking-wide">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default App;
