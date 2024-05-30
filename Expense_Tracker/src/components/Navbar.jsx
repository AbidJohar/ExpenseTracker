import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
     <>
     <div className='w-full h-14 flex items-center justify-between px-12 shadow-lg'>
        <h2 className='font-bold text-xl'>Expense Tracker</h2>
        <Link to="/transaction" className='py-2 px-3 bg-black text-white font-semibold rounded-md'>
        Add item
      </Link>
     </div>
     </>
  )
}

export default Navbar
