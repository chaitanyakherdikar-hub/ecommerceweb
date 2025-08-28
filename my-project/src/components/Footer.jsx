import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 border-t border-gray-800 text-center">
      <p>
        © {new Date().getFullYear()} StreetoGraphs. Built with ❤️ for Street Photography.
      </p>
    </footer>
  );
};

export default Footer;
