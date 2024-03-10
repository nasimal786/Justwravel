import React from "react";

const StarRating = ({ rating }) => {
  const roundedRating = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`text-yellow-500 ${
        index < roundedRating ? "text-yellow-500" : "text-gray-300"
      }`}
    >
      ★
    </span>
  ));

  const ratingStyle = rating >= 3 ? "bg-green-500" : "bg-red-500";
  return (
    <div className="flex">
      {stars}
      <span className={`ml-2 text-white px-2 rounded ${ratingStyle}`}>
        {rating}
      </span>
    </div>
  );
};

export default StarRating;
