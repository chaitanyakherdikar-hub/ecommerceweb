import React from "react";
import PhotoCard from "./PhotoCard";

const photos = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Street Photo ${i + 1}`,
  img: `/ecommerceweb/photo${i + 1}.jpg`, // ✅ images from public/
  price: Math.floor(Math.random() * (500 - 250) + 250), // random price
}));

function Shop() {
  return (
    <section id="shop" className="py-12 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
        Explore Street Photography
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </section>
  );
}

export default Shop;
