import { useState } from 'react'
import { logo, cart, menu } from '../assets'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='fixed w-full z-50 flex items-center justify-between px-10 py-2 bg-n-1'>
      {/* Logo */}
      <Link to='/'>
        <img src={logo} alt='Logo' className='w-60 h-16 py-2' />
      </Link>

      {/* Desktop Links */}
      <ul className='hidden lg:flex gap-24'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'active-link font-bold' : 'nav-link'
          }
        >
          HOME
        </NavLink>
        <NavLink
          to='/about-us'
          className={({ isActive }) =>
            isActive ? 'active-link font-bold' : 'nav-link'
          }
        >
          ABOUT US
        </NavLink>
        <NavLink
          to='/products'
          className={({ isActive }) =>
            isActive ? 'active-link font-bold' : 'nav-link'
          }
        >
          PRODUCTS
        </NavLink>
      </ul>

      {/* Cart Icon */}
      <div>
        <img src={cart} alt='Cart' className='w-7 h-7 hover:cursor-pointer' />
      </div>

      {/* Menu Icon for Mobile */}
      <div className='block lg:hidden'>
        <img
          src={menu}
          alt='Menu'
          className='w-7 h-7 cursor-pointer'
          onClick={toggleMenu}
        />
      </div>

      {/* Full-Screen Mobile Menu */}
      {isMenuOpen && (
        <div className='fixed inset-0  z-50 flex flex-col items-center justify-center'>
          {/* Close Button */}
          <div className='absolute top-4 right-4'>
            <img
              src=''
              alt='Close'
              className='w-7 h-7 cursor-pointer'
              onClick={toggleMenu}
            />
          </div>

          {/* Mobile Menu Links */}
          <ul className='flex flex-col items-center gap-8 text-xl'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'text-n-2 font-bold uppercase'
                  : 'text-gray-900 font-semibold uppercase'
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to='/featured'
              className={({ isActive }) =>
                isActive
                  ? 'text-n-2 font-bold uppercase'
                  : 'text-gray-900 font-semibold uppercase'
              }
              onClick={toggleMenu}
            >
              Featured
            </NavLink>
            <NavLink
              to='/products'
              className={({ isActive }) =>
                isActive
                  ? 'text-n-2 font-bold uppercase'
                  : 'text-gray-900 font-semibold uppercase'
              }
              onClick={toggleMenu}
            >
              Products
            </NavLink>
            <NavLink
              to='/new'
              className={({ isActive }) =>
                isActive
                  ? 'text-n-2 font-bold uppercase'
                  : 'text-gray-900 font-semibold uppercase'
              }
              onClick={toggleMenu}
            >
              New
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
