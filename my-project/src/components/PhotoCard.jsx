import React from "react";
import { useCart } from "../Context/CartContext";

function PhotoCard({ photo }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 shadow-lg hover:shadow-xl transition duration-300">
      <img
        src={photo.img}
        alt={photo.title}
        className="w-full  object-cover mb-3 rounded-lg aspect-3/4"
      />
      <h3 className="text-lg font-semibold text-white">{photo.title}</h3>
      <p className="text-gray-400">₹{photo.price}</p>
      <button
        onClick={() => addToCart(photo)}
        className="mt-3 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default PhotoCard;
