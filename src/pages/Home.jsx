import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}}className='mx-5'>
        <div className='grid grid-cols-4 gap-4'>
            
           {/* prduct 1 */}
          <div className='rounded border p-2 shadow'>
            {/* images */}
            <img height={'200px'} src="https://cyranoltd.com/wp-content/uploads/2020/07/Eyeliner-Black-water-resistant.png" alt=" product img" />
            <div className='text-center'>

            {/* title */}
            <h3 className='font-bold text-xl'>title</h3>

            {/* link */}
            <Link to={`/id/View`} className='bg-violet-700 p-1 rounded text-white mt-3 inline-block'>View More...</Link>
            </div>
          </div> 
        </div>
    </div>
    </>
  )
}

export default Home