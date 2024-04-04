<<<<<<< HEAD
import React from "react";
import Navbar from "./Navbar"


function Search(){
    return(
        <div className = "Search-Container">
            <Navbar/>
            <h1>Welcome to the Search page</h1>

            <h1>Results for: </h1>
        </div>


    )
}

export default Search
=======
import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";



function Search() {
    const { placeID } = useParams();
    const [placeDetails, setPlaceDetails] = useState(null);

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

    return(
        <div className="Search-Container">
            <Navbar />
            <h1>Welcome to the Search page</h1>
            {placeDetails && (
                <div>
                    <h1>{placeDetails.name}</h1>
                    <p>Address: {placeDetails.formatted_address}</p>
                    <p>Phone Number: {placeDetails.formatted_phone_number}</p>
                    <p>Rating: {placeDetails.rating}</p>
                    <p>Reviews:</p>
                    <div className="reviews-container">
                        {placeDetails.reviews.map((review, index) => (
                            <div className="review-card" key={index}>
                                <p>{review.text}</p>
                                <p>Rating: {review.rating}</p>
                                <p className="author">Author: {review.author_name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Search;
>>>>>>> parent of 0a3437a (moved the entire frontend folder out)
