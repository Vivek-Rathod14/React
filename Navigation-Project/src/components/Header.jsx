import React from 'react'
import {Link} from "react-router-dom"
import ProductAdd from './ProdcutAdd'
const Header = () => {
  return (
<div>
  <nav className="bg-gradient-to-r from-[#1f2937] to-[#111827] shadow-lg">
    <ul className="flex justify-between items-center px-10 h-16">
      
      <li>
        <Link
          to="/"
          className="text-white font-semibold text-lg tracking-wide 
          relative group transition duration-300"
        >
          Prodcut Add
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>

      <li>
        <Link
          to="/prodcutView"
          className="text-white font-semibold text-lg tracking-wide 
          relative group transition duration-300"
        >
          Prodcut View
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>

    </ul>
  </nav>
</div>
  )
}

export default Header