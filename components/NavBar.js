import React from 'react'
import Link from 'next/link'

const NavBar = ({cart}) => {
  return (
    <div><header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img className='w-8' src="/logo.svg" alt=''/>
        <span className="ml-3 text-xl">Myshop</span>
        </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
        <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
        <Link href="/products" className="mr-5 hover:text-gray-900">Products</Link>
        <Link href="/contect" className="mr-5 hover:text-gray-900">Contect Us</Link>
        <Link href="/checkout" className="mr-5 hover:text-gray-900">Cart({cart.length})</Link>
      </nav>
      <button className=" my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">login</button>

    </div>
  </header></div>
  )
}

export default NavBar