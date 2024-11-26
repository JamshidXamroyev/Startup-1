import React, { useState } from 'react'
import { logo, navigation } from '../util/constants'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [shadow, setShadow] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const navigate = useNavigate()
  return (
    <div>
      <header className={`z-[101] bg-white flex nt:py-0 max-xs:py-3 justify-between items-center w-full fixed top-0 left-0 nt:px-10 px-3 border ${shadow ? "shadow-md shadow-gray-400" : ""}`}>
        <div className='nt:w-[16vw] w-[30vw]'>
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
        </div>
        <nav className='max-pl:hidden block'>
          <ul className='flex justify-start items-center gap-7'>{navigation.map(item => (
            <li key={item.id} className=' duration-300 cursor-pointer hover:text-[#32bb78]'>
              <a onClick={() => navigate(item.navigate)}>{item.title}</a>
            </li>
          ))}</ul>
        </nav>
        <div className='max-pl:block hidden'>
          {navbar ? (
            <nav className='absolute z-[1] top-0 pt-10 left-0 bg-white py-5 w-full'>
            <ul className='flex justify-start max-pl:flex-col items-center gap-7'>{navigation.map(item => (
              <li key={item.id} className=' duration-300 hover:text-[#32bb78]'>
                <a href={item.navigate}>{item.title}</a>
              </li>
            ))}</ul>
            <i className="fa-solid fa-xmark text-2xl z-[2] absolute right-3 top-3" onClick={() => setNavbar(prev => !prev)}></i>
          </nav>
          ) : (
            <i className="fa-solid fa-bars text-2xl" onClick={() => setNavbar(prev => !prev)}></i>
          ) }
          
        </div>  
      </header>
    </div>
  )
}

export default Navbar