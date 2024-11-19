import React, { useState } from "react";

export default function ShoppingCart() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product name",
      price: 35.0,
      quantity: 1,
      rating: 3,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Product name",
      price: 25.0,
      quantity: 1,
      rating: 3,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Product name",
      price: 15.0,
      quantity: 1,
      rating: 3,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]);
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id, newQuantity) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, newQuantity) }
          : product
      )
    );
  };

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const cartSubtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const shippingCharge = 0.0;
  const totalAmount = cartSubtotal + shippingCharge;

  const applyCoupon = () => {
    // Implement coupon logic here
    console.log("Applying coupon:", couponCode);
  };

  return (
    <div className="font-monster">
      <div class="relative h-64">
        <div class="absolute inset-0 bg-cover bg-center bg-hero-pattern "></div>
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <div class="relative z-10 flex items-start justify-center h-full">
          <h1 class="text-white text-6xl font-fedro mt-20">Cart Items</h1>
        </div>
      </div>

      <div className="mx-10 px-4 py-8 mt-10">
        <div className="overflow-x-auto mb-8">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr className="font-fedro">
                <th className="text-left p-2">Product</th>
                <th className="text-left p-2">Price</th>
                <th className="text-left p-2">Quantity</th>
                <th className="text-left p-2">Total</th>
                <th className="text-left p-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="p-2">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/img/close-up-delicious-chicken-meal.jpg"
                        alt={product.name}
                        className="w-20 h-20 object-cover"
                      />
                      <div>
                        <h3 >{product.name}</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-2xl ${
                                i < product.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-2">${product.price.toFixed(2)}</td>
                  <td className="p-2">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          updateQuantity(product.id, product.quantity - 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(product.id, product.quantity + 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-2">
                    ${(product.price * product.quantity).toFixed(2)}
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:flex md:justify-between my-20">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-fedro mb-2">Coupon Code</h2>
            <div className="flex">
              <input
                type="text"
                className="border rounded-l px-4 py-2 w-full md:w-64"
                placeholder="Enter Here code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button
                className="bg-teal-600 text-white px-4 py-2 rounded-r hover:bg-emerald-600"
                onClick={applyCoupon}
              >
                Apply
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-lg  mb-2">Total Bill</h2>
            <div className="border rounded p-4">
              <div className="flex justify-between mb-2">
                <span>Cart Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping Charge</span>
                <span>${shippingCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-teal-600 text-white px-4 py-2 rounded mt-4 hover:bg-emerald-600">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
