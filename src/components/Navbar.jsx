import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
        <nav className="bg-black bg-opacity-50 fixed right-5 top-20 text-white font-monster rounded-md flex flex-col gap-y-5 p-2 items-center uppercase text-xs z-50">

          <Link  to="/"><div className=' flex flex-col items-center'> 
             <img width="24" height="24" src="https://img.icons8.com/material/24/FFFFFF/home--v5.png" alt="home--v5"/>
            home </div>
          </Link>

          <Link to="/Menu">  <div className=' flex flex-col items-center'>
             <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/restaurant-menu.png" alt="restaurant-menu"/>
              Menu</div>
          </Link>

          <Link to="/Franchise"><div className=' flex flex-col items-center'>
               <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/franchise.png" alt="franchise"/>
                Franchise</div>
          </Link>

          <Link to="/About"> <div className=' flex flex-col items-center'>
               <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/info--v1.png" alt="info--v1"/>
               About</div>
          </Link>

          <Link to="/Contact"><div className=' flex flex-col items-center'>
               <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/phone-disconnected.png" alt="phone-disconnected"/>
               Contact us</div>
          </Link>

            <button className='my-5 h-8 w-20 text-xs text-white bg-teal-600 rounded-md shadow-lg '>BOOK NOW</button>

        </nav>
    
  )
}

export default Navbar