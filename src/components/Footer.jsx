import React from "react";

function Footer() {
  return (
    <footer className="bg- bg-violet-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {/* Left Section */}
        <div>
          <h5 className="flex items-center text-lg font-bold mb-3">
            <i className="fas fa-truck mr-2"></i> Daily Cart
          </h5>
          <p className="text-sm">
            Designed and built with all the love in the world by the Luminar
            team with the help of our contributors.
          </p>
          <p className="text-xs mt-2">
            Code licensed Luminar, docs CC BY 3.0. <br />
            Currently v5.3.2.
          </p>
        </div>

        {/* Links */}
        <div>
          <h5 className="font-bold text-lg mb-3">Links</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home Page</a></li>
            <li><a href="/Wishlist" className="hover:underline">Wishlist Page</a></li>
            <li><a href="/Cart" className="hover:underline">Cart Page</a></li>
          </ul>
        </div>

        {/* Guides */}
        <div>
          <h5 className="font-bold text-lg mb-3">Guides</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">React</a></li>
            <li><a href="/" className="hover:underline">React Bootstrap</a></li>
            <li><a href="/" className="hover:underline">React Router</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h5 className="font-bold text-lg mb-3">Contact Us</h5>
          <div className="flex mb-3">
            <input
              type="email"
              placeholder="Enter your email here"
              className="w-full px-3 py-2 rounded-l-md text-black outline-none"
            />
            <button className="bg-white text-purple-600 px-4 rounded-r-md font-bold">
              →
            </button>
          </div>
          <div className="flex space-x-4 text-xl">
            <a href="/" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            <a href="/" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
            <a href="/" className="hover:text-gray-300"><i className="fab fa-facebook"></i></a>
            <a href="/" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
            <a href="/" className="hover:text-gray-300"><i className="fab fa-github"></i></a>
            <a href="/" className="hover:text-gray-300"><i className="fas fa-phone"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm border-t border-purple-400 mt-8 pt-4">
        <p>
          Copyright © May 2025 Batch, Daily Cart. Built with React Redux.
        </p>
      </div>
    </footer>
  );
}

export default Footer;