import React, { useState, useEffect } from "react";
import "./Search.css";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";
import ReviewList from "./ReviewList";
import "@googlemaps/extended-component-library/place_overview.js";
import StarRating from "./StarRating";

function Search() {
  const { placeID } = useParams();
  const [reviews, setReviews] = useState([]);
  const [placeDetails, setPlaceDetails] = useState(null);
  const [loggedInUserID, setLoggedInUserID] = useState(null); // Define loggedInUserID state

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/place-details/${placeID}`
        );
        if (response.ok) {
          const data = await response.json();
          setPlaceDetails(data);
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
        const response = await fetch(
          "http://localhost:8081/get-logged-in-user-id",
          {
            method: "GET",
            credentials: "include",
          }
        );
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
    <div className="flex w-full items-center min-h-screen mt-20">
        <Navbar isTransparent={true} />
        <div className="relative flex flex-col w-full sm:flex-row md-space-y-0 justify-center">
            <div className="flex flex-col justify-center lg:max-w-1/3 sm:w-1/2 max-w-[475px] mx-auto sm:mx-0">
                <gmpx-place-overview
                    place={placeID}
                    size="x-large"
                ></gmpx-place-overview>
                <Link to="/Create" className="center">
                    <button className="w-[150px] mx-auto rounded-lg px-4 py-2 mb-2 bg-black text-white hover:bg-emerald-500 hover:text-black text-center transition-colors ease-in duration-100">
                        Write a Review
                    </button>
                </Link>
            </div>
            <div className="flex flex-col w-full md:max-w-2/3 bg-gray-50">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6">
                    {reviews.map((review, id) => (
                        <div className="max-w-md p-6 mx-auto border-2 border-gray-200 bg-white hover:border-emerald-500 transition duration-300 ease-in shadow-md rounded-lg overflow-hidden min-w-[400px]">
                            <Link
                                to={`/location/${placeID}?content=${encodeURIComponent(
                                    review.review_content
                                )}&rating=${review.rating}&author=${encodeURIComponent(
                                    review.name
                                )}&&reviewID=${review.review_id}`}
                            >
                                <p className="text-sm font-light mb-1">
                                    {new Date(review.review_date).toLocaleString()}
                                </p>
                                <h3 className="text-sm">{review.username}</h3>
                                <h3 className="text-md font-medium">{review.name}</h3>
                                <div className="flex items-center">
                                    <StarRating rating={review.rating} />
                                </div>
                                <p className=" text-sm font-normal leading-relaxed mb-3">
                                    {review.review_content}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
}

export default Search;