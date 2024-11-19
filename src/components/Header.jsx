import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="bg-black h-14 w-auto flex justify-between items-center px-20 text-white " >
            <div className='font-monster text-xs'>
                <select name="Language" id="lang" className='bg-black border-0'>
                  <option value="English" >English</option>
                  <option value="Arabic">Arabic</option>
                </select>
            </div>
            <div>
                <h1 className='text-2xl font-fedro '>LOGO</h1>
            </div>
            <div className='flex justify-evenly gap-2'>
            <a href="#"><img width="12" height="12" src="https://img.icons8.com/metro/26/FFFFFF/instagram-new.png" alt="instagram-new"/></a>
            <a href="#"><img width="12" height="12" src="https://img.icons8.com/material-rounded/50/FFFFFF/facebook-f--v2.png" alt="facebook-f--v2"/></a>
            <a href="#"><img width="12" height="12" src="https://img.icons8.com/material-rounded/50/FFFFFF/twitter.png" alt="twitter"/></a>
            </div>
        </header>
    </div>
  )
}

export default Header