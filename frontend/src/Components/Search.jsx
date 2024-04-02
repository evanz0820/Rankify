import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

function Search() {
    const { placeID } = useParams();
    const [placeDetails, setPlaceDetails] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchPlaceDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8081/place-details/${placeID}`);
                if (response.ok) {
                    const data = await response.json();
                    setPlaceDetails(data.placeDetails);
                    setReviews(data.reviews);
                } else {
                    console.error("Failed to fetch place details");
                }
            } catch (error) {
                console.error("Error fetching place details:", error);
            }
        };

        if (placeID) {
            fetchPlaceDetails();
        }
    }, [placeID]);

    return (
        <div className="Search-Container">
            <Navbar />
            <h1>Welcome to the Search page</h1>
            {placeDetails && (
                <div>
                    <h1>{placeDetails.name}</h1>
                    <p>Address: {placeDetails.formatted_address}</p>
                    <p>Phone Number: {placeDetails.formatted_phone_number}</p>
                    <p>Rating: {placeDetails.rating}</p>
                    <p>Google Reviews:</p>
                    <div className="reviews-container flex flex-wrap">
                        {placeDetails.reviews.map((review, index) => (
                            <div className="review-card bg-gray-100 rounded-lg p-4 mb-4" key={index} style={{ flex: "1 0 300px" }}>
                                <p>{review.text}</p>
                                <p>Rating: {review.rating}</p>
                                <p className="author">Author: {review.author_name}</p>
                            </div>
                        ))}
                    </div>
                    

                    <p>Database Reviews:</p>
                    <div className="reviews-container flex flex-wrap">
                        {reviews.map((review, index) => (
                            <div className="review-card bg-gray-100 rounded-lg p-4 mb-4" key={index} style={{ flex: "1 0 300px" }}>
                                <p>{review.review_content}</p>
                                <p>Rating: {review.rating}</p>
                                <p className="author">Author: {review.name}</p> {/* Displaying user's name */}
                                <p className="date">Date: {review.review_date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Search;
