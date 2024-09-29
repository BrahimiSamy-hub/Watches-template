import { logo, cart } from '../assets'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='fixed w-full z-50 flex items-center justify-between px-10 py-2'>
      <Link to='/'>
        <img src={logo} alt='Logo' className='w-58 h-16 py-2' />
      </Link>

      <ul className='flex gap-24'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'active-link font-bold' : 'nav-link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? 'active-link font-bold' : 'nav-link'
          }
        >
          Featured
        </NavLink>
        <NavLink
          to='/products'
          className={({ isActive }) =>
            isActive ? 'active-link font-bold' : 'nav-link'
          }
        >
          Products
        </NavLink>
      </ul>
      <div>
        <img src={cart} alt='' className='w-7 h-7 hover:cursor-pointer' />
      </div>
    </nav>
  )
}

export default Navbar
