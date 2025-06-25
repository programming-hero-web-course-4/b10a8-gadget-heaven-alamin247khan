import React from 'react'
import bannerImg from '../assets/banner.jpg'

export default function Banner() {
  return (
    <div className="hero min-h-[500px] bg-purple-600 text-white relative">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-lg mb-8 opacity-90">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          <button 
            onClick={() => {
              const productsSection = document.getElementById('products-section')
              if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn btn-white text-purple-600 mb-35 px-8 py-3 rounded-full font-semibold"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="absolute -bottom-100 left-1/2 transform -translate-x-1/2">
        <div className="w-[1000px] h-[550px] bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 p-4">
          <img 
            src={bannerImg} 
            alt="Banner" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
