import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import fetchData from "./constants/Api";
import Search from "./Components/Search";
import { Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { Link } from 'react-router-dom';
import Searchbar from "./Components/Searchbar";

function App() {

  const [placeID, setPlaceID] = useState(null);

  useEffect(() => {
  }, []); // Empty dependency array to run once on mount

  const userInfo = {
    userID: "0AB098234poIWEqwekln2",
    userAvatar: "src/assets/mcd-avatar.jpg",
    userBanner: "src/assets/mcd-banner.jpg",
    username: "McDonalds",
    description:
      "McDonald's Corporation is an American multinational fast food chain,founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States.",
    location: "1105 Northside Dr NW, Atlanta, GA 30318",
    reviews: [
      {
        id: 1,
        user: "McDonaldsFan123",
        date: "October 20, 2023",
        title: "Always My Go-To Spot for a Quick Bite!",
        description:
          "I've been a loyal fan of McDonald's for years, and it never disappoints! Whenever I'm in need of a quick and tasty meal, McDonald's is my go-to spot. Their classic Big Mac never fails to satisfy my hunger cravings, and the fries are always crispy and delicious. I also love the convenience of their drive-thru service, which makes grabbing a meal on the go super easy. The staff are always friendly and efficient, ensuring that I have a pleasant dining experience every time. Overall, McDonald's has consistently provided me with great-tasting food and excellent service, making it my favorite fast-food restaurant!",
        rating: 5,
      },
      {
        id: 2,
        user: "HelpMe1999",
        date: "October 20, 2023",
        title: "Consistently Satisfying Meals Every Time",
        description:
          "I've been a loyal fan of McDonald's for years, and it never disappoints! Whenever I'm in need of a quick and tasty meal, McDonald's is my go-to spot. Their classic Big Mac never fails to satisfy my hunger cravings, and the fries are always crispy and delicious. I also love the convenience of their drive-thru service, which makes grabbing a meal on the go super easy. The staff are always friendly and efficient, ensuring that I have a pleasant dining experience every time. Overall, McDonald's has consistently provided me with great-tasting food and excellent service, making it my favorite fast-food restaurant!",
        rating: 5,
      },
      {
        id: 3,
        user: "JohnMcDonalds",
        date: "October 20, 2023",
        title: "Disappointing Experience at McDonald's...",
        description:
          "I recently visited McDonald's and was left extremely disappointed with my experience. Firstly, the service was incredibly slow, with long wait times at both the drive-thru and counter. When I finally received my order, it was cold and poorly prepared. The fries were soggy and lacked seasoning, the burger was overcooked and dry, and even the drink tasted watered down.",
        rating: 2,
      },
      {
        id: 4,
        user: "HelpMe1999",
        date: "October 20, 2023",
        title: "Consistently Satisfying Meals Every Time",
        description:
          "I've been a loyal fan of McDonald's for years, and it never disappoints! Whenever I'm in need of a quick and tasty meal, McDonald's is my go-to spot. Their classic Big Mac never fails to satisfy my hunger cravings, and the fries are always crispy and delicious. I also love the convenience of their drive-thru service, which makes grabbing a meal on the go super easy. The staff are always friendly and efficient, ensuring that I have a pleasant dining experience every time. Overall, McDonald's has consistently provided me with great-tasting food and excellent service, making it my favorite fast-food restaurant!",
        rating: 4,
      },
      {
        id: 5,
        user: "JohnMcDonalds",
        date: "October 20, 2023",
        title: "Disappointing Experience at McDonald's...",
        description:
          "I recently visited McDonald's and was left extremely disappointed with my experience. Firstly, the service was incredibly slow, with long wait times at both the drive-thru and counter. When I finally received my order, it was cold and poorly prepared. The fries were soggy and lacked seasoning, the burger was overcooked and dry, and even the drink tasted watered down.",
        rating: 2,
      },
      {
        id: 6,
        user: "HelpMe1999",
        date: "October 20, 2023",
        title: "Consistently Satisfying Meals Every Time",
        description:
          "I've been a loyal fan of McDonald's for years, and it never disappoints! Whenever I'm in need of a quick and tasty meal, McDonald's is my go-to spot. Their classic Big Mac never fails to satisfy my hunger cravings, and the fries are always crispy and delicious. I also love the convenience of their drive-thru service, which makes grabbing a meal on the go super easy. The staff are always friendly and efficient, ensuring that I have a pleasant dining experience every time. Overall, McDonald's has consistently provided me with great-tasting food and excellent service, making it my favorite fast-food restaurant!",
        rating: 4,
      },
    ]
  };
  const handlePlaceIDChange = (newPlaceID) => {
    setPlaceID(newPlaceID);
  }

  const stars = []

  function ratingToStars(rating) {
    // TODO: rating to stars function to render .map stars  
  }
  return (
    <div className="App">
      {/* Navbar+Hero hydrid section */}
      <section className="relative flex flex-col text-white bg-[url('src/assets/homepage-hero-image.jpg')] bg-center bg-cover bg-blend-overlay bg-fixed bg-black/45">
        <Navbar isTransparent={true} onPlaceIDChange={handlePlaceIDChange}/>
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
            <Link to="/AboutUs" className="self-center">
              <button className="max-w-48 mt-5 bg-blend-overlay bg-fixed bg-black/70 hover:bg-black transition-colors duration-100 ease-in rounded-xl px-8 py-2 text-lg text-white tracking-wide">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Render fetched data */}
      <div className="container-full pb-24">
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
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {userInfo.reviews.map((review) => (
              <div className="max-w-md p-6 mx-auto border-2 border-gray-200 bg-white hover:border-emerald-500 transition duration-300 ease-in shadow-md rounded-lg overflow-hidden">
                <p className="text-sm font-light mb-1">{review.date}</p>
                <h2 className="text-xl font-semibold mb-2">{review.title}</h2>
                <h3 className="text-sm">{userInfo.username}</h3>
                <h3 className="text-sm mb-2">{userInfo.location}</h3>
                <h3 className="text-md font-medium">{review.user}</h3>
                <div className="flex items-center">
                  {/* TODO: Stars match up to fetched rating */}
                  <label for="star5" className="text-2xl text-emerald-500">&#9733;</label>
                  <label for="star4" className="text-2xl text-emerald-500">&#9733;</label>
                  <label for="star3" className="text-2xl text-emerald-500">&#9733;</label>
                  <label for="star2" className="text-2xl text-emerald-500">&#9733;</label>
                  <label for="star1" className="text-2xl text-emerald-500">&#9733;</label>
                </div>
                <p className=" text-sm font-normal leading-relaxed mb-3">{review.description}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
  
export default App;
