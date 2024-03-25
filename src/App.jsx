import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import fetchData from "./constants/Api";
import Search from "./Components/Search";
import { Link } from "react-router-dom";
import Footer from "./Components/Footer";

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
      <section className="relative flex flex-col text-white bg-[url('src/assets/homepage-hero-image.jpg')] bg-center bg-cover bg-blend-overlay bg-fixed bg-black/45 pb-5">
        <Navbar isTransparent={true} />
        {/* Hero Content  */}
        <div className="container-full h-[700px] flex flex-col md:flex-row items-center justify-center mx-auto px-6">
          <div className="flex flex-col md:w-1/2 md:mb-0 mb-10">
            <h1 className="max-w-xl text-[2.9rem] text-center md:text-left leading-none font-extrabold md:text-[4rem] md:leading-tight mb-5">
              Your <span className="text-orange-100">Voice,</span> Your{" "}
              <span className="text-emerald-500">Reviews.</span>
            </h1>
            <p className="max-w-xl  text-gray-200 text-center md:text-left">
              Unlock the power of informed decision-making with Rankify. We're
              here to guide you through the maze of choices by providing
              authentic, unbiased reviews on a wide range of products and
              services.
            </p>
            <Link to="/AboutUs" className="self-center md:self-start ">
              <button className="max-w-48 mt-4 bg-blend-overlay bg-fixed bg-black/60 hover:bg-black transition-colors rounded-xl px-8 py-2 text-lg text-white tracking-wide">
                Learn More
              </button>
            </Link>
          </div>

          {/* Mock create account bar */}
          <div className="flex flex-col md:w-1/2 md:mb-0 mb-10 md:pl-20">
            <h1 className="max-w-xl text-4xl leading-none font-bold text-center md:text-left md:leading-tight mb-5">
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
                type="password"
                placeholder="Password"
                // value={searchTerm}
                // onChange={handleInputChange}
              />
              <button className="self-center w-full mt-3 bg-black hover:bg-neutral-700 transition-colors rounded-full px-24 py-2 text-lg text-white tracking-wide">
                Join
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="relative flex bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">
              Explore Reviews
            </h2>
            <p className="mt-2 text-lg leading-8 text-center text-gray-600">
              Read what others have to say!
            </p>
          </div>
        </div>
      </div>

      {/* Content for burgers */}
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

      <Footer />
    </div>
  );
}

export default App;
