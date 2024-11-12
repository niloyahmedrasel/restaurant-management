import React, { useContext } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';


const Navbar = () => {
  
  const [text]=useTypewriter(
    {
      words: ['Fusion'],
      Loop:10,
    }
  )
    return (
        <div className="navbar bg-transparent bg-opacity-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li className='hover:text-mytheme-gold scale-75'><a href='/'>Home</a></li>
      <li className='hover:text-mytheme-gold scale-75'><a href='/'>Menu</a></li>
      <li className='hover:text-mytheme-gold scale-75'><a href='/'>About Us</a></li>
      <li className='hover:text-mytheme-gold scale-75'><a href='/'>Services</a></li>
      <li className='hover:text-mytheme-gold scale-75'><a href='/'>Contact</a></li>
     
      </ul>
    </div>
    <a href='/' className="text-3xl  font-bold text-mytheme-white mx-10">Flavor <span className='text-mytheme-crimson '>{text}</span></a>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-mytheme-silver text-3xl ">
     <li className='hover:text-mytheme-gold scale-75'> <Link to='/'>Home</Link></li>
     <li className='hover:text-mytheme-gold scale-75'><a href='/'>Menu</a></li>
     <li className='hover:text-mytheme-gold scale-75'><a href='/'>About Us</a></li>
     <li className='hover:text-mytheme-gold scale-75'><a href='/'>Services</a></li>
     <li className='hover:text-mytheme-gold scale-75'><a href='/'>Contact</a></li>
     
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;