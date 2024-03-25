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

  const reviews = [
    {
      id: 1,
      user: "McDonaldsFan123",
      title: "Always My Go-To Spot for a Quick Bite!",
      description:
        "I've been a loyal fan of McDonald's for years, and it never disappoints! Whenever I'm in need of a quick and tasty meal, McDonald's is my go-to spot. Their classic Big Mac never fails to satisfy my hunger cravings, and the fries are always crispy and delicious. I also love the convenience of their drive-thru service, which makes grabbing a meal on the go super easy. The staff are always friendly and efficient, ensuring that I have a pleasant dining experience every time. Overall, McDonald's has consistently provided me with great-tasting food and excellent service, making it my favorite fast-food restaurant!",
      rating: 5,
    },
    {
      id: 2,
      user: "HelpMe1999",
      title: "Consistently Satisfying Meals Every Time",
      description:
        "I've been a loyal fan of McDonald's for years, and it never disappoints! Whenever I'm in need of a quick and tasty meal, McDonald's is my go-to spot. Their classic Big Mac never fails to satisfy my hunger cravings, and the fries are always crispy and delicious. I also love the convenience of their drive-thru service, which makes grabbing a meal on the go super easy. The staff are always friendly and efficient, ensuring that I have a pleasant dining experience every time. Overall, McDonald's has consistently provided me with great-tasting food and excellent service, making it my favorite fast-food restaurant!",
      rating: 5,
    },
    {
      id: 3,
      user: "JohnMcDonalds",
      title: "Disappointing Experience at McDonald's...",
      description:  "I recently visited McDonald's and was left extremely disappointed with my experience. Firstly, the service was incredibly slow, with long wait times at both the drive-thru and counter. When I finally received my order, it was cold and poorly prepared. The fries were soggy and lacked seasoning, the burger was overcooked and dry, and even the drink tasted watered down.",
      rating: 2,
    },
    {
      id: 4,
      user: "McDonaldsFan123",
      title: "Always My Go-To Spot for a Quick Bite!",
      description:
        "I've been a loyal fan of McDonald's for years, and it never disappoints! Whenever I'm in need of a quick and tasty meal, McDonald's is my go-to spot. Their classic Big Mac never fails to satisfy my hunger cravings, and the fries are always crispy and delicious. I also love the convenience of their drive-thru service, which makes grabbing a meal on the go super easy. The staff are always friendly and efficient, ensuring that I have a pleasant dining experience every time. Overall, McDonald's has consistently provided me with great-tasting food and excellent service, making it my favorite fast-food restaurant!",
      rating: 5,
    },
    {
      id: 5,
      user: "HelpMe1999",
      title: "Consistently Satisfying Meals Every Time",
      description:
        "I've been a loyal fan of McDonald's for years, and it never disappoints! Whenever I'm in need of a quick and tasty meal, McDonald's is my go-to spot. Their classic Big Mac never fails to satisfy my hunger cravings, and the fries are always crispy and delicious. I also love the convenience of their drive-thru service, which makes grabbing a meal on the go super easy. The staff are always friendly and efficient, ensuring that I have a pleasant dining experience every time. Overall, McDonald's has consistently provided me with great-tasting food and excellent service, making it my favorite fast-food restaurant!",
      rating: 5,
    },
    {
      id: 6,
      user: "JohnMcDonalds",
      title: "Disappointing Experience at McDonald's...",
      description:  "I recently visited McDonald's and was left extremely disappointed with my experience. Firstly, the service was incredibly slow, with long wait times at both the drive-thru and counter. When I finally received my order, it was cold and poorly prepared. The fries were soggy and lacked seasoning, the burger was overcooked and dry, and even the drink tasted watered down.",
      rating: 2,
    },
  ];

  return (
    <div className="App">
      {/* Navbar+Hero hydrid section */}
      <section className="relative flex flex-col text-white bg-[url('src/assets/homepage-hero-image.jpg')] bg-center bg-cover bg-blend-overlay bg-fixed bg-black/45 pb-5">
        <Navbar isTransparent={true} />
        {/* Hero Content  */}
        <div className="container-full min-h-screen flex flex-col md:flex-row items-center justify-center mx-auto px-6">
          <div className="flex flex-col mb-10">
            <h1 className="max-w-xl text-[2.9rem] text-center leading-none font-extrabold md:text-[4rem] md:leading-tight mb-5">
              Your <span className="text-orange-100">Voice,</span> Your{" "}
              <span className="text-emerald-500">Reviews.</span>
            </h1>
            <p className="max-w-xl  text-gray-200 text-center">
              Unlock the power of informed decision-making with Rankify. We're
              here to guide you through the maze of choices by providing
              authentic, unbiased reviews on a wide range of products and
              services.
            </p>
            <Link to="/AboutUs" className="self-center">
              <button className="max-w-48 mt-4 bg-blend-overlay bg-fixed bg-black/60 hover:bg-black transition-colors rounded-xl px-8 py-2 text-lg text-white tracking-wide">
                Learn More
              </button>
            </Link>
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
      <div className="grid grid-col-3 gap-3">
        {reviews.map(review => (
          <div className="px-5 py-3 border rounded-xl shadow-md">
            <h2 className="font-semibold tracking-tight">{review.title}</h2>
            <h3>{review.user}</h3>
            <p>Rating: {review.rating} stars</p>
            <p className="text-sm">{review.description}</p>
          </div>
        ))}
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
