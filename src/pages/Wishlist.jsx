import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'

function Wishlist() {
    const ourWishlist = useSelector(state=>state.wishlistReducer)
    const userCart = useSelector(state=>state.cartReducer)
    
    // console.log(ourWishlist);
    const dispatch = useDispatch()

// cart
    const handleCart = (product)=>{
        dispatch(removeWishlistItem(product?.id))
        dispatch(addToCart(product))
        const existingProduct = userCart?.find(item=>item.id==product.id)
        if(existingProduct){
            alert("Product Udated Successfully")
        }
       }
    
  return (
    <>
        <Header/>
       <div>
  <h1 className="text-3xl font-bold text-center text-red-600 py-5">
    My Wishlist
  </h1>

  {ourWishlist?.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 py-10">
      {ourWishlist.map((product, index) => (
        <div
          key={index}
          className="rounded border p-4 shadow hover:shadow-lg transition duration-300"
        >
          {/* Image */}
          <img
            className="w-full h-48 object-cover rounded"
            src={product?.thumbnail}
            alt={product?.title}
          />

          {/* Title */}
          <div className="text-center mt-3">
            <h3 className="font-bold text-xl">{product?.title}</h3>

            {/* Buttons */}
            <div className="flex justify-center gap-6 my-3">
              <button>
                <i onClick={()=>dispatch(removeWishlistItem(product?.id))} className="fa-solid fa-heart-circle-xmark text-red-600 text-xl"></i>
              </button>

              <button>
                <i onClick={()=>handleCart(product)} className="fa-solid fa-cart-plus text-green-600 text-xl"></i>
              </button>

            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center my-10 font-bold">Wishlist is Empty...!!!</p>
  )}
</div>

    </>
  )
}

export default Wishlist