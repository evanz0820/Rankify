import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link, useParams} from "react-router-dom";
import StarRating from "./StarRating";
import '@googlemaps/extended-component-library/place_overview.js';

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
        <div className="flex mt-20">
            <Navbar isTransparent={false}/>
            <div className="w-1/2">
                <div className="">
                        <div className="">
                            <gmpx-place-overview place={placeID } size="x-large"></gmpx-place-overview>

                            {/* <button className="max-w-48 mt-5 bg-blend-overlay bg-fixed bg-black/70 hover:bg-black transition-colors duration-100 ease-in rounded-xl px-8 py-2 text-lg text-white tracking-wide">
                                Write a Review
                            </button> */}
                        </div>
                    </div>
            </div>
            <div className="mt-20 overflow-y-auto w-2/5 mx-auto">   
                <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4 ">
                        {reviews.map((review, id) => (
                            <div className="max-w-md p-6 mx-auto border-2 border-gray-200 bg-white hover:border-emerald-500 transition duration-300 ease-in shadow-md rounded-lg overflow-hidden min-w-[400px]">
                                <Link to={`/location/${placeID}?content=${encodeURIComponent(review.review_content)}&rating=${review.rating}&author=${encodeURIComponent(review.name)}&reviewID=${review.review_id}`}>
                                    <p className="text-sm font-light mb-1">{new Date(review.review_date).toLocaleString()}</p>
                                    {/* <h3 className="text-sm">{review.username}</h3> */}
                                    <h3 className="text-md font-medium">{review.name}</h3>
                                    <div className="flex items-center">
                                        <StarRating rating={review.rating} />
                                    </div>
                                    {/* <p>{review.review_id}</p> */}
                                    <p className=" text-sm font-normal leading-relaxed mb-3">
                                        {review.review_content}
                                    </p>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Search;
