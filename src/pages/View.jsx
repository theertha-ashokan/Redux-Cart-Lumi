import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'

function View() {
    const userWishlist = useSelector(state => state.wishlistReducer)
    const userCart = useSelector(state=>state.cartReducer)
    
    const dispatch = useDispatch()
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
        setProduct(allProducts.find(item => item.id == id))
    }, [])

    const handleAddToWishlist = () => {
        const existingProduct = userWishlist?.find(item => item.id == product.id)
        if (existingProduct) {
            alert("Product already exists in your wishlist...Add another!!!")
        } else {
            dispatch(addToWishlist(product))
        }
    }

   const handleCart = ()=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item.id==product.id)
    if(existingProduct){
        alert("Product Udated Successfully")
    }
   }

    return (
        <div>
            <Header />
            <div className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-6">
                    
                    {/* Left side - Product Image + Buttons */}
                    <div className="flex flex-col items-center">
                        <img
                            className="w-72 h-auto rounded-lg shadow-md"
                            src={product?.thumbnail}
                            alt={product?.title}
                        />
                        <div className="flex gap-4 mt-5">
                            <button
                                
                                onClick={handleAddToWishlist}
                                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white font-medium shadow-md transition"
                            >
                                ADD TO WISHLIST
                            </button>
                            <button
                                onClick={handleCart}
                                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white font-medium shadow-md transition"
                            >
                                ADD TO CART
                            </button>
                        </div>
                    </div>

                    {/* Right side - Product Details */}
                    <div className="space-y-4">
                        <h1 className="text-3xl font-extrabold text-gray-800">{product?.title}</h1>
                        <h2 className="text-2xl text-red-500 font-bold">$ {product?.price}</h2>
                        <p className="text-gray-700 mt-2">
                            <span className="font-bold">Description: </span>
                            {product?.description}
                        </p>

                        <h3 className="rounded-lg shadow bg-gray-100 px-4 py-2 font-semibold text-gray-800">
                            Client Reviews
                        </h3>

                        {product?.reviews?.length > 0 ? (
                            product?.reviews?.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg border border-gray-200 shadow-sm p-3 bg-white"
                                >
                                    <p className="text-gray-800">
                                        <span className="font-bold">{item?.reviewerName}: </span>
                                        {item?.comment}
                                    </p>
                                    <p className="text-yellow-500 flex items-center gap-1">
                                        {item?.rating} <i className="fa-solid fa-star"></i>
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 italic">No reviews available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
