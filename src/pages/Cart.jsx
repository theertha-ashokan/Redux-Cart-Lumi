import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { use } from 'react'
import { decrementQuantity, removeCartItem ,incrementQuantity, emptyCart} from '../redux/slice/cartSlice'

function Cart  () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userCart = useSelector(state=>state.cartReducer)
  const [totalCart,setTotalCart] = useState(0)

  useEffect(()=>{
    if(userCart?.length>0){
    setTotalCart(Math.ceil(userCart?.map(item=>item.totalPrice)?.reduce((prev,curr)=>prev+curr)))
    }

  },[userCart])

  const handleDecrementQuantity = (product)=>{
    if(product.quantity>1){
      dispatch (decrementQuantity(product.id))
    }else{
      dispatch (removeCartItem(product.id))
    }
  }

  const checkout = ()=>{
    dispatch(emptyCart())
    alert("Your order has been successfully confirmed...Thank you for shoping with us!!!")
    navigate('/')
  }
  

  return (
    <>
      <Header />
      <div className="mx-5 pt-24">
        <h1 className="text-4xl font-bold my-5">Cart Summary</h1>

        {
          userCart?.length>0?
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

                {
                  userCart?.map((product,index)=>
                  <tr className="border-b">
                  <td className="py-3">{index+1}</td>
                  <td className="py-3"> <Link to = {`${product?.id}/View`}className='text-blue-500 underline'>{product?.title?.slice(0,20)}...</Link></td>
                  <td className="py-3">
                    <img width={'70px'} height={'70px'}
                      src= {product?.thumbnail}
                      alt="Product"
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="py-3">
                    <div className="flex items-center">

                      <button onClick={()=>dispatch(handleDecrementQuantity(product))} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold">
                        -
                      </button>
                      <input
                        className="border p-1 mx-2 w-12 text-center rounded" style={{width:'48px'}}
                        type="text"
                        value={product?.quantity}
                        readOnly
                      />
                      <button onClick={()=>dispatch(incrementQuantity(product?.id))} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-3">{product?.totalPrice}</td>
                  <td className="py-3">

                    <button onClick={()=>dispatch(removeCartItem(product?.id))} className="text-red-500 hover:text-red-700">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                  )     
                }

              </tbody>
            </table>
            <div className='float-right mt-4'> 

              <button onClick={()=>dispatch(emptyCart())} className='bg-red-700 text-white text-xl p-1 mx-2 rounded '>EMPTY CART</button>

               <Link to={'/'} className='bg-blue-700 text-white text-xl p-1 mx-2 rounded '>SHOW MORE</Link>

            </div>
          </div>

          {/* Total Section */}
          <div className='col-span-1 rounded shadow p-5'>
                                <h2 className='font-bold text-2xl mb-4'>Total Amount: <span className='text-red-600'>$ {totalCart}</span></h2>
                                <hr />
       <button onClick={checkout} className='rounded bg-green-600 p-2 text-white mt-4 w-full text-xl'>CHECK OUT</button>
        </div>
        </div>
        :
        <p className='font-bold  my-10 '>Your Cart is empty</p>
      }
      
      </div>
    </>
  )
}

export default Cart
