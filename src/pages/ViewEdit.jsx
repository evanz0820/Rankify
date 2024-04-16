import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../Components/Navbar"
import { Link } from 'react-router-dom'; // Import Link for navigation
import StarRating from "../Components/StarRating";


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

    const handleDeleteReview = (reviewID) => {
        // Make a request to delete the review with the given ID
        axios.delete(`http://localhost:8081/delete-review/${reviewID}`)
            .then(response => {
                // Remove the deleted review from the state
                setReviews(prevReviews => prevReviews.filter(review => review.review_id !== reviewID));
                console.log('Review deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting review:', error);
            });
    };

    return (
        <div>
            <Navbar />
            <div className='my-24'>
                <h1 className="text-2xl font-bold mb-4">Your Reviews</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="max-w-md p-6 mx-auto border-2 border-gray-200 bg-white hover:border-emerald-500 transition duration-300 ease-in shadow-md rounded-lg overflow-hidden min-w-[450px]">
                            {/* Display review details here */}
                            <p><span className="text-medium font-medium">Review Location: </span>{review.location_name}</p>
                            <p><span className="text-medium font-medium">Review Content: </span>{review.review_content}</p>
                            {/* <p>Rating: {review.rating}</p> */}
                            <p><span className="text-medium font-medium">Rating: </span><StarRating rating={review.rating} /> </p>
                            <p><span className="text-medium font-medium">Review Posted: </span>{new Date(review.review_date).toLocaleString()}</p>
                            <button onClick={() => handleDeleteReview(review.review_id)} className="bg-red-500 text-white font-semibold px-4 py-2 mt-4 rounded hover:bg-red-600">Delete</button>
                            <Link to={`/edit-review/${review.review_id}`}><button className="bg-blue-500 text-white font-semibold px-4 py-2 ml-2 mt-4 rounded hover:bg-blue-600">Edit</button></Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ViewEdit;
