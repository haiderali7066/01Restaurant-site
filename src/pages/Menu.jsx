import React from "react";

const Menu = () => {
  return (
    <div>
      <div class="relative h-64">
        <div class="absolute inset-0 bg-cover bg-center bg-hero-pattern "></div>
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <div class="relative z-10 flex items-start justify-center h-full">
          <h1 class="text-white text-6xl font-fedro mt-20">Menu</h1>
        </div>
      </div>

      <div className="h-20 w-full flex text-center gap-2 md:gap-6 justify-center pt-5 mt-10 font-fedro">
        <h1 className="text-2xl active:border-black">STARTER</h1>
        <h1 className="text-2xl active:border-black">MAIN COURSE</h1>
        <h1 className="text-2xl active:border-black">DESSERTS</h1>
        <h1 className="text-2xl active:border-b-black">DRINKS</h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Filter By Price</h2>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="From $0"
              className="border border-gray-300 rounded-md px-3 py-2 w-24 mr-2"
            />
            <input
              type="text"
              placeholder="To $5000"
              className="border border-gray-300 rounded-md px-3 py-2 w-24 mr-2"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Filter
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex flex-col md:flex-row border-b pb-8">
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <img
                  src="/img/close-up-delicious-taco-plate.jpg"
                  alt="Product"
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <div className="w-full md:w-3/4 md:pl-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-monster">Product Name</h3>
                  <span className="text-xl font-bold">$20.00</span>
                </div>
                <p className="text-gray-600 mb-4">
                  ingredient1,ingredient2,ingredient3,ingredient4
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="relative bg-black text-white my-40">
        <img
          src="/img/close-up-delicious-chicken-meal 1.png"
          alt="Food background"
          class="w-full h-72 object-cover opacity-50"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div class="space-y-2">
              <img width="50" height="50" className="mx-auto" src="https://img.icons8.com/wired/64/FFFFFF/chef-hat.png" alt="chef-hat"/>
                <p class="text-3xl font-bold">420</p>
                <p class="text-sm font-monster">Professional Chefs</p>
              </div>
              <div class="space-y-2">
              <img width="50" height="50" className="mx-auto" src="https://img.icons8.com/pastel-glyph/50/FFFFFF/fast-food--v2.png" alt="fast-food--v2"/>
                <p class="text-3xl font-bold">320</p>
                <p class="text-sm font-monster">Items Of Food</p>
              </div>
              <div class="space-y-2">
              <img width="50" height="50" className="mx-auto" src="https://img.icons8.com/dotty/80/FFFFFF/customer-insight.png" alt="customer-insight"/>
                <p class="text-3xl font-bold">30+</p>
                <p class="text-sm font-monster">Years Of Experienced</p>
              </div>
              <div class="space-y-2">
              <img width="50" height="50" className="mx-auto" src="https://img.icons8.com/ios/50/FFFFFF/smiling.png" alt="smiling"/>
                <p class="text-3xl font-bold">220</p>
                <p class="text-sm font-monster">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
