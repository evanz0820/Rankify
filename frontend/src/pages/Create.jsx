import React from 'react'
import Searchbar from '../Components/Searchbar'; //
import Navbar from "../Components/Navbar"
import {useState, useEffect} from 'react';
import axios from "axios";


function Create() {
    const [placeID, setPlaceID] = useState(null);
    const [reviewContent, setReviewContent] = useState('');
    const [rating, setRating] = useState('');

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
    <div className="">
            <Navbar />
            <div>
                <h1>Write a Review!!!</h1>
                <div className="">
                    <label>Search the business that you need to review</label>
                    <Searchbar onPlaceIDChange={handlePlaceIDChange} />

                    <label>Leave a review comment</label>
                    <input
                        type="text"
                        placeholder="Leave a message"
                        value={reviewContent}
                        onChange={(e) => setReviewContent(e.target.value)}
                    />

                    <label>Leave a rating</label>
                    <input
                        type="text"
                        placeholder="Leave a message"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />

                    <button onClick={handleSubmitReview}>Submit Review</button>
                </div>
            </div>
        </div>
  )
}

export default Create;