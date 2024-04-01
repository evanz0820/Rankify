import React from "react";
import "./Profile.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Profile() {
  // NOTE: Need to make banner/avatar editable using useState
  // Integrate editable functionality using input elements
  // - Separate into reusable components

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

  return (
    <div className="Profile">
      <Navbar />

      {/* ProfileHero Component Mockup (later in separate component)*/}
      <div className="profile-hero">
        <div className="profile-hero-content">
          <img
            className="profile-avatar"
            src={userInfo.userAvatar}
            alt="profile avatar"
          />
          <h1>{userInfo.username}</h1>
          <h2 className="text-lg text-white font-semibold underline mb-3">{userInfo.location}</h2>
          <p>{userInfo.description}</p>
        </div>
        <div className="profile-hero-overlay">
          <img
            className="profile-hero-img"
            src={userInfo.userBanner}
            alt="profile banner"
          />
        </div>
      </div>

      {/* ReviewList Component Mockup (later in separate component)*/}
      <div className="container-full">
        <div className="container mx-auto py-8 px-8">
          <h2 className="text-3xl font-bold text-center underline underline-offset-4 decoration-2 tracking-tight text-gray-900 sm:text-4xl pb-10">Reviews</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {userInfo.reviews.map((review) => (
              <div className="max-w-md p-6 mx-auto border-2 border-gray-200 bg-white hover:border-emerald-500 transition duration-300 ease-in shadow-md rounded-lg overflow-hidden">
                <p className="text-sm font-light mb-1">{review.date}</p>
                <h2 className="text-xl font-semibold mb-2">{review.title}</h2>
                <h3 className="text-sm">{userInfo.username}</h3>
                <h3 className="text-sm mb-2">{userInfo.location}</h3>
                <h3 className="text-md font-medium">{review.user}</h3>
                <div className="flex items-center">
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
