// короче звездочки лдя рейтинга

const Stars = ({ rating }) => {
  const clampedRating = Math.max(0, Math.min(rating, 5));

  const fullStars = Math.floor(clampedRating);
  const halfStar = clampedRating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex">
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <span key={`full-${index}`} className="text-5xl text-yellow-300">
            &#9733;
          </span>
        ))}
      {halfStar && (
        <span className="relative text-5xl text-yellow-300">
          <span
            className="absolute inset-0 overflow-hidden text-yellow-300"
            style={{ width: "50%" }}
          >
            &#9733;
          </span>
          <span className="text-gray-300">&#9733;</span>
        </span>
      )}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <span key={`empty-${index}`} className="text-5xl text-gray-300">
            &#9734;
          </span>
        ))}
    </div>
  );
};

export default Stars;
