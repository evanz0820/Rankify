import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import CreateComment from "../pages/CreateComment";
import StarRating from "./StarRating";

function LocationDetails() {
    const { placeID } = useParams();
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const content = params.get("content");
    const rating = params.get("rating");
    const author = params.get("author");
    const reviewID = params.get("reviewID");
    // console.log(reviewID);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const response = await fetch("http://localhost:8081/homelogin", {
                    method: "GET",
                    credentials: "include",
                });

                if (response.ok) {
                    const data = await response.json();
                    setIsLoggedIn(data.valid);
                }
            } catch (error) {
                console.error("Error checking authentication:", error);
            }
        };
        checkAuthentication();

        const fetchComments = async () => {
            try {
                const response = await fetch(`http://localhost:8081/get-comments/${reviewID}`);
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

        fetchComments();
    }, [placeID, reviewID]);

    return (
        <div className="flex flex-col py-36 h-screen bg-gradient-to-b from-white to-gray-200">
            <Navbar />
            <div className="max-w-md p-6 mx-auto border-2 border-gray-200 bg-white hover:border-emerald-500 transition duration-300 ease-in shadow-md rounded-lg overflow-hidden">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">{author}</h2>
                    <h3 className="text-sm"><StarRating rating={rating} /> </h3>
                    <h3 className="text-sm mb-2">{content}</h3>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Comments</h2>
                    {comments.map((comment, index) => (
                        <div key={index} className="mb-2">
                            <p>{comment.author}: {comment.comment_content}</p>
                        </div>
                    ))}
                </div>

                {/* Pass reviewID to CreateComment component */}
                {isLoggedIn ? (
                    <CreateComment placeID={placeID} reviewID={reviewID} />
                ) : (
                    <p>Please log in to submit a comment.</p>
                )}
            </div>
        </div>
    );
}

export default LocationDetails;