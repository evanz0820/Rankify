import React from 'react'
import Searchbar from '../Components/Searchbar'; //
import Navbar from "../Components/Navbar"


function Create() {
  return (
    <div className="">
        <Navbar />
        <div>
            <h1>Write a Review!!!</h1>
            <div className="bg-blue-300 flex flex-col">
            <label>Search the business that you need to review</label>
            <Searchbar/>

            <label>Leave a review comment</label>
            <input type="text" placeholder="Leave a message"/>

            <label>Leave a rating</label>
            <input type="text" placeholder="Leave a message"/>

            
            <button>Submit Review</button>

        </div>

        </div>
        
        
    </div>
  )
}

export default Create;