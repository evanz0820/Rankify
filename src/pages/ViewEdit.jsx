import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../Components/Navbar"

function ViewEdit() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Make a request to fetch reviews for the signed-in user
        axios.get('http://localhost:8081/get-user-reviews')
            .then(response => {
                setReviews(response.data.reviews);
            })
            .catch(error => {
                console.error('Error fetching user reviews:', error);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <div className='my-24'>
                <h1 className="text-2xl font-bold mb-4">Your Reviews</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="max-w-md p-6 mx-auto border-2 border-gray-200 bg-white hover:border-emerald-500 transition duration-300 ease-in shadow-md rounded-lg overflow-hidden min-w-[450px]">
                            {/* Display review details here */}
                            <p>Review Location: {review.location_name}</p>
                            <p>Review Content: {review.review_content}</p>
                            <p>Rating: {review.rating}</p>
                            <p>Review Posted: {new Date(review.review_date).toLocaleString()}</p>
                            {/* Add more details as needed */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ViewEdit;
