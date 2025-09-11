import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='flex justify-between p-5  w-full bg-violet-900 text-white font-bold fixed p-5'>
            <Link to={'/'} className='2xl'><i className="fa-solid fa-truck-fast"></i><span>Daily Cart</span></Link>
            <ul className='flex'>

                <li className='px-5'><Link to={'/Wishlist'}><i className="fa-solid fa-hand-holding-heart text-red-500 me-1"></i><span>Wishlist <span  className='p-1 bg-black mx-1 rounded-full ms-1'>10</span></span></Link></li>

                <li className='px-5'><Link to={'/Cart'}><i className="fa-solid fa-cart-flatbed-suitcase text-green-500 me-1"></i><span>Cart<span  className='p-1 bg-black mx-1 rounded-full ms-1'>20</span></span></Link></li>

            </ul>
        </nav>

    )
}

export default Header