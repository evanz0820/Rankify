import React from 'react'
import Searchbar from '../Components/Searchbar'; //
import Navbar from "../Components/Navbar"
import {useState, useEffect} from 'react';
import axios from "axios";


function Create() {
    const [placeID, setPlaceID] = useState(null);
    const [reviewContent, setReviewContent] = useState('');
    const [rating, setRating] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status


    const handlePlaceIDChange = (newPlaceID) => {
        setPlaceID(newPlaceID);
    };

    const handleSubmitReview = async () => {
        try {
            // Send a POST request to submit the review
            await axios.post('http://localhost:8081/submit-review', {
                placeID,
                reviewContent,
                rating
            });

            // Reset form fields after successful submission
            setPlaceID(null);
            setReviewContent('');
            setRating('');
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/src/assets/write-review-image.jpg')] bg-center bg-cover bg-blend-overlay bg-fixed bg-black/45">
      <Navbar isTransparent={true}/>
      {isLoggedIn ? ( // If user is logged in, show regular content
        <div className="my-8">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-4">Write a Review!!!</h1>
            <label className="block mb-2">Search the business that you need to review</label>
            <Searchbar onPlaceIDChange={handlePlaceIDChange} />

            <label className="block mb-2">Leave a review comment</label>
            <input
              type="text"
              placeholder="Leave a message"
              value={reviewContent}
              onChange={(e) => setReviewContent(e.target.value)}
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />

            <label className="block mb-2">Leave a rating</label>
            <input
              type="text"
              placeholder="Leave a message"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />

            <button
              onClick={handleSubmitReview}
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Submit Review
            </button>
          </div>
        </div>
      ) : ( // If user is not logged in, show sign-in message
        <div className="">
          <p className="text-xl text-center font-bold text-white">Please sign in to write a review.</p>
        </div>
      )}
    </div>
  )
}

export default Create;