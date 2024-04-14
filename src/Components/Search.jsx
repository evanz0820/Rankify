import React, {useState, useEffect} from "react";
import "./Search.css";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";
import ReviewList from "./ReviewList";
import '@googlemaps/extended-component-library/place_overview.js';

function Search() {
    const { placeID } = useParams();
    const [reviews, setReviews] = useState([]);
    const [placeDetails, setPlaceDetails] = useState(null);
    const [placeData, setPlaceData] = useState(null);

    useEffect(() => {
        const fetchPlaceDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8081/place-details/${placeID}`);
                if (response.ok) {
                    const data = await response.json();
                    setPlaceDetails(data);
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
        <div className="Search">
            <Navbar />
            {placeDetails && (
                <div className="my-8 mx-2 overflow-y-auto">
                    <div className="search-hero left-section">
                        <div className="search-hero-content">
                            <gmpx-place-overview place={placeID} size="large"></gmpx-place-overview>
                            <button className="max-w-48 mt-5 bg-blend-overlay bg-fixed bg-black/70 hover:bg-black transition-colors duration-100 ease-in rounded-xl px-8 py-2 text-lg text-white tracking-wide">
                                Write a Review
                            </button>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 right-section">
                        <h2 className="text-2xl font-bold mb-4">Google Reviews:</h2>
                        {placeDetails && placeDetails.reviews.map((review, index) => (
                            <Link key={index} to={`/location/${placeID}?content=${encodeURIComponent(review.text)}&rating=${review.rating}&author=${encodeURIComponent(review.author_name)}&time=${review.time}`}>
                                <div className="bg-gray-100 rounded-lg p-4">
                                    <ReviewList userInfo={placeDetails} />
                                </div>
                            </Link>
                        ))}
                        <h2 className="text-2xl font-bold mb-4">Database Reviews:</h2>
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