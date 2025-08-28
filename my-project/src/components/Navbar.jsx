
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-extrabold text-white font-[Open_Sans]">
        StreetoGraphs
      </div>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/about" className="hover:text-blue-400 transition">About</Link>
        <Link to="/shop" className="hover:text-blue-400 transition">Shop</Link>
        <Link to="/cart" className="hover:text-blue-400 transition">Cart</Link>
        <Link to="/Contact" className="hover:text-blue-400 transition">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
