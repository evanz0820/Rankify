import React, { useState } from 'react';
import axios from 'axios';

function CreateComment({ placeID, reviewTime }) {
    const [commentContent, setCommentContent] = useState('');

    const handleSubmitComment = async () => {
        try {
            const requestData = {
                placeID,
                commentContent,
            };
    
            // Include reviewTime only if it's defined
            if (reviewTime) {
                requestData.reviewTime = reviewTime;
            }
    
            await axios.post('http://localhost:8081/submit-comment', requestData);
            // Reset comment content after submission if needed
            setCommentContent('');
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };
    

    return (
        <div>
            <input
                type="text"
                placeholder="Input Comment"
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
            />
            <button onClick={handleSubmitComment}>Submit Comment</button>
        </div>
    );
}

export default CreateComment;