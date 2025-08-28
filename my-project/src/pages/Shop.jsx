import React from "react";
import PhotoCard from "../components/PhotoCard";

const photos = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Street Photo ${i + 1}`,
  img: `/src/assets/photo${i + 1}.jpg`,
  price: Math.floor(Math.random() * (500 - 250) + 250),
}));

function Shop() {
  return (
    <div className="p-8">
      <h2 className="text-3xl mb-6 text-center">Shop Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
