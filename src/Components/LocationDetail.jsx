import StarRating from "./StarRating";
import Navbar from "./Navbar";

export default function LocationDetail() {
  const userInfo = {
    userID: "0AB098234poIWEqwekln2",
    userAvatar: "src/assets/mcd-avatar.jpg",
    userBanner: "src/assets/mcd-banner.jpg",
    username: "McDonalds",
    description:
      "McDonald's Corporation is an American multinational fast food chain,founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States.",
    location: "1105 Northside Dr NW, Atlanta, GA 30318",
    reviews: {
      id: 1,
      user: "McDonaldsFan123",
      date: "October 20, 2023",
      title: "Always My Go-To Spot for a Quick Bite!",
      description:
        "I've been a loyal fan of McDonald's for years, and it never disappoints! Whenever I'm in need of a quick and tasty meal, McDonald's is my go-to spot. Their classic Big Mac never fails to satisfy my hunger cravings, and the fries are always crispy and delicious. I also love the convenience of their drive-thru service, which makes grabbing a meal on the go super easy. The staff are always friendly and efficient, ensuring that I have a pleasant dining experience every time. Overall, McDonald's has consistently provided me with great-tasting food and excellent service, making it my favorite fast-food restaurant!",
      rating: 5,
    },
  };

  return (
    <div className="flex flex-col py-36 h-screen bg-gradient-to-b from-white to-gray-200">
      <Navbar />
      <div className="max-w-md p-6 mx-auto border-2 border-gray-200 bg-white hover:border-emerald-500 transition duration-300 ease-in shadow-md rounded-lg overflow-hidden">
        <p className="text-sm font-light mb-1">{userInfo.reviews.date}</p>
        <h2 className="text-xl font-semibold mb-2">{userInfo.reviews.title}</h2>
        <h3 className="text-sm">{userInfo.username}</h3>
        <h3 className="text-sm mb-2">{userInfo.location}</h3>
        <h3 className="text-md font-medium">{userInfo.reviews.user}</h3>
        {/* TODO: Stars match up to fetched rating */}
        <div className="flex items-center">
          <StarRating rating={userInfo.reviews.rating} />
        </div>
        <p className="text-sm font-normal leading-relaxed mb-3">
          {userInfo.reviews.description}
        </p>
        <label for="message" class="block mb-2 text-sm font-medium">
          Comments
        </label>
        <div>
          <h3 className="text-sm font-semibold">{userInfo.reviews.user}</h3>
          <p className="text-sm font-normal leading-relaxed mb-3">
            This is a comment.
          </p>
        </div>
        <form action="">
          <div className="py-2 max-w-md mx-auto">
            <textarea
              class="block p-2.5 w-full min-h-[100px] max-h-[150px] text-sm bg-white rounded-lg border border-gray-300"
              placeholder="Write a comment..."
            ></textarea>
            <button class="border-2 border-black rounded px-4 py-2 my-2 hover:bg-black hover:text-white text-center transition-colors ease-in duration-100">
              Post comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
