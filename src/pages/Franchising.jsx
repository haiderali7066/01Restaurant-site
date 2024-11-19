import React from "react";

const Franchising = () => {
  return (
    <div>
      <div class="relative h-80 ">
        <div class="absolute inset-0 bg-cover bg-center bg-branch "></div>
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="relative z-10 flex items-start justify-center h-full  ">
          <h1 class="text-white text-6xl font-fedro mt-20">Our Branches</h1>
        </div>
      </div>

      <div className="px-10 mt-40">
        <div>
          <div class="container mx-auto p-4">
            <h1 class="text-3xl font-fedro text-center">
              Introducing New look
            </h1>
          </div>
        </div>

        <div className="h-96 w-auto">
          <img src="/img/pic.png" className="bg-cover h-full w-full" alt="" />
        </div>

        <main class=" p-4 ">
          <div class="flex flex-col md:flex-row items-center bg-white  rounded-lg overflow-hidden">
            <div class=" md:w-1/2">
              <h2 class="text-2xl font-bold">Pouros and Sons</h2>
              <p class="text-gray-600">
                646 First Street, Quigleyville 36427 country
              </p>
              <div class="flex items-center mt-2">
                <div class="flex text-yellow-500">
                  <span>★★★★★</span>
                </div>
                <span class="text-gray-600 ml-2">(768-123 Reviews)</span>
              </div>
              <p class="text-gray-600 mt-4">Phone: 0321-1234-123</p>
            </div>
            <iframe
              class="w-full md:w-1/2 h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b6e4b0b1a!2sBristol!5e0!3m2!1sen!2s!4v1611810190846!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </main>
      </div>

      <div className="px-10 mt-40 mb-40">
        <div>
          <div class="container mx-auto p-4">
            <h1 class="text-3xl font-fedro text-center">
              We Are Now in Bristol
            </h1>
          </div>
        </div>

        <div className="h-96 w-auto">
          <img src="/img/pic.png" className="bg-cover h-full w-full" alt="" />
        </div>

        <main class=" p-4 ">
          <div class="flex flex-col md:flex-row items-center bg-white  rounded-lg overflow-hidden">
            <div class=" md:w-1/2">
              <h2 class="text-2xl font-bold">Pouros and Sons</h2>
              <p class="text-gray-600">
                646 First Street, Quigleyville 36427 country
              </p>
              <div class="flex items-center mt-2">
                <div class="flex text-yellow-500">
                  <span>★★★★★</span>
                </div>
                <span class="text-gray-600 ml-2">(768-123 Reviews)</span>
              </div>
              <p class="text-gray-600 mt-4">Phone: 0321-1234-123</p>
            </div>
            <iframe
              class="w-full md:w-1/2 h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b6e4b0b1a!2sBristol!5e0!3m2!1sen!2s!4v1611810190846!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Franchising;
