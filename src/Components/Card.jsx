import React from 'react'

function Card({ product }) {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-3 hover:shadow-md transition">

      {/* Discount */}
      <div className="relative">
        <span className="absolute left-0 top-0 rounded-br-md rounded-tl-xl bg-blue-600 px-2 py-1 text-[10px] font-bold text-white">
          {product.discountPercentage}% OFF
        </span>

        <img
          src={product.thumbnail}
          altat={product.title}
          className="mx-auto h-32 object-contain"
        />
      </div>

      {/* Delivery */}
      <div className="mt-2 inline-flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-[11px] font-semibold">
        ⏱ 10 MINS
      </div>

      {/* Product Name */}
      <h2 className="mt-2 line-clamp-2 text-sm font-semibold">
       {product.title}
      </h2>

      {/* Weight
      <p className="mt-1 text-sm text-gray-500">
        {product.weight}
      </p> */}

      {/* Price + Button */}
      <div className="mt-3 flex items-center justify-between">
        <div>
          <p className="font-bold">₹{product.price}</p>
          <p className="text-xs text-gray-400 line-through">
          
          </p>
        </div>

        <button className="rounded-lg border border-green-600 px-5 py-1.5 font-semibold text-green-600 hover:bg-green-50">
          ADD
        </button>
      </div>

    </div>
  )
}

export default Card