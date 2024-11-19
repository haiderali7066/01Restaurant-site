import React from 'react'

const Footer = () => {
  return (
    <div>

    <footer class="bg-slate-300 font-monster ">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-2 gap-8 px-4 py-6  lg:py-8 md:grid-cols-4">
            <div>
                <h2 class="mb-2 text-2xl  text-black uppercase ">LOGO</h2>
                <p className='text-xs py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nesciunt velit eligendi,</p>
                <input type="tel" name="" id="" />
            </div>

            <div>
                <h2 class="mb-6 text-sm font-semibold text-black">CONTACT US</h2>
                <ul class="text-black dark:text-gray-400 text-sm ">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">
                        <img className='inline m-1' width="12" height="12" src="https://img.icons8.com/fluency-systems-regular/48/1A1A1A/marker--v1.png" alt="marker--v1"/>
                            25950 Long Lane, North Ismael 14280</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">
                        <img className='inline m-1' width="12" height="12" src="https://img.icons8.com/ios/50/1A1A1A/phone.png" alt="phone"/>
                            0965 96659986</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">
                        <img className='inline m-1' width="12" height="12" src="https://img.icons8.com/carbon-copy/50/1A1A1A/new-post.png" alt="new-post"/>
                            contact@Facebook.com</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">
                        <img className='inline m-1' width="12" height="12" src="https://img.icons8.com/ios/50/1A1A1A/time_2.png" alt="time_2"/>
                            Sun Sat / 10:00 AM 8:00 PM</a>
                    </li>
                </ul>
            </div>

            <div >
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">LINKS</h2>
                <ul class="text-black text-sm  dark:text-gray-400 ">
                    <li class="mb-4">
                        <a href="#" class=" hover:underline">About</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Our Menu</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Team</a>
                    </li>
                </ul>
            </div>
            
            <div >
                <h2 class="mb-6 text-sm font-semibold text-black uppercase ">gallery</h2>
                <div className='grid grid-cols-3 gap-1'>
                    <img height="82" width="83" src="/img/unsplash__79ZJS8pV70.png" alt="" />
                    <img height="82" width="83" src="/img/unsplash__79ZJS8pV70.png" alt="" />
                    <img height="82" width="83" src="/img/unsplash__79ZJS8pV70.png" alt="" />
                    <img height="82" width="83" src="/img/unsplash__79ZJS8pV70.png" alt="" />
                    <img height="82" width="83" src="/img/unsplash__79ZJS8pV70.png" alt="" />
                    <img height="82" width="83" src="/img/unsplash__79ZJS8pV70.png" alt="" />
                </div>
            </div>
        </div>
        {/* copyright */}
        <div class="px-4 py-6 bg-teal-600 md:flex md:items-center md:justify-evenly">
            <span class="text-sm text-black dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Haider™</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                <a href="#" class="text-black hover:text-gray-900 dark:hover:text-white">
                      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                        </svg>
                      <span class="sr-only">Facebook page</span>
                  </a>
                  <a href="#" class="text-black hover:text-gray-900 dark:hover:text-white">
                      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                            <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                        </svg>
                      <span class="sr-only">Discord community</span>
                  </a>
                 
            </div>
          </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer