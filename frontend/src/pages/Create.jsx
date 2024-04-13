
import React, { useState, useEffect } from 'react';
import Searchbar from '../Components/Searchbar';
import {useNavigate} from 'react-router-dom';
import Navbar from '../Components/Navbar'; // Import Navbar component
import axios from 'axios';

function Create() {
  const [placeID, setPlaceID] = useState(null);
  const [reviewContent, setReviewContent] = useState('');
  const [rating, setRating] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

    useEffect(() => {
        // Fetch the user's authentication status when the component mounts
        axios.get('http://localhost:8081/homelogin')
            .then(res => {
                if (res.data.valid) {
                    // If the user is logged in, update the state
                    setIsLoggedIn(true);
                } else {
                    // If not logged in, redirect to the login page
                    // navigate('/login');
                    setIsLoggedIn(false);
                }
            })
            .catch(err => console.log(err));
    }, [navigate]);


  const handlePlaceIDChange = (newPlaceID) => {
    setPlaceID(newPlaceID);
  };

  const handleSubmitReview = async () => {
    try {
      // Send a POST request to submit the review
      await axios.post('http://localhost:8081/submit-review', {
        placeID,
        reviewContent,
        rating,
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
      <Navbar isTransparent={true} />
      {/* Render content based on isLoggedIn */}
      <form action="">

      {isLoggedIn ? (
       <div className="relative flex flex-col m-6 bg-white shadow-2xl border-2 border-gray-300 rounded-2xl md:flex-row md-space-y-0">
          <div className="flex w-[400px] sm:w-[500px] 2xl:w-[900px] h-[580px] md:h-[700px] flex-col justify-center p-8 md:p-14">
              <h1 className="text-3xl font-bold mb-4">Write a Review!!!</h1>

              <div className="py-6">
                <label className="block mb-2 text-sm font-medium">Review for:</label>
                <Searchbar className="block w-full p-2.5 border text-sm border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" onPlaceIDChange={handlePlaceIDChange} />
              </div>
              

              <div className="pb-2">
                <label class="block mb-2 text-sm font-medium">Your Review: </label>
                <textarea
                  type="text"
                  placeholder="Write your thoughts here"
                  value={reviewContent}
                  onChange={(e) => setReviewContent(e.target.value)}
                  className="block p-2.5 w-full min-h-[100px] max-h-[175px] md:min-h-[200px] md:max-h-[250px] text-sm bg-gray-100 rounded-lg border border-gray-300"
                />

              </div>
              
              <div className="pb-6">
                <label className="block mb-2 text-sm font-medium">Leave a rating</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  className="block p-2.5 w-20 text-sm bg-gray-100 rounded-lg border border-gray-300"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              
  
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
            <p className="text-xls text-center font-bold text-white">Please sign in to write a review.</p>
          </div>
        )}

      </form>
      
    </div>
  );
}

export default Create;
