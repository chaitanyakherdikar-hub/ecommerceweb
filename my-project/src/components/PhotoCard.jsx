import React from "react";
import useCart from "../hooks/useCart";

function PhotoCard({ photo }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={photo.img}
        alt={photo.title}
        className="w-full h-40 object-cover mb-2 rounded"
      />
      <h3 className="text-lg font-semibold">{photo.title}</h3>
      <p className="text-gray-600">₹{photo.price}</p>
      <button
        onClick={() => addToCart(photo)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default PhotoCard;
