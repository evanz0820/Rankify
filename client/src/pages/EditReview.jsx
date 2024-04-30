import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../Components/Navbar";
import { useNavigate } from 'react-router-dom';

function EditReview() {
  const { reviewID } = useParams(); // Get the review ID from the URL params
  const [reviewContent, setReviewContent] = useState('');
  const [rating, setRating] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    // Fetch the existing review data using the review ID
    axios.get(`http://localhost:8081/get-review/${reviewID}`)
      .then(response => {
        const { review_content, rating } = response.data.review;
        setReviewContent(review_content);
        setRating(rating);
      })
      .catch(error => {
        console.error('Error fetching review:', error);
      });
  }, [reviewID]);

  const handleEditReview = async () => {
    try {
      // Send a PUT or PATCH request to update the review
      await axios.put(`http://localhost:8081/edit-review/${reviewID}`, {
        reviewContent,
        rating,
      });

      // Optionally, navigate the user back to the view/edit page after successful submission
      // history.push(`/view-edit/${reviewID}`);
      // Navigate back to the ViewEdit page after successful submission
      navigate('/view');
    } catch (error) {
      console.error('Error editing review:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/src/assets/login-image.jpg')] bg-center bg-cover bg-blend-overlay bg-fixed bg-black/45">
        <Navbar isTransparent={true}/>
        <div className="my-24 ml-4 flex w-[400px] sm:w-[500px] 2xl:w-[900px] h-[580px] md:h-[700px] flex-col justify-center p-8 md:p-14">
          <div className="flex w-[400px] sm:w-[500px] 2xl:w-[900px] h-[580px] md:h-[700px] flex-col justify-center p-8 md:p-14">
              <h1 className="text-2xl font-bold mb-4 text-white">Edit Review</h1>

              <label className="text-white">Review Content:</label>
              <textarea 
              placeholder='Write the updated review'
              className="block p-2.5 w-full min-h-[100px] max-h-[175px] md:min-h-[200px] md:max-h-[250px] text-sm bg-gray-100 rounded-lg border border-gray-300" 
              value={reviewContent} 
              onChange={e => setReviewContent(e.target.value)} />

              <label className="text-white">Rating:</label>
              <input 
              className="block p-2.5 w-20 text-sm bg-gray-100 rounded-lg border border-gray-300" 
              type="number" 
              value={rating} 
              onChange={e => setRating(e.target.value)} />

              <button 
              className="border-2 border-black rounded px-4 py-2 my-2 bg-blend-overlay bg-fixed bg-white/70 hover:bg-emerald-500 transition-colors duration-100 ease-in" 
              onClick={handleEditReview}>Submit Edit</button>

          </div>
        </div>
        
        

    </div>
  );
}

export default EditReview;
