import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import fetchData from "./constants/Api";
import Search from "./Components/Search";
import { Link } from "react-router-dom";

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
    <div className="App">
      {/* Navbar+Hero hydrid section */}
      <section className="relative container-full flex flex-col text-white bg-[url('src/assets/homepage-hero-image.jpg')] bg-center bg-cover bg-blend-overlay bg-fixed bg-black/45 py-5">
        <Navbar isTransparent={true} />
        {/* Hero Content  */}
        <div className="h-[700px] flex flex-wrap md:flex-nowrap items-center justify-center mx-auto">
          <div className="flex flex-col text-center md:text-left md:w-1/2 md:mx-12">
            <h1 className="max-w-xl text-[2.9rem] leading-none font-extrabold lg:text-[4rem] md:leading-tight mb-5">
              Your <span className="text-orange-100">Voice,</span> Your <span className="text-emerald-500">Reviews.</span>
            </h1>
            <p className="max-w-xl mx-2 sm:mx-0 text-gray-200  lg:max-w-md">
              Unlock the power of informed decision-making with Rankify. We're
              here to guide you through the maze of choices by providing
              authentic, unbiased reviews on a wide range of products and
              services.
            </p>
            <button className="self-center md:self-start max-w-48 mt-5 bg-blend-overlay bg-fixed bg-black/60 hover:bg-black transition-colors rounded-xl px-8 py-2 text-lg text-white tracking-wide">Learn More</button>
          </div>

          {/* Mock create account bar */}
          <div className="md:w-1/2 md:mx-12">
            <h1 className="max-w-xl text-4xl leading-none font-extrabold text-center md:text-left md:leading-tight mb-5">
              Create an Account!
            </h1>
            <p className="max-w-xl text-center text-l text-gray-200 md:text-left md:max-w-md">
              Create an account to unlock the best of Rankify.
            </p>
            <form action="" className="flex flex-col items-left max-w-96">
              <input
                className="block rounded-full w-full px-4 py-2 focus:outline-none text-black mt-3"
                type="text"
                placeholder="Email Address"
                // value={searchTerm}
                // onChange={handleInputChange}
              />
              <input
                className="block rounded-full w-full px-4 py-2 focus:outline-none text-black mt-3"
                type="text"
                placeholder="Password"
                // value={searchTerm}
                // onChange={handleInputChange}
              />
              <button className="self-center mt-3 bg-black hover:bg-neutral-700 transition-colors rounded-full px-24 py-2 text-lg text-white tracking-wide">Join</button>
            </form>
          </div>
        </div>
      </section>

      {/* Content for burgers */}
      <h1>Burgers</h1>
      {/* Render fetched data */}
      <div className="burgers-container">
        {burgers.map((burger) => (
          <div key={burger.id} className="burger-item">
            <h2>{burger.name}</h2>
            <p>{burger.desc}</p>
            <p>Price: ${burger.price}</p>
            <p>{burger.veg ? "Vegetarian" : "Non-vegetarian"}</p>
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

export default App;
