import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      {/* 404 Image */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/748/748154.png"
        alt="Page Not Found"
        className="w-64 h-64 mb-6"
      />

      {/* Text */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
      <p className="text-lg text-gray-600 mb-6 text-red-500">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Back to Home button */}
      <Link
        to="/"
        className="px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-gray-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}

export default PageNotFound;
