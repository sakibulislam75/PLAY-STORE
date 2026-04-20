import React from 'react';

import logo from '../../assets/images/logo.png'
import { IoLogoGithub } from 'react-icons/io';
import { NavLink } from 'react-router';
import MyNavLink from './MyNavLink';
const Navbar = () => {

  return (
    <div>
      <div className="max-lg:collapse bg-base-200 lg: shadow-sm w-full rounded-md">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <span className="flex items-center gap-1">
              <img src={logo} alt="Logo" className='h-[30px] w-fit ml-1' />
              <h2>HERO.IO</h2>
            </span>
          </div>
          <div className="navbar-center hidden lg:flex gap-3.5" >

           <MyNavLink to='/'>Home</MyNavLink>
            <MyNavLink to='/Apps'>Apps</MyNavLink>
            <MyNavLink to='/Installation'>Installation</MyNavLink>
            <MyNavLink to='/Dashboard'>Dashboard</MyNavLink>

          </div>
          <div className="navbar-end flex gap-1 ">
            <button className="btn btn-ghost bg-black text-white"><IoLogoGithub className='text-white' /> Contribute</button>
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu">
            <li>  <MyNavLink to='/'>Home</MyNavLink></li>
            <li>
              <MyNavLink to='/Apps'>Apps</MyNavLink>
            </li>
            <li>  <MyNavLink to='/Installation'>Installation</MyNavLink></li>
            <li> <MyNavLink to='/Dashboard'>Dashboard</MyNavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;