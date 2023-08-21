import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {ShoppingCartContext } from '../../Context'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
//bg-green
const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4'
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-6 px-8 text-sm font-light bg-slate-950'>
      <ul className='flex items-center gap-3 text-lg font-normal text-blue-100'>
        <li className='font-bold text-2xl text-green-700'>
            <NavLink to='/'>
                Shopi
            </NavLink>
        </li>
        <li>
            <NavLink  
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                All
            </NavLink>
        </li>
        <li>
            <NavLink  
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                Clothes
            </NavLink>
        </li>
        <li>
            <NavLink   
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                Electronics
            </NavLink>
        </li>
        <li>
            <NavLink             
            to='/furnitures'
            onClick={() => context.setSearchByCategory('furnitures')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                Furnitures
            </NavLink>
        </li>
        <li>
            <NavLink             
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                Toys
            </NavLink>
        </li>
        <li>
            <NavLink    
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                Others
            </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3 text-lg font-normal text-blue-100'>
        <li className='text-green-600'>
            alan@Fer.com
        </li>
        <li>
        <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li>
        <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Account
          </NavLink>
        </li>
        <li>
        <NavLink
            to='/sing-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Sign In
          </NavLink>
        </li>
        
        <li className='flex items-center'>
        <ShoppingCartIcon className='h-6 w-6 text-blue-100'></ShoppingCartIcon>
        <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
