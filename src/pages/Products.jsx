import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
const products = [
  {
    id: 1,
    name: "Product name",
    price: 38.0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Product name",
    price: 28.0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Product name",
    price: 21.0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Product name",
    price: 38.0,
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/img/close-up-delicious-chicken-meal.jpg",
    "/img/close-up-delicious-chicken-meal.jpg",
    "/img/close-up-delicious-chicken-meal.jpg",
    "/img/close-up-delicious-chicken-meal.jpg",
  ];
  const [startIndex, setStartIndex] = useState(0);

  const nextProduct = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <div className="font-monster">
      {/* main */}
      <div class="relative h-64">
        <div class="absolute inset-0 bg-cover bg-center bg-hero-pattern "></div>
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <div class="relative z-10 flex items-start justify-center h-full">
          <h1 class="text-white text-6xl font-fedro mt-20">Product Details</h1>
        </div>
      </div>
      {/* 1 */}
      <div className=" px-4 py-8 m-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="flex gap-4">
              <div className="hidden md:flex flex-col gap-4">
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Product thumbnail ${index + 1}`}
                    className={`w-20 h-20 object-cover cursor-pointer ${
                      selectedImage === index ? "border-2 border-primary" : ""
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
              <div className="flex-grow">
                <img
                  src="/img/close-up-delicious-chicken-meal.jpg"
                  alt="Product main image"
                  className="w-96 h-96 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-fedro mb-2">Product Name</h1>
            <p className="text-gray-600 mb-4">Category: Pizza</p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ac pellentesque bibendum non dui volutpat fringilla bibendum. Urna
              vitae feugiat pretium donec id elementum. Ultrices mattis sed
              vitae risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <p className="text-2xl font-semibold mb-4">54.00$</p>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-primary text-primary text-yellow-400"
                />
              ))}
              <span className="ml-2 text-gray-600">5.0 Rating | 22 Review</span>
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="block mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <button
                  className="bg-gray-200 px-3 py-1 rounded-l"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-16 text-center border-y border-gray-200 py-1"
                />
                <button
                  className="bg-gray-200 px-3 py-1 rounded-r"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button className="bg-teal-600 text-white px-6 py-2 rounded">
              Add Cart
            </button>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="mx-10 mb-20 flex flex-col gap-10"> 
        <div >
          <h1 className="font-fedro text-2xl inline border-b-teal-600 border-b-2 ">Discription</h1>
          <h1 className="font-fedro text-2xl inline px-10">Reviews (24)</h1>
        </div>
        <p>
          Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
          purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
          sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget
          sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor.
          Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet
          interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi.
          In nulla quam, lacinia eu aliquam ac, aliquam in nisl. Suspendisse
          cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo
          urna, id porttitor est dignissim nec. Pellentesque scelerisque
          hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis
          massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum
          massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer
          eu vulputate justo. Aenean pretium odio vel tempor sodales.
          Suspendisse eu fringilla leo, non aliquet sem.
        </p>
        <h1 className="font-fedro text-2xl">Key Benefits:</h1>
        <ul className="list-disc ml-5 ">
          <li className="py-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li className="py-2"> Vel, dignissimos delectus? Iure minus ipsa vitae.</li>
          <li className="py-2">Rauris eget diam magna, in blandit turpis.</li>
          <li className="py-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li className="py-2"> Vel, dignissimos delectus? Iure minus ipsa vitae.</li>
          </ul>
      </div>
      {/* 3 */}
      <div className="mx-10 px-4 py-8">
        <h2 className="text-2xl font-fedro mb-6">Similar Products</h2>
        <div className="relative">
          <div className="flex overflow-x-hidden">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2 transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${startIndex * 100}%)`,
                }}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="/img/close-up-delicious-chicken-meal.jpg"
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevProduct}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextProduct}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index)}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === startIndex ? "bg-primary" : "bg-gray-300"
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* service */}
      <section class="bg-[#e0f2f1] py-16 mb-40 mt-10">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-semibold text-center text-gray-800 mb-12 font-fedro">
            Our Services
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 mx-auto mb-4 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
              <h3 class="text-xl font-medium text-gray-800 mb-2 font-fedro">
                Concierge Service
              </h3>
              <p class="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                accumsan, metus ultrices eleifend gravida.
              </p>
            </div>
            <div class="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 mx-auto mb-4 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 5h18v14H3z"></path>
                <path d="M3 10h18"></path>
                <path d="M12 5v14"></path>
              </svg>
              <h3 class="text-xl font-medium text-gray-800 mb-2 font-fedro">
                Dining
              </h3>
              <p class="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                accumsan, metus ultrices eleifend gravida.
              </p>
            </div>
            <div class="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 mx-auto mb-4 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <h3 class="text-xl font-medium text-gray-800 mb-2 font-fedro">
                Restaurant
              </h3>
              <p class="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                accumsan, metus ultrices eleifend gravida.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
