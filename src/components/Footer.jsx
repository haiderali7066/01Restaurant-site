import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-300 font-monster">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 py-8">
          {/* Logo + About */}
          <div>
            <h2 className="mb-2 text-2xl text-gray-800 uppercase">LOGO</h2>
            <p className="text-sm text-gray-600 py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              nesciunt velit eligendi,
            </p>
            <input
              type="tel"
              placeholder="Enter your phone"
              className="w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-800 uppercase">
              CONTACT US
            </h2>
            <ul className="text-gray-700 text-sm space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  <img
                    className="inline mr-2"
                    width="14"
                    height="14"
                    src="https://img.icons8.com/fluency-systems-regular/48/1A1A1A/marker--v1.png"
                    alt="location"
                  />
                  25950 Long Lane, North Ismael 14280
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <img
                    className="inline mr-2"
                    width="14"
                    height="14"
                    src="https://img.icons8.com/ios/50/1A1A1A/phone.png"
                    alt="phone"
                  />
                  0965 96659986
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <img
                    className="inline mr-2"
                    width="14"
                    height="14"
                    src="https://img.icons8.com/carbon-copy/50/1A1A1A/new-post.png"
                    alt="email"
                  />
                  contact@Facebook.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <img
                    className="inline mr-2"
                    width="14"
                    height="14"
                    src="https://img.icons8.com/ios/50/1A1A1A/time_2.png"
                    alt="hours"
                  />
                  Sun–Sat / 10:00 AM – 8:00 PM
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-800 uppercase">
              LINKS
            </h2>
            <ul className="text-gray-700 text-sm space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Gallery */}
          <div className="text-center">
            <h2 className="mb-4 text-sm font-semibold text-gray-800 uppercase">
              Gallery
            </h2>

            <div className="grid grid-cols-2 gap-3 justify-center place-items-center px-12">
              <img
                src="/si/1.png"
                alt="gallery 1"
                className="w-20 h-20 object-cover rounded"
              />
              <img
                src="/si/2.png"
                alt="gallery 2"
                className="w-20 h-20 object-cover rounded"
              />
              <img
                src="/si/3.png"
                alt="gallery 3"
                className="w-20 h-20 object-cover rounded"
              />
              <img
                src="/si/4.png"
                alt="gallery 4"
                className="w-20 h-20 object-cover rounded"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="px-4 py-6 bg-teal-600 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2023 <a href="#">Haider™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 md:mt-0 space-x-5">
            <a href="#" className="text-white hover:text-gray-200">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
