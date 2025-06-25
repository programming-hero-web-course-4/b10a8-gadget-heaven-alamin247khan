import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import Modal from '../components/Modal'

export default function CartTab() {
  const { cartItems, removeFromCart, clearCart, sortCartByPrice, getTotalCost } = useCart()
  const [showModal, setShowModal] = useState(false)

  const handlePurchase = () => {
    if (cartItems.length > 0) {
      setShowModal(true)
    }
  }

  const handleConfirmPurchase = () => {
    clearCart()
    setShowModal(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Cart</h2>
        <div className="flex items-center gap-4">
          <span className="text-xl font-semibold">Total cost: ${getTotalCost().toFixed(2)}</span>
          <button 
            onClick={sortCartByPrice}
            disabled={cartItems.length === 0}
            className="btn btn-outline btn-primary"
          >
            Sort by Price
          </button>
          <button 
            onClick={handlePurchase}
            disabled={cartItems.length === 0}
            className="btn btn-primary"
          >
            Purchase
          </button>
        </div>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.cartId} className="bg-white rounded-lg shadow-md p-6 flex items-center gap-6">
              <img 
                src={item.product_image} 
                alt={item.product_title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{item.product_title}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-lg font-semibold text-purple-600">${item.price}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.cartId)}
                className="btn btn-error btn-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      
      {showModal && (
        <Modal 
          onConfirm={handleConfirmPurchase}
          onCancel={() => setShowModal(false)}
          totalCost={getTotalCost()}
        />
      )}
    </div>
  )
}
