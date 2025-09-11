import React from 'react'
import Header from '../components/Header'

function View() {
  return (
    <>
     <Header /> 
     {/* 1 st image view */}
     <div className="flex flex-col md:flex-row items-start gap-8 p-8">
  {/* Left Side - Product Image + Buttons */}
  <div className="flex flex-col items-center mt-30">
    <img 
      src="https://cyranoltd.com/wp-content/uploads/2020/07/Eyeliner-Black-water-resistant.png"
      alt="Essence Mascara Lash Princess"
      className="w-48 h-auto mb-4"
    />
    <div className="flex gap-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 ">
        ADD TO WISHLIST
      </button>
      <button className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700">
        ADD TO CART
      </button>
    </div>
  </div>

  {/* Right Side - Product Details */}
  <div className="flex-1 mt-25">
    <h2 className="text-2xl font-bold mb-2">Essence Mascara Lash Princess</h2>
    <p className="text-xl font-semibold mb-2">$9.99</p>
    <p><span className="font-bold">Brand:</span> Essence</p>
    <p><span className="font-bold">Category:</span> Beauty</p>
    <p className="mt-3">
      <span className="font-bold">Description:</span> The Essence Mascara Lash Princess is a
      popular mascara known for its volumizing and lengthening effects. Achieve
      dramatic lashes with this long-lasting and cruelty-free formula.
    </p>

    {/* Reviews */}
    <div className="mt-5">
      <h3 className="font-bold mb-2">Client Reviews</h3>
      <p><span className="font-semibold shadow">Eleanor Collins:</span> Would not recommend<br />Rating: ⭐⭐⭐</p>
      <p className="mt-2"><span className="font-semibold shadow">Lucas Gordon:</span> Very satisfied<br />Rating: ⭐⭐⭐⭐</p>
      <p className="mt-2"><span className="font-semibold shadow">Clara Nelson:</span> Highly impressed<br />Rating: ⭐⭐⭐⭐⭐</p>
    </div>
  </div>
</div>
    </>
  )
}

export default View