import React from 'react'

const Addcart = () => {
  return (
    <div
      className="add-cart flex justify-between bg-white p-4 rounded-lg shadow-md ml-20 mr-20"
      style={{ marginTop: "10rem" }}
    >
      {/* Left Side */}
      <div className="left-side flex flex-col " style={{width: '700px'}}>
        <div class="bg-primary text-white px-10 py-4 rounded-t-lg">
          <span class="font-semibold mr-16">Product</span>
          <span class="font-semibold mr-16">Price</span>
          <span class="font-semibold mr-16">Quantity</span>
          <span class="font-semibold mr-16">Subtotal</span>
        </div>
        <div className="flex items-center py-4 border-b border-gray-200">
          <div className="w-40 h-30 flex-shrink-0">
            <img
              src="https://image.harrods.com/kilian-paris-good-girl-gone-bad-extreme-eau-de-parfum-50ml_15391581_27037165_2048.jpg"
              alt="Product"
              className="w-full h-full object-cover rounded-md mr-4"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Product Name</span>
            <span className="text-sm">Size: 50ml</span>
          </div>
          <span className="font-semibold">$17.70</span>
          <div className="flex items-center ml-auto">
            <button className="px-2 py-1 border rounded-md mr-2">-</button>
            <span className="px-2">1</span>
            <button className="px-2 py-1 border rounded-md ml-2">+</button>
          </div>
          <span className="font-semibold">$17.70</span>
        </div>
        <div className="flex items-center py-4 border-b border-gray-200">
          <div className="w-40 h-30 flex-shrink-0">
            <img
              src="https://image.harrods.com/kilian-paris-good-girl-gone-bad-extreme-eau-de-parfum-50ml_15391581_27037165_2048.jpg"
              alt="Product"
              className="w-full h-full object-cover rounded-md mr-4"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Product Name</span>
            <span className="text-sm">Size: 50ml</span>
          </div>
          <span className="font-semibold">$17.70</span>
          <div className="flex items-center ml-auto">
            <button className="px-2 py-1 border rounded-md mr-2">-</button>
            <span className="px-2">1</span>
            <button className="px-2 py-1 border rounded-md ml-2">+</button>
          </div>
          <span className="font-semibold">$17.70</span>
        </div>
        <div className="flex justify-between pt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Continue Shopping
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            Clear Cart
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-side w-72 flex flex-col justify-between">
        <div className="bg-primary text-white px-8 py-4 rounded-t-lg">
          <span className="font-semibold">Cart Total</span>
        </div>
        <div className="flex justify-between py-4 border-b border-gray-200">
          <span className="font-semibold">Subtotal</span>
          <span className="font-semibold">$23.20</span>
        </div>
        <div className="py-4 border-b border-gray-200">
          <span className="font-semibold">Select Country</span>
          <select className="block w-full border rounded-md py-1 px-2 mt-2">
            <option>United States</option>
            {/* Add more countries as needed */}
          </select>
        </div>
        <div className="flex justify-between py-4">
          <span className="font-semibold">Total Amount</span>
          <span className="font-semibold">$23.20</span>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Addcart