import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slice/productSlice'

// use dispatch an action from a component
const Home = () => {
  const dispatch = useDispatch()

  // used to select data from the redux store
  const { loading, error, allProducts } = useSelector((state) => state.productReducer)
  console.log(loading, error, allProducts);

  // pagination
  const productsPerPage = 8
  const totalPages = Math.ceil(allProducts?.length / productsPerPage)
  const [currentPage, setcurrentPage] = useState(1)
  const currentPageProductsLastIndex = currentPage * productsPerPage
  const currentPageProductsFirstIndex = currentPageProductsLastIndex - productsPerPage
  const visibleProductCard = allProducts?.slice(currentPageProductsFirstIndex, currentPageProductsLastIndex)


  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  // pagination fn
  const navigatePrevPage = ()=>{
    if(currentPage!=1){
      setcurrentPage(currentPage-1)
    }
  }

   const navigateNextPage = ()=>{
    if(currentPage!=totalPages){
      setcurrentPage(currentPage+1)
    }
  }

  return (
    <>
      <Header insideHeader={true} />
      <div style={{ paddingTop: '100px' }} className='mx-5'>

        {
          loading ?
            <p>Loading</p>
            :
            <div className='grid grid-cols-4 gap-4'>

              {/* prduct 1 */}
              {/* duplicate dive according to the product array */}

              {
                allProducts?.length > 0 ?
                  visibleProductCard?.map(product => (
                    <div key={product?.id} className='rounded border p-2 shadow'>
                      {/* images */}
                      <img height={'200px'} src={product?.thumbnail} alt=" product img" />
                      <div className='text-center'>
                        {/* title */}
                        <h3 className='font-bold text-xl'>{product?.title}</h3>
                        {/* link */}
                        <Link to={`/${product?.id}/View`} className='bg-violet-700 p-1 rounded text-white mt-3 inline-block'>View More...</Link>
                      </div>
                    </div>
                  ))
                  :
                  <p>product not found</p>
              }

            </div>
        }


      </div>

      {/* pagination div */}
      <div className='text-center my-10  font-bold text-2xl text-violet-800'>
        <button onClick={navigatePrevPage} className='cursor-pointer'><i className="fa-solid fa-backward"></i></button>
        <span>{currentPage}  of {totalPages}</span>
        <button onClick={navigateNextPage} className='cursor-pointer'><i className="fa-solid fa-forward"></i></button>
      </div>

    </>
  )
}

export default Home