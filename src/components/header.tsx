import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='bg-gray-800'>
      <h1 className='text-4xl text-white'>AL Falah Rice Int</h1>
      
      <nav className='flex justify-end mt- text-white gap-10 mr-5'>
        
            <Link href="/" className='hover:underline'>Home</Link>
            <Link href="about"className='hover:underline'>About</Link>
            <Link href="products"className='hover:underline'>Products</Link>
            <Link href="contact"className='hover:underline'>Contact</Link>
            <FaShoppingCart/>
      </nav>
    </header>
  )
}

export default Header
