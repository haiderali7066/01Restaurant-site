import React from "react";


const Home = () => {
  return (
    <div className="font-monster">
      {/* carousel */}
      
      
      

      {/* 2nd section */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 my-20 gap-5 justify-between">
        <div>
          <h2 className="text-2xl my-2 font-fedro">About Us</h2>
          <h1 className="text-4xl my-5 font-fedro">We Create the best foody product</h1>
          <p className="text-xs my-6 font-monster">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iure
            tempora possimus debitis facilis delectus aliquam repudiandae soluta
            quae expedita. Pariatur ea est animi vitae hic accusantium delectus
            laudantium rem?
          </p>
          <ul className="list-disc text-sm ml-4 font-monster">
            <li className="my-4">
              Lacus nisi, et ac dapibus sit eu velit in consequat nope.
            </li>
            <li className="my-4">
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="my-4">
              Lacus nisi, et ac dapibus sit eu velit in consequat delectus
              laudantium .
            </li>
          </ul>
          <button className="my-5 h-8 w-20 text-xs font-monster text-white bg-teal-600 rounded-md shadow-lg ">
            Read More
          </button>
        </div>

        <div>
          <img src="/img/unsplash_jpkfc5_d-DI@2x.png" alt="" />
          <div className="grid grid-cols-2 py-2 gap-2">
            <img src="/img/unsplash_mAQZ3X_8_l0.png" alt="" />
            <img src="/img/unsplash_mAQZ3X_8_l0.png" alt="" />
          </div>
        </div>
      </div>

      {/* food category */}
      <div>
        <div className="text-center text-4xl my-5 font-fedro ">
          <h1> Food Category</h1>
        </div>
        <div className="flex flex-wrap gap-5 justify-evenly px-10 mb-20 mt-10 font-monster ">
          <div className="h-48 w-44 relative">
            <img src="/img/unsplash_-lHZUkiWM74.png" alt="" />
            <div className="h-20 w-24 flex items-center justify-center absolute top-12 left-10 bg-black bg-opacity-50 rounded-md ">
              <button className="h-8 w-20 bg-teal-600 text-white  rounded-md ">
                Dessert
              </button>
            </div>
          </div>
          <div className="h-48 w-44 relative">
            <img src="/img/unsplash_-lHZUkiWM74.png" alt="" />
            <div className="h-20 w-24 flex items-center justify-center absolute top-12 left-10 bg-black bg-opacity-50 rounded-md ">
              <button className="h-8 w-20 bg-teal-600 text-white  rounded-md ">
                Dessert
              </button>
            </div>
          </div>
          <div className="h-48 w-44 relative">
            <img src="/img/unsplash_-lHZUkiWM74.png" alt="" />
            <div className="h-20 w-24 flex items-center justify-center absolute top-12 left-10 bg-black bg-opacity-50 rounded-md ">
              <button className="h-8 w-20 bg-teal-600 text-white  rounded-md ">
                Dessert
              </button>
            </div>
          </div>
          <div className="h-48 w-44 relative">
            <img src="/img/unsplash_-lHZUkiWM74.png" alt="" />
            <div className="h-20 w-24 flex items-center justify-center absolute top-12 left-10 bg-black bg-opacity-50 rounded-md ">
              <button className="h-8 w-20 bg-teal-600 text-white  rounded-md ">
                Dessert
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* img bar */}
      <div>
        <div className="relative h-[300px] w-full overflow-hidden my-32">
          <img
            src="/img/frame4.png"
            alt="Rooftop restaurant view"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-4xl  text-white md:text-5xl lg:text-6xl font-fedro">
              Book Early & Save
            </h1>
            <p className="max-w-md text-lg text-white/90 font-monster">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-monster py-2 px-4 rounded">
              
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* card */}
      <div>
        <div className=" px-4 py-8 ">
          <h2 className="text-4xl font-fedro text-center mb-8">Meet Our Chef</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className=" rounded-lg shadow-md overflow-hidden flex flex-col justify-center items-center"
              >
                <div className="relative aspect-w-1 aspect-h-1">
                  <img
                    src="/img/Rectangle 8863.png"
                    alt="Chef"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">D'Shawn</h3>
                  <p className="text-sm text-gray-600">Lead Chef</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-monster py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* returant */}
      <div>
        <div className=" p-4 md:p-8 my-40">
          <div className="grid grid-cols-1 md:grid-cols-2  ">

            <div>

              <div className="relative h-72 ">
                <img
                  src="/img/Picture → 14-1-600x400.jpg.webp.png"
                  alt="Restaurant terrace"
                 
                  className="object-fill"
                />
              </div>

              <div className="  h-64 p-6 border-b-2 border-l-2 border-teal-600 ">
                <h2 className="text-3xl font-bold mb-4 font-fedro">Meet & Greet</h2>
                <p className="text-sm font-monster">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  arcu nisl, varius sit amet adipiscing euismod, ultrices eget
                  mauris. Proin posuere justo eget leo et lacus diam. Etiam
                  fringilla nunc vel augue volutpat, id luctus nunc mollis. Sed
                  eget mattis mauris, mollis ullamcorper dui. Etiam fringilla
                  nunc vel augue volutpat, id luctus nunc mollis. Sed eget
                  mattis mauris, mollis ullamcorper dui. 
                </p>
              </div>

            </div>

            <div>
              <div className=" p-6 border-t-2 border-r-2 border-teal-600">
                <h2 className="text-3xl font-bold mb-4 font-fedro">Our Restaurant</h2>
                <p className="text-sm mb-4 font-monster">
                  Etiam fringilla nunc vel augue volutpat, id luctus nunc
                  mollis. Sed eget mattis mauris, mollis ullamcorper dui. Donec
                  nec metus mauris. Etiam fringilla nunc vel augue volutpat, id
                  luctus nunc mollis.
                </p>
                <p className="text-sm font-monster">
                  Sed eget mattis mauris, mollis ullamcorper dui. Etiam
                  fringilla nunc vel augue volutpat,
                </p>
              </div>
              <div className="relative h-64 md:h-80">
                <img
                  src="/img/pic.png"
                  alt="Restaurant interior"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

          </div>
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
              <h3 class="text-xl font-medium text-gray-800 mb-2 font-fedro">Dining</h3>
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
              <h3 class="text-xl font-medium text-gray-800 mb-2 font-fedro">Restaurant</h3>
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
};

export default Home;
