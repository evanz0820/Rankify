import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link, useParams} from "react-router-dom";


function Search() {
    const { placeID } = useParams();
    const [placeDetails, setPlaceDetails] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loggedInUserID, setLoggedInUserID] = useState(null); // Define loggedInUserID state

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

        // Fetch logged-in user ID here and set it to loggedInUserID state
        const fetchLoggedInUserID = async () => {
            try {
                const response = await fetch("http://localhost:8081/get-logged-in-user-id", {
                    method: "GET",
                    credentials: "include",
                });
                if (response.ok) {
                    const data = await response.json();
                    setLoggedInUserID(data.userID);
                } else {
                    console.error("Failed to fetch logged-in user ID");
                }
            } catch (error) {
                console.error("Error fetching logged-in user ID:", error);
            }
        };

        fetchLoggedInUserID();
    }, [placeID]);


    return (
        <div className="Search-Container">
            <Navbar />
            <h1 className="ml-2 my-8 text-1xl font-bold">Welcome to the Search page</h1>
            {placeDetails && (
                <div className="my-8 mx-2">
                    <h1 className="text-3xl font-bold mb-4">{placeDetails && placeDetails.name}</h1>
                    <p className="mb-2"><span className="font-semibold">Address:</span> {placeDetails && placeDetails.formatted_address}</p>
                    <p className="mb-2"><span className="font-semibold">Phone Number:</span> {placeDetails && placeDetails.formatted_phone_number}</p>
                    <p className="mb-2"><span className="font-semibold">Rating:</span> {placeDetails && placeDetails.rating}</p>
                    <h2 className="text-2xl font-bold mb-4">Google Reviews:</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {placeDetails && placeDetails.reviews.map((review, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg p-4">
                        <Link to={`/location/${placeID}?content=${encodeURIComponent(review.text)}&rating=${review.rating}&author=${encodeURIComponent(review.author_name)}&time=${review.time}`}>
                            <p className="mb-2"><span className="font-semibold">Description: </span>{review.text}</p>
                            <p className="mb-2"><span className="font-semibold">Rating: </span> {review.rating}</p>
                            <p><span className="font-semibold">Author: </span> {review.author_name}</p>
                            
                        </Link>
                        </div>
                    ))}
                    </div>
                
                    <h2 className="text-2xl font-bold mb-4">Database Reviews:</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-gray-100 rounded-lg p-4">
                            <Link to={`/location/${placeID}?content=${encodeURIComponent(review.review_content)}&rating=${review.rating}&author=${encodeURIComponent(review.name)}&date=${review.review_date}`}>
                                <p className="mb-2"><span className="font-semibold">Description: </span>{review.review_content}</p>
                                <p className="mb-2"><span className="font-semibold">Rating:</span> {review.rating}</p>
                                <p><span className="font-semibold">Author: </span> {review.name}</p>
                            </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Search;
