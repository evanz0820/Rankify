
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom"; // Import useParams
import CreateComment from "../pages/CreateComment";
import StarRating from "./StarRating";

function LocationDetails() {
    const { placeID} = useParams();
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const content = params.get("content");
    const rating = params.get("rating");
    const author = params.get("author");

    const time = params.get("time");
    const review_date = params.get("date");
    console.log(time);
    console.log(review_date);

    
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's authentication status
    const [comments, setComments] = useState([]); // State to store comments

    useEffect(() => {
        // Check user's authentication status when the component mounts
        const checkAuthentication = async () => {
            try {
                const response = await fetch("http://localhost:8081/homelogin", {
                    method: "GET",
                    credentials: "include", // Include credentials to send cookies
                });

                if (response.ok) {
                    const data = await response.json();
                    setIsLoggedIn(data.valid);
                }
            } catch (error) {
                console.error("Error checking authentication:", error);
            }
        };

        const fetchComments = async () => {
            try {
                console.log("Fetching comments for placeID:", placeID); // Log the placeID
        
                let url;
                if (time) {
                    // If time is present, it's a Google review
                    console.log("Fetching Google reviews for placeID:", placeID, "and time:", time);
                    url = `http://localhost:8081/get-comments/${placeID}/${time}`;
                } else if (review_date) {
                    // If review_date is present, it's a database review
                    console.log("Fetching database reviews for placeID:", placeID, "and review_date:", review_date);
                    url = `http://localhost:8081/get-comments/${placeID}/${review_date}`;
                } else {
                    console.error("Invalid parameters for fetching comments");
                    return;
                }
        
                const response = await fetch(url);
        
                if (response.ok) {
                    const data = await response.json();
                    setComments(data.comments);
                } else {
                    console.error("Failed to fetch comments");
                }
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };
        

        checkAuthentication();
        // fetchComments(); 
        fetchComments(); // Fetch comments
    }, [placeID, time, review_date]);
    
    return (
        <div className="">
            <Navbar />
            <div className="my-8 ml-2">
                <h1 className="text-3xl font-bold mb-4">Review Details</h1>
                <div className="mb-4">
                    <p><span className="font-semibold">Review Content:</span> {content}</p>
                    <p><span className="font-semibold">Rating:</span> <StarRating rating={rating} /> </p>
                    <p><span className="font-semibold">Author:</span> {author}</p>
                    {/* <p><span className="font-semibold">Time:</span> {time ? time : `Review Date: ${review_date}`}</p> */}
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Comments</h2>
                    {comments.map((comment, index) => (
                        <div key={index} className="mb-2">
                            <p><span className="font-semibold">{comment.user_name}: </span>{comment.comment_content}</p>
                        </div>
                    ))}
                </div>

                {/* Render CreateComment component if user is logged in */}
                {isLoggedIn ? (
                <CreateComment placeID={placeID} reviewTime={review_date ? review_date : time} />
                ) : (
                <p>Please log in to submit a comment.</p>
                )}
            </div>
        </div>

    );
}

export default LocationDetails;