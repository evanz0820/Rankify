import StarRating from "./StarRating";

export default function ReviewList({ userInfo }) {
  return (
    <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6">
      {userInfo.reviews.map((review, id) => (
        <div className="max-w-md p-6 mx-auto border-2 border-gray-200 bg-white hover:border-emerald-500 transition duration-300 ease-in shadow-md rounded-lg overflow-hidden">
          <p className="text-sm font-light mb-1">{review.relative_time_description}</p>
          {/* <h2 className="text-xl font-semibold mb-2">{review.title}</h2> */}
          <h3 className="text-sm">{userInfo.username}</h3>
          {/* <h3 className="text-sm mb-2">{userInfo.location}</h3> */}
          <h3 className="text-md font-medium">{review.author_name}</h3>
          {/* TODO: Stars match up to fetched rating */}
          <div className="flex items-center">
            <StarRating rating={review.rating} />
          </div>
          <p className=" text-sm font-normal leading-relaxed mb-3">
            {review.text}
          </p>
        </div>
      ))}
    </div>
  );
}
