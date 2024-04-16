import Navbar from "./Navbar";
import ReviewRating from "./ReviewRating";
import { useState } from "react";

export default function Review() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('src/assets/write-review-image.jpg')] bg-center bg-cover bg-blend-overlay bg-fixed bg-black/45">
      <Navbar isTransparent={true} />
      <form action="">
        <div className="relative flex flex-col m-6 bg-white shadow-2xl border-2 border-gray-300 rounded-2xl md:flex-row md-space-y-0">
          <div className="flex w-[400px] sm:w-[500px] 2xl:w-[900px] h-[580px] md:h-[700px] flex-col justify-center p-8 md:p-14">
            <h1 className="mb-3 text-4xl font-bold">Write a Review!</h1>
            <div className="py-6">
              <label className="block mb-2 text-sm font-medium">
                Review for:
              </label>
              <input
                type="text"
                className="block w-full p-2.5 border text-sm border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                placeholder="Enter a location"
              />
            </div>
            <div className="pb-2">
              <label for="message" class="block mb-2 text-sm font-medium">
                Your Review
              </label>
              <textarea
                class="block p-2.5 w-full min-h-[100px] max-h-[175px] md:min-h-[200px] md:max-h-[250px] text-sm bg-gray-100 rounded-lg border border-gray-300"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <ReviewRating />

            <button class="w-full border-2 border-black rounded px-4 py-2 mb-2 hover:bg-black hover:text-white text-center transition-colors ease-in duration-100">
              Submit Review
            </button>
          </div>
          <div class="relative">
            <img
              src="src/assets/write-review-image.jpg"
              alt="img"
              class="md:w-[450px] h-full hidden rounded-r-2xl md:block object-cover"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
