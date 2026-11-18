import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav aria-label="Main navigation"
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link 
          to='/' 
          className='flex items-center gap-2' 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="" aria-hidden="true" width="36" height="36" className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>&nbsp;Max Surnin&nbsp;
           <span className='md:block hidden'>| Portfolio</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 md:gap-6 sm:gap-4'>
          {navLinks.map((link) => (
            <li
             key={link.id}
             className={`
             ${ active === link.title ? "text-white" : "text-secondary"}
             hover:text-white text-[18px] font-medium cursor-pointer
             `}
             onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <button
            type="button"
            aria-label={toggle ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={toggle}
            aria-controls="mobile-navigation"
            onClick={() => setToggle(!toggle)}
            className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#915eff]"
          >
            <img
              src={toggle ? close : menu}
              alt=""
              aria-hidden="true"
              width="28"
              height="28"
              className='w-[28px] h-[28px] object-contain'
            />
          </button>
          <div id="mobile-navigation" className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                key={link.id}
                className={`
                ${ active === link.title ? "text-white" : "text-secondary"}
                font-poppins font-medium cursor-pointer text-[16px]
                `}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title)
                }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul> 
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
