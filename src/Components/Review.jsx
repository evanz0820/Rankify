import Navbar from "./Navbar";
import { useState } from "react";

export default function Review() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

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

            {/**New rating component */}
            <div className="pb-4">
              <label className="block text-sm font-medium">Your Rating</label>
              <div className="flex flex-row my-2">
                {[...Array(5)].map((star, index) => {
                  const currentRating = index + 1;
                  return (
                    <label>
                      <input
                        type="radio"
                        name="rating"
                        value={currentRating}
                        className="hidden"
                        onClick={() => setRating(currentRating)}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        htmlFor={star}
                        key={index}
                        className={`w-6 h-6 underline cursor-pointer transition-colors ease-in duration-100 ${
                          currentRating <= (hover || rating)
                            ? "text-emerald-500"
                            : "text-gray-300"
                        }`}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </label>
                  );
                })}
              </div>
            </div>
            {/**End of new rating component */}
            
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
