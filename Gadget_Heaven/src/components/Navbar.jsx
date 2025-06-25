import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

export default function Navbar() {
  const { cartCount, cartItems } = useCart()
  const { wishlistCount, wishlistItems } = useWishlist()
  const [showCartDropdown, setShowCartDropdown] = useState(false)
  const [showWishlistDropdown, setShowWishlistDropdown] = useState(false)

  return (
    <div className="navbar bg-base-100 bg-purple-600 text-white shadow-lg px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/stats">Statistics</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold">Gadget Heaven</Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/" className="btn btn-ghost">Home</Link></li>
          <li><Link to="/stats" className="btn btn-ghost">Statistics</Link></li>
          <li><Link to="/dashboard" className="btn btn-ghost">Dashboard</Link></li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <div className="flex items-center gap-2">
          <div className="dropdown dropdown-end">
            <div className="indicator">
              <span className="indicator-item badge badge-secondary badge-sm">{cartCount}</span>
              <button 
                tabIndex={0} 
                className="btn btn-ghost btn-circle"
                onClick={() => setShowCartDropdown(!showCartDropdown)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M20 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"></path>
                </svg>
              </button>
            </div>
            {showCartDropdown && (
              <div className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-80 text-black">
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-3">Cart Items ({cartCount})</h3>
                  {cartItems.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty</p>
                  ) : (
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {cartItems.map(item => (
                        <div key={item.cartId} className="flex items-center gap-3 p-2 border-b">
                          <img 
                            src={item.product_image} 
                            alt={item.product_title}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-sm truncate">{item.product_title}</p>
                            <p className="text-purple-600 font-semibold">${item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {cartItems.length > 0 && (
                    <div className="mt-4 pt-2 border-t">
                      <Link 
                        to="/dashboard" 
                        className="btn btn-primary btn-sm w-full"
                        onClick={() => setShowCartDropdown(false)}
                      >
                        View Cart
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="dropdown dropdown-end">
            <div className="indicator">
              <span className="indicator-item badge badge-secondary badge-sm">{wishlistCount}</span>
              <button 
                tabIndex={0} 
                className="btn btn-ghost btn-circle"
                onClick={() => setShowWishlistDropdown(!showWishlistDropdown)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
            </div>
            {showWishlistDropdown && (
              <div className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-80 text-black">
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-3">Wishlist Items ({wishlistCount})</h3>
                  {wishlistItems.length === 0 ? (
                    <p className="text-gray-500">Your wishlist is empty</p>
                  ) : (
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {wishlistItems.map(item => (
                        <div key={item.product_id} className="flex items-center gap-3 p-2 border-b">
                          <img 
                            src={item.product_image} 
                            alt={item.product_title}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-sm truncate">{item.product_title}</p>
                            <p className="text-purple-600 font-semibold">${item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {wishlistItems.length > 0 && (
                    <div className="mt-4 pt-2 border-t">
                      <Link 
                        to="/dashboard" 
                        className="btn btn-primary btn-sm w-full"
                        onClick={() => setShowWishlistDropdown(false)}
                      >
                        View Wishlist
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
