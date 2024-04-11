export default function StarRating({ rating }) {
  let stars = [];

  const ratingToStars = () => {
    for (let i = 0; i < rating; i++) {
      stars.push("star");
    }
  };
  ratingToStars();

  return (
    <>
      {stars.map((star, index) => (
        <label htmlFor="star" key={index} className="text-2xl text-emerald-500">
          &#9733;
        </label>
      ))}
    </>
  );
}
