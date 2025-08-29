import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="font-monster">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[500px] md:h-[650px] w-full">
        <img
          src="/img/close-up-delicious-chicken-meal.jpg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-fedro text-white">
            Welcome to Our Restaurant
          </h1>
          <p className="mt-4 max-w-xl text-white/90 text-sm md:text-lg font-monster">
            Experience world-class food crafted by our talented chefs.
          </p>
          <div className="mt-6 flex gap-4">
            <Link to="/Menu">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-md font-monster">
                Explore Menu
              </button>
            </Link>
            <button className="bg-white hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-md font-monster">
              Book a Table
            </button>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 md:px-10 my-20 gap-8 items-center max-w-7xl mx-auto">
        <div>
          <h2 className="text-2xl my-2 font-fedro">About Us</h2>
          <h1 className="text-3xl md:text-4xl my-5 font-fedro">
            We Create the Best Foody Products
          </h1>
          <p className="text-sm md:text-base my-6 font-monster text-gray-600">
            We serve mouth-watering food prepared by world-class chefs. Quality,
            freshness, and taste are our promises to you.
          </p>
          <ul className="list-disc text-sm ml-4 font-monster text-gray-700">
            <li className="my-2">Freshly sourced ingredients.</li>
            <li className="my-2">Unique recipes & authentic flavors.</li>
            <li className="my-2">Prepared by highly skilled chefs.</li>
          </ul>
          <button className="my-5 px-5 py-2 text-sm font-monster text-white bg-teal-600 rounded-md shadow hover:bg-teal-700 transition">
            Read More
          </button>
        </div>

        <div className="space-y-2">
          <img
            src="/img/unsplash_jpkfc5_d-DI@2x.png"
            alt=""
            className="w-full h-64 md:h-80 object-cover rounded-lg"
          />
          <div className="grid grid-cols-2 gap-2">
            <img
              src="/img/unsplash_mAQZ3X_8_l0.png"
              alt=""
              className="w-full h-32 object-cover rounded-lg"
            />
            <img
              src="/img/unsplash_mAQZ3X_8_l0.png"
              alt=""
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* ===== FOOD CATEGORY ===== */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-3xl md:text-4xl my-5 font-fedro">
          <h1>Food Category</h1>
        </div>
        <div className="flex flex-wrap gap-6 justify-center px-4 md:px-10 mb-20 mt-10">
          {[
            { name: "Pasta", img: "/cat/1.png" },
            { name: "Burgers", img: "/cat/2.png" },
            { name: "Diet", img: "/cat/3.png" },
            { name: "Desserts", img: "/cat/4.png" },
          ].map((item, i) => (
            <div
              key={i}
              className="h-48 w-40 md:w-44 relative rounded-lg overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <button className="px-4 py-1 bg-teal-600 text-white rounded-md text-sm">
                  {item.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== IMG BAR ===== */}
      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full my-32">
        <img
          src="/img/frame4.png"
          alt="Rooftop restaurant view"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-fedro">
            Book Early & Save
          </h1>
          <p className="max-w-md text-sm sm:text-lg text-white/90 mt-2 font-monster">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-monster py-2 px-5 rounded transition">
            Book Now
          </button>
        </div>
      </div>

      {/* ===== MEET OUR CHEF ===== */}
      <div className="px-4 py-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-fedro text-center mb-8">
          Meet Our Chef
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "D'Shawn",
              role: "Lead Chef",
              img: "/img/Rectangle 8863.png",
            },
            { name: "D'Shawn", role: "Lead Chef", img: "/chef/c1.jpg" },
            { name: "Isabella", role: "Pastry Chef", img: "/chef/c2.jpg" },
            { name: "Haider", role: "Italian Cuisine", img: "/chef/c3.jpg" },
          ].map((chef, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden flex flex-col justify-center items-center bg-white"
            >
              <img
                src={chef.img}
                alt={chef.name}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg mb-1">{chef.name}</h3>
                <p className="text-sm text-gray-600">{chef.role}</p>
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
      {/* restaurant */}
      <div className="p-4 md:p-8 my-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src="/img/Picture → 14-1-600x400.jpg.webp.png"
              alt="Restaurant terrace"
              className="w-full h-72 object-cover rounded-lg"
            />
            <div className="mt-4 h-auto p-6 border-l-4 border-teal-600 rounded">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-fedro">
                Meet & Greet
              </h2>
              <p className="text-sm md:text-base font-monster text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                arcu nisl, varius sit amet adipiscing euismod, ultrices eget
                mauris. Proin posuere justo eget leo.
              </p>
            </div>
          </div>

          <div>
            <div className="p-6 border-r-4 border-teal-600 rounded">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-fedro">
                Our Restaurant
              </h2>
              <p className="text-sm md:text-base mb-4 font-monster text-gray-700">
                Etiam fringilla nunc vel augue volutpat, id luctus nunc mollis.
                Sed eget mattis mauris, mollis ullamcorper dui.
              </p>
            </div>
            <img
              src="/img/pic.png"
              alt="Restaurant interior"
              className="w-full h-64 md:h-80 object-cover rounded-lg mt-4"
            />
          </div>
        </div>
      </div>

      {/* service */}
      <section className="bg-[#e0f2f1] py-16 mb-20 mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-12 font-fedro">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Concierge Service" },
              { title: "Dining" },
              { title: "Restaurant" },
            ].map((service, idx) => (
              <div key={idx} className="text-center">
                <div className="h-12 w-12 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                  {/* Placeholder for icon */}
                  <span className="text-lg">★</span>
                </div>
                <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2 font-fedro">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  accumsan, metus ultrices eleifend gravida.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
