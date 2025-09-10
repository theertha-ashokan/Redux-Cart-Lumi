import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
      <Header />
      <div className="mx-5 pt-24">
        <h1 className="text-4xl font-bold my-5">Cart Summary</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Table Section */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="border-b">
                <tr className="text-gray-700">
                  <th className="py-2">#</th>
                  <th className="py-2">Name</th>
                  <th className="py-2">Image</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Example row - map through cart array */}
                <tr className="border-b">
                  <td className="py-3">1</td>
                  <td className="py-3">Product Title</td>
                  <td className="py-3">
                    <img
                      src="https://cyranoltd.com/wp-content/uploads/2020/07/Eyeliner-Black-water-resistant.png"
                      alt="Product"
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="py-3">
                    <div className="flex items-center">
                      <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold">
                        -
                      </button>
                      <input
                        className="border p-1 mx-2 w-12 text-center rounded"
                        type="text"
                        value={10}
                        readOnly
                      />
                      <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-3">$400</td>
                  <td className="py-3">
                    <button className="text-red-500 hover:text-red-700">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='float-right mt-4'> 
              <button className='bg-red-700 text-white text-xl p-1 mx-2 rounded '>EMPTY CART</button>
               <Link to={'/'} className='bg-blue-700 text-white text-xl p-1 mx-2 rounded '>SHOW MORE</Link>

            </div>
          </div>

          {/* Total Section */}
          <div className="bg-white shadow-md rounded-lg p-6 h-fit">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$400</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$20</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>$420</span>
            </div>
            <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
