import React from "react";
import "./BusinessProfile.css";
import Navbar from "./Navbar";

export default function BusinessProfile() {
  // NOTE: Need to make banner/avatar editable using useState
  // Integrate editable functionality using input elements
  // - Separate into reusable components

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
  ];

  return (
    <div className="BusinessProfile">
      <Navbar />

      {/* ProfileHero Component Mockup (later in separate component)*/}
      <div className="profile-hero">
        <div className="profile-hero-content">
          <img
            className="profile-avatar"
            src="src\assets\mcd-avatar.jpg"
            alt="profile avatar"
          />
          <h1>Mcdonalds</h1>
          <p>
            McDonald's Corporation is an American multinational fast food chain,
            founded in 1940 as a restaurant operated by Richard and Maurice
            McDonald, in San Bernardino, California, United States.
          </p>
        </div>
        <div className="profile-hero-overlay">
          <img
            className="profile-hero-img"
            src="src\assets\mcd-banner.jpg"
            alt="profile banner"
          />
        </div>
      </div>

      <div className="profile-content">
        
        {/* ReviewList Component Mockup (later in separate component)*/}
        <div className="review-list-container">
            <h2>Reviews</h2>
            <div className="review-card-container">
                {reviews.map(review => (
                    <div className="review-card-item">
                        <h2>{review.title}</h2>
                        <h3>{review.user}</h3>
                        <p>Rating: {review.rating} stars</p>
                        <p>{review.description}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="profile-info-container">

        </div>
      </div>
    </div>
  );
}
