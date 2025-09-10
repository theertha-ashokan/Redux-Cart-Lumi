import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Wishlist() {
  return (
    <>
      <Header />

      <div className="mx-5 pt-24">
        <h1 className="text-3xl font-bold mb-6 text-center text-red-500">My Wishlist</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product Card */}
          <div className="rounded-lg border p-4 shadow hover:shadow-lg transition">
            {/* Image */}
            <img
              src="https://cyranoltd.com/wp-content/uploads/2020/07/Eyeliner-Black-water-resistant.png"
              alt="Product"
              className="h-48 w-full object-contain mb-4"
            />

            {/* Title */}
            <h3 className="font-bold text-lg text-center mb-3">Product Title</h3>

            {/* Action Buttons */}
            <div className="flex justify-center gap-6">
              {/* Remove from Wishlist */}
              <button
                className="text-red-600 hover:text-red-800 text-xl"
                title="Remove from Wishlist"
                
              >
                <i className="fa-solid fa-heart-circle-xmark"></i>
              </button>

              {/* Delete */}
              <button
                className="text-gray-600 hover:text-gray-800 text-xl"
                title="Delete"
              
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist
