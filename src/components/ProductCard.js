import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const ProductCard = ({ product }) => {
  const { id, title, image, price, category, rating, description } = product;

  return (
    <Link
      to={`/product/${category}/${id}`}
      className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 block max-w-xs"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-contain rounded"
          />
        </div>
        <div className="flex-grow">
          <h4 className="text-base font-medium overflow-hidden line-clamp-1">
            {title}
          </h4>
          <div className="flex mt-auto lg:flex-row flex-col">
            <StarRating rating={rating?.rate} />
            {rating?.count && <p className="text-gray-500 ml-1">{`(${rating.count} reviews)`}</p>}
          </div>
          <p className="text-base font-bold">Buy at: ${price}</p>
          <p className="text-gray-700 mb-2">{category}</p>
          <p className="text-gray-700 mb-2 overflow-hidden line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
